import { fr } from '$lib/i18n/fr';
import { error } from '@sveltejs/kit';

export const prerender = true;

export function entries() {
	return fr.projects.items.map((project) => ({ slug: project.slug }));
}

export function load({ params }: { params: { slug: string } }) {
	const project = fr.projects.items.find((item) => item.slug === params.slug);
	if (!project) {
		throw error(404, 'Project not found');
	}
	return { slug: params.slug };
}