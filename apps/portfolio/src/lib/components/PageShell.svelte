<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import type { Snippet } from 'svelte';
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

</script>

<Seo {title} {description} />

<div class="min-h-screen flex flex-col pt-20" id="top">
	<Navbar />
	<main class="flex-grow w-full">
		<div class={fullWidth ? 'w-full' : 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full'}>
			{@render children()}
		</div>
	</main>
	<Footer />
</div>
