<script lang="ts">
	import PageShell from '$lib/components/PageShell.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import { t } from '$lib/i18n/i18n.svelte';
	import { ArrowUpRight } from '@lucide/svelte';
</script>

<PageShell title={t().nav.home} description={t().meta.description} fullWidth>
	<Hero />

	<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16" aria-labelledby="explore-heading">
		<h2 id="explore-heading" class="text-3xl font-bold text-slate-900 dark:text-zinc-100 mb-4">
			{t().home.heading}
		</h2>
		<p class="text-lg text-slate-600 dark:text-zinc-400 max-w-3xl mb-10">
			{t().home.intro}
		</p>

		<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each t().home.pages as item, i}
				<Reveal delay={(i % 3) * 80} className="h-full">
					<a
						href={item.href}
						class="group flex flex-col h-full rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 transition-colors hover:border-emerald-400 dark:hover:border-emerald-700"
					>
						<div class="flex items-center justify-between gap-3 mb-3">
							<h3 class="text-xl font-semibold text-slate-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
								{item.title}
							</h3>
							<ArrowUpRight class="w-5 h-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
						</div>
						<p class="text-sm leading-relaxed text-slate-600 dark:text-zinc-400">{item.description}</p>
					</a>
				</Reveal>
			{/each}
		</div>
	</section>
</PageShell>
