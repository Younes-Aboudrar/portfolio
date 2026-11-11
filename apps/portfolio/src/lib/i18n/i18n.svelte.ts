import { fr } from './fr';
import { en } from './en';
import type { Dictionary, Locale } from './types';

import { readPreference, writePreference } from '../storage';

let currentLocale = $state<Locale>('fr');

export function initializeLocale() { setLocale(initLocale()); }

function initLocale(): Locale {
	if (typeof navigator === 'undefined') return 'fr';
	const saved = readPreference('locale');
	if (saved === 'fr' || saved === 'en') return saved;
	return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'fr';
}

export function getLocale(): Locale {
	return currentLocale;
}

export function setLocale(locale: Locale) {
	currentLocale = locale;
	writePreference('locale', locale);
	if (typeof document !== 'undefined') document.documentElement.lang = locale;
}

export function toggleLocale() {
	setLocale(currentLocale === 'fr' ? 'en' : 'fr');
}

export function t(): Dictionary {
	return currentLocale === 'fr' ? fr : en;
}
