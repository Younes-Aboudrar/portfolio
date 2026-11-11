<script lang="ts">
	import PageShell from '#lib/components/PageShell.svelte';
	import SkillsCatalog from '#lib/components/SkillsCatalog.svelte';
	import { t } from '#lib/i18n/i18n.svelte.ts';
</script>

<PageShell title={t().skills.heading} description={t().skills.intro}>
	<SkillsCatalog headingLevel={1} />
</PageShell>
