<script lang="ts">
	import PageShell from '$lib/components/PageShell.svelte';
	import SkillsTerminal from '$lib/components/SkillsTerminal.svelte';
	import { t } from '$lib/i18n/i18n.svelte';
</script>

<PageShell title={t().skills.heading} description={t().skills.categories.map((category) => category.category).join(' · ')}>
	<SkillsTerminal headingLevel={1} />
</PageShell>
