<script lang="ts">
	import PageShell from '$lib/components/PageShell.svelte';
	import ProjectGrid from '$lib/components/ProjectGrid.svelte';
	import { t } from '$lib/i18n/i18n.svelte';

	const category = $derived(t().projects.categories.find((item) => item.id === 'academic')!);
</script>

<PageShell title={category.title} description={category.description}>
	<ProjectGrid headingLevel={1} category="academic" />
</PageShell>
