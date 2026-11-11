import { test, mock, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import worker from './index.js';
const valid = { name: 'Visitor', email: 'visitor@example.com', message: 'Hello' };
const request = (body = valid, headers = {}) => new Request('https://contact.example/api/contact', {
 method: 'POST', headers: { 'Content-Type': 'application/json', 'CF-Connecting-IP': '192.0.2.1', ...headers },
 body: typeof body === 'string' ? body : JSON.stringify(body)
});
const environment = () => ({ RESEND_API_KEY: 'test-only', CONTACT_RATE_LIMITER: { limit: mock.fn(async () => ({ success: true })) }, CONTACT_TOTAL_LIMITER: { limit: mock.fn(async () => ({ success: true })) } });
afterEach(() => mock.restoreAll());
for (const payload of [null, [], 42, 'null', '{', {}, { ...valid, email: 'invalid' }, { ...valid, message: 'x'.repeat(5001) }]) {
 test(`reject invalid input ${JSON.stringify(payload).slice(0, 60)}`, async () => {
  const send = mock.method(globalThis, 'fetch', async () => { throw new Error('must not send'); });
  const response = await worker.fetch(request(payload), environment());
  assert.equal(response.status, 400); assert.equal(send.mock.callCount(), 0);
 });
}
test('successful request forwards only validated mail fields, including without Origin', async () => {
 const send = mock.method(globalThis, 'fetch', async () => new Response('{}'));
 const env = environment(); const response = await worker.fetch(request({ ...valid, name: ' Visitor ', to: 'attacker@example.com' }), env);
 assert.equal(response.status, 200); assert.equal(env.CONTACT_RATE_LIMITER.limit.mock.calls[0].arguments[0].key, 'contact:192.0.2.1');
 const mail = JSON.parse(send.mock.calls[0].arguments[1].body);
 assert.deepEqual(mail.to, ['younes@aboudrar.dev']); assert.equal(mail.reply_to, valid.email);
});
for (const binding of ['CONTACT_RATE_LIMITER', 'CONTACT_TOTAL_LIMITER']) {
 test(`${binding} rejects exhausted quota before email`, async () => {
  const send = mock.method(globalThis, 'fetch', async () => new Response('{}')); const env = environment();
  env[binding].limit = async () => ({ success: false });
  const response = await worker.fetch(request(), env);
  assert.equal(response.status, 429); assert.equal(response.headers.get('Retry-After'), '60'); assert.equal(send.mock.callCount(), 0);
 });
 test(`${binding} fails closed when absent or unavailable`, async () => {
  for (const unavailable of [undefined, { limit: async () => { throw new Error('unavailable'); } }]) {
   const env = environment(); env[binding] = unavailable;
   assert.equal((await worker.fetch(request(), env)).status, 503);
  }
 });
}
test('rejects oversized chunked JSON without Content-Length', async () => {
 const body = new ReadableStream({ start(controller) { controller.enqueue(new TextEncoder().encode(' '.repeat(32769))); controller.close(); } });
 const req = new Request('https://contact.example/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json', 'CF-Connecting-IP': '192.0.2.1' }, body, duplex: 'half' });
 assert.equal((await worker.fetch(req, environment())).status, 413);
});
test('honeypot is enforced by server', async () => {
 const send = mock.method(globalThis, 'fetch', async () => new Response('{}'));
 assert.equal((await worker.fetch(request({ ...valid, website: 'spam' }), environment())).status, 200);
 assert.equal(send.mock.callCount(), 0);
});
test('requires platform IP and JSON content type', async () => {
 const noIp = request(); noIp.headers.delete('CF-Connecting-IP');
 assert.equal((await worker.fetch(noIp, environment())).status, 503);
 assert.equal((await worker.fetch(request(valid, { 'Content-Type': 'text/plain' }), environment())).status, 415);
});
test('preserves production CORS and preflight', async () => {
 assert.equal((await worker.fetch(request(valid, { Origin: 'https://other.example' }), environment())).status, 403);
 const r = await worker.fetch(new Request('https://contact.example/api/contact', { method: 'OPTIONS', headers: { Origin: 'https://younes.aboudrar.dev' } }), {});
 assert.equal(r.status, 204); assert.equal(r.headers.get('Access-Control-Allow-Origin'), 'https://younes.aboudrar.dev');
});
test('upstream failure returns controlled response', async () => {
 mock.method(globalThis, 'fetch', async () => new Response('{}', { status: 429 }));
 assert.equal((await worker.fetch(request(), environment())).status, 502);
});

test('development origins require explicit environment configuration', async () => {
 const origin = 'http://localhost:5173';
 const preflight = () => new Request('https://contact.example/api/contact', { method: 'OPTIONS', headers: { Origin: origin } });
 assert.equal((await worker.fetch(preflight(), {})).status, 403);
 const response = await worker.fetch(preflight(), { ALLOWED_ORIGINS: 'http://localhost:5173,http://127.0.0.1:5173' });
 assert.equal(response.status, 204);
 assert.equal(response.headers.get('Access-Control-Allow-Origin'), origin);
});
