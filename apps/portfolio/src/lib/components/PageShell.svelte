<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/state';
	import { contact } from '$lib/contact';
	import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';

	let {
		title,
		description,
		fullWidth = false,
		children
	}: {
		title: string;
		description: string;
		fullWidth?: boolean;
		children: Snippet;
	} = $props();

	const canonical = $derived('https://younes.aboudrar.dev' + page.url.pathname);
</script>

<svelte:head>
	<title>{title} | {contact.name}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={`${title} — ${contact.name}`} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonical} />
	<link rel="canonical" href={canonical} />
</svelte:head>

<div class="min-h-screen flex flex-col pt-16" id="top">
	<Navbar />
	<main class="flex-grow w-full">
		<div class={fullWidth ? 'w-full' : 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full'}>
			{@render children()}
		</div>
	</main>
	<Footer />
</div>
