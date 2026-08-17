let isDark = $state<boolean>(initTheme());

function initTheme(): boolean {
	if (typeof localStorage === 'undefined') return true;
	const saved = localStorage.getItem('theme');
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
	if (typeof localStorage !== 'undefined') {
		localStorage.setItem('theme', dark ? 'dark' : 'light');
	}
	applyTheme(dark);
}

export function toggleTheme() {
	setTheme(!isDark);
}
