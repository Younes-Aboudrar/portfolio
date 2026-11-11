<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import Analytics from '#lib/components/Analytics.svelte';
	import { getLocale, initializeLocale } from '#lib/i18n/i18n.svelte.ts';
	import { getTheme, initializeTheme } from '#lib/theme.svelte.ts';
	import { onMount } from 'svelte';
	onMount(() => { initializeLocale(); initializeTheme(); document.documentElement.classList.add('js'); });

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="theme-color" content={getTheme() ? '#091325' : '#fbfcff'} />
	<meta property="og:site_name" content="aboudrar.dev" />
	<meta property="og:locale" content={getLocale() === 'fr' ? 'fr_FR' : 'en_US'} />
</svelte:head>

<Analytics />

{@render children()}
