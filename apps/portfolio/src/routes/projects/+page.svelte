<script lang="ts">
	import PageShell from '$lib/components/PageShell.svelte';
	import ProjectGrid from '$lib/components/ProjectGrid.svelte';
	import { t } from '$lib/i18n/i18n.svelte';
</script>

<PageShell title={t().projects.heading} description={t().projects.subheading}>
	<ProjectGrid headingLevel={1} />
</PageShell>
