<script lang="ts">
	import { Languages } from '@lucide/svelte';
	import { getLocale, setLocale } from '$lib/i18n/i18n.svelte';
	import { t } from '$lib/i18n/i18n.svelte';

	let locale = $derived(getLocale());
</script>

<button
	type="button"
	onclick={() => setLocale(locale === 'fr' ? 'en' : 'fr')}
	aria-label="Switch language"
	class="inline-flex items-center gap-1.5 px-2.5 h-9 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm font-medium font-mono text-slate-600 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
>
	<Languages class="w-4 h-4" />
	{t().misc.langName}
</button>
