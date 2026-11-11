import { readPreference, writePreference } from './storage';

let isDark = $state(false);
export function initializeTheme() { setTheme(initTheme()); }

function initTheme(): boolean {
	if (typeof window === 'undefined') return false;
	const saved = readPreference('theme');
	if (saved === 'dark') return true;
	if (saved === 'light') return false;
	return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function applyTheme(dark: boolean) {
	if (typeof document !== 'undefined') {
		document.documentElement.classList.toggle('dark', dark);
	}
}

export function getTheme(): boolean {
	return isDark;
}

export function setTheme(dark: boolean) {
	isDark = dark;
	writePreference('theme', dark ? 'dark' : 'light');
	applyTheme(dark);
}

export function toggleTheme() {
	setTheme(!isDark);
}
