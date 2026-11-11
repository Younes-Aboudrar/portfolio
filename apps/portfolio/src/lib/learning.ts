import { contact } from './contact';
import type { Locale } from './i18n/types';

// These dedicated destinations are reserved for each entry. The two sites
// currently serve their pause page; creating the categories/notes is separate work.
export function learningLinks(id: string, locale: Locale) {
	const slug = encodeURIComponent(id);
	return {
		blog: `${contact.blog}/tags/${slug}/`,
		wiki: `${contact.wiki}/${locale}/${locale === 'fr' ? 'parcours' : 'journey'}/${slug}/`
	};
}
