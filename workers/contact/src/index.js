const ALLOWED_ORIGIN = 'https://younes.aboudrar.dev';
const MAX_BODY_BYTES = 32 * 1024;

async function readBody(request) {
	const reader = request.body?.getReader();
	if (!reader) throw new SyntaxError('empty body');
	const chunks = [];
	let size = 0;
	try {
		while (true) {
			const { done, value } = await reader.read();
			if (done) break;
			size += value.byteLength;
			if (size > MAX_BODY_BYTES) {
				await reader.cancel();
				throw new RangeError('body too large');
			}
			chunks.push(value);
		}
	} finally {
		reader.releaseLock();
	}
	return JSON.parse(await new Blob(chunks).text());
}

const json = (data, status = 200, allowedOrigin = ALLOWED_ORIGIN) =>
	new Response(JSON.stringify(data), {
		status,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'no-store',
			'X-Content-Type-Options': 'nosniff',
			'Access-Control-Allow-Origin': allowedOrigin,
			'Vary': 'Origin',
			'Access-Control-Allow-Methods': 'POST, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type',
			'Access-Control-Max-Age': '86400'
		}
	});

export default {
	async fetch(request, env) {
		const url = new URL(request.url);
		const origin = request.headers.get('Origin');
		const origins = (env.ALLOWED_ORIGINS || ALLOWED_ORIGIN).split(',').map((value) => value.trim());
		const allowedOrigin = origin && origins.includes(origin) ? origin : origins[0];
		const reply = (data, status = 200) => json(data, status, allowedOrigin);

		if (origin && !origins.includes(origin)) {
			return reply({ ok: false, error: 'origine non autorisée' }, 403);
		}

		if (request.method === 'OPTIONS') {
			return new Response(null, {
				status: 204,
				headers: {
					'Access-Control-Allow-Origin': allowedOrigin,
					'Vary': 'Origin',
					'Access-Control-Allow-Methods': 'POST, OPTIONS',
					'Access-Control-Allow-Headers': 'Content-Type',
					'Access-Control-Max-Age': '86400'
				}
			});
		}

		if (request.method !== 'POST' || url.pathname !== '/api/contact') {
			return reply({ ok: false, error: 'not found' }, 404);
		}

		// Cloudflare supplies this header. Never trust a client-selected forwarding header.
		const ip = request.headers.get('CF-Connecting-IP');
		if (!ip || !env.CONTACT_RATE_LIMITER || !env.CONTACT_TOTAL_LIMITER) {
			return reply({ ok: false, error: 'service temporairement indisponible' }, 503);
		}
		try {
			const client = await env.CONTACT_RATE_LIMITER.limit({ key: `contact:${ip}` });
			const total = client.success && await env.CONTACT_TOTAL_LIMITER.limit({ key: 'contact:all' });
			if (!client.success || !total.success) {
				const response = reply({ ok: false, error: 'trop de demandes' }, 429);
				response.headers.set('Retry-After', '60');
				return response;
			}
		} catch {
			return reply({ ok: false, error: 'service temporairement indisponible' }, 503);
		}
		if (request.headers.get('Content-Type')?.split(';')[0].trim().toLowerCase() !== 'application/json') {
			return reply({ ok: false, error: 'content type invalide' }, 415);
		}

		let body;
		try {
			body = await readBody(request);
		} catch (error) {
			if (error instanceof RangeError) return reply({ ok: false, error: 'contenu trop long' }, 413);
			return reply({ ok: false, error: 'invalid json' }, 400);
		}
		if (!body || typeof body !== 'object' || Array.isArray(body)) {
			return reply({ ok: false, error: 'invalid payload' }, 400);
		}
		if (body.website) return reply({ ok: true });

		const name = typeof body.name === 'string' ? body.name.trim() : '';
		const email = typeof body.email === 'string' ? body.email.trim() : '';
		const message = typeof body.message === 'string' ? body.message.trim() : '';

		if (!name || !email || !message) {
			return reply({ ok: false, error: 'champs manquants' }, 400);
		}
		if (name.length > 100 || email.length > 200 || message.length > 5000) {
			return reply({ ok: false, error: 'contenu trop long' }, 400);
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
			return reply({ ok: false, error: 'email invalide' }, 400);
		}
		if (!env.RESEND_API_KEY) {
			return reply({ ok: false, error: 'serveur non configuré' }, 500);
		}

		const from = env.CONTACT_FROM || 'contact@aboudrar.dev';
		const subject = `${env.CONTACT_REPLY_PREFIX || 'contact -'} ${name} <${email}>`;

		try {
			const res = await fetch('https://api.resend.com/emails', {
				method: 'POST',
				signal: AbortSignal.timeout(10000),
				headers: {
					Authorization: `Bearer ${env.RESEND_API_KEY}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					from,
					to: [env.CONTACT_TO || 'younes@aboudrar.dev'],
					reply_to: email,
					subject,
					text: `${message}\n\n—\n${name}\n${email}`
				})
			});

			if (!res.ok) {
				return reply({ ok: false, error: 'envoi échoué' }, 502);
			}
			return reply({ ok: true });
		} catch {
			return reply({ ok: false, error: 'envoi échoué' }, 502);
		}
	}
};
