// Persistence is optional: browser policy may deny access even when Storage exists.
export function readPreference(key: string): string | null {
	try { return globalThis.localStorage?.getItem(key) ?? null; } catch { return null; }
}
export function writePreference(key: string, value: string): void {
	try { globalThis.localStorage?.setItem(key, value); } catch { /* Keep the in-memory preference. */ }
}
