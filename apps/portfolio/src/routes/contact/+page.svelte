<script lang="ts">
	import PageShell from '$lib/components/PageShell.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import { t } from '$lib/i18n/i18n.svelte';
</script>

<PageShell title={t().contact.heading} description={t().contact.subheading}>
	<Contact headingLevel={1} />
</PageShell>
