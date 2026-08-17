<script lang="ts">
	import { t } from '$lib/i18n/i18n.svelte';
	import Counter from './Counter.svelte';
	import Reveal from './Reveal.svelte';
</script>

<Reveal className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
	<div
		class="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-200 dark:bg-zinc-800"
	>
		{#each t().stats as stat, i}
			<div
				class="bg-white dark:bg-zinc-900 p-6 sm:p-8 text-center group hover:bg-emerald-50 dark:hover:bg-emerald-900/10 transition-colors"
			>
				<div
					class="text-3xl sm:text-4xl font-bold font-mono text-emerald-600 dark:text-emerald-400"
				>
					<Counter value={stat.value} suffix={stat.suffix ?? ''} />
				</div>
				<div class="mt-2 text-sm font-medium text-slate-600 dark:text-zinc-400">
					{stat.label}
				</div>
			</div>
		{/each}
	</div>
</Reveal>
