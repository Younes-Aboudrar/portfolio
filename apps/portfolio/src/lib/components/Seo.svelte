<script lang="ts">
	import { page } from '$app/state';
	import { contact } from '#lib/contact.ts';
	let { title, description, type = 'website' }: { title: string; description: string; type?: string } = $props();
	const canonical = $derived('https://younes.aboudrar.dev' + page.url.pathname);
</script>
<svelte:head>
	<title>{title} | {contact.name}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={`${title} — ${contact.name}`} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={type} />
	<meta property="og:url" content={canonical} />
	<link rel="canonical" href={canonical} />
</svelte:head>
