import { fr } from './fr';
import { en } from './en';
import type { Dictionary, Locale } from './types';

let currentLocale = $state<Locale>(initLocale());

function initLocale(): Locale {
	if (typeof localStorage === 'undefined') return 'fr';
	const saved = localStorage.getItem('locale');
	if (saved === 'fr' || saved === 'en') return saved;
	return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'fr';
}

export function getLocale(): Locale {
	return currentLocale;
}

export function setLocale(locale: Locale) {
	currentLocale = locale;
	if (typeof localStorage !== 'undefined') localStorage.setItem('locale', locale);
	if (typeof document !== 'undefined') document.documentElement.lang = locale;
}

export function toggleLocale() {
	setLocale(currentLocale === 'fr' ? 'en' : 'fr');
}

export function t(): Dictionary {
	return currentLocale === 'fr' ? fr : en;
}
