<script lang="ts">
	import PageShell from '$lib/components/PageShell.svelte';
	import About from '$lib/components/About.svelte';
	import StatsBar from '$lib/components/StatsBar.svelte';
	import { t } from '$lib/i18n/i18n.svelte';
</script>

<PageShell title={t().about.heading} description={t().about.body}>
	<About headingLevel={1} />
	<div class="pb-20">
		<StatsBar />
	</div>
</PageShell>
