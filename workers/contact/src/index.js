const ALLOWED_ORIGIN = 'https://younes.aboudrar.dev';

const json = (data, status = 200) =>
	new Response(JSON.stringify(data), {
		status,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
			'Access-Control-Allow-Methods': 'POST, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type',
			'Access-Control-Max-Age': '86400'
		}
	});

export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		if (request.method === 'OPTIONS') {
			return new Response(null, {
				status: 204,
				headers: {
					'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
					'Access-Control-Allow-Methods': 'POST, OPTIONS',
					'Access-Control-Allow-Headers': 'Content-Type',
					'Access-Control-Max-Age': '86400'
				}
			});
		}

		if (request.method !== 'POST' || url.pathname !== '/api/contact') {
			return json({ ok: false, error: 'not found' }, 404);
		}

		let body;
		try {
			body = await request.json();
		} catch {
			return json({ ok: false, error: 'invalid json' }, 400);
		}

		const name = typeof body.name === 'string' ? body.name.trim() : '';
		const email = typeof body.email === 'string' ? body.email.trim() : '';
		const message = typeof body.message === 'string' ? body.message.trim() : '';

		if (!name || !email || !message) {
			return json({ ok: false, error: 'champs manquants' }, 400);
		}
		if (name.length > 100 || email.length > 200 || message.length > 5000) {
			return json({ ok: false, error: 'contenu trop long' }, 400);
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
			return json({ ok: false, error: 'email invalide' }, 400);
		}
		if (!env.RESEND_API_KEY) {
			return json({ ok: false, error: 'serveur non configuré' }, 500);
		}

		const from = env.CONTACT_FROM || 'contact@aboudrar.dev';
		const subject = `${env.CONTACT_REPLY_PREFIX || 'contact -'} ${name} <${email}>`;

		try {
			const res = await fetch('https://api.resend.com/emails', {
				method: 'POST',
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
				return json({ ok: false, error: 'envoi échoué' }, 502);
			}
			return json({ ok: true });
		} catch {
			return json({ ok: false, error: 'envoi échoué' }, 502);
		}
	}
};