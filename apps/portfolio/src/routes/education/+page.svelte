<script lang="ts">
	import PageShell from '$lib/components/PageShell.svelte';
	import EducationTimeline from '$lib/components/EducationTimeline.svelte';
	import { t } from '$lib/i18n/i18n.svelte';
	import Certifications from '$lib/components/Certifications.svelte';
</script>

<PageShell title={t().education.heading} description={t().education.items.map((item) => item.institution).join(' · ')}>
	<EducationTimeline headingLevel={1} />
	{#if t().certifications.items.length}
		<Certifications />
	{/if}
</PageShell>
