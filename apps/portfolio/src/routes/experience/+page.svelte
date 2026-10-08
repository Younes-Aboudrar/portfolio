<script lang="ts">
	import PageShell from '$lib/components/PageShell.svelte';
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import { t } from '$lib/i18n/i18n.svelte';
</script>

<PageShell title={t().experience.heading} description={t().about.body2}>
	<ExperienceCard headingLevel={1} />
	<ExperienceCard group="extracurricular" />
</PageShell>
