<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Analytics from '$lib/components/Analytics.svelte';
	import { t } from '$lib/i18n/i18n.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="theme-color" content="#0d1117" />
	<meta property="og:site_name" content="aboudrar.dev" />
	<meta property="og:locale" content={t().misc.langName === 'FR' ? 'fr_FR' : 'en_US'} />
	<meta name="description" content={t().meta.description} />
</svelte:head>

<Analytics />

{@render children()}
