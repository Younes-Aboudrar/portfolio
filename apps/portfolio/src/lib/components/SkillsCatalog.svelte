<script lang="ts">
	import { t } from '#lib/i18n/i18n.svelte.ts';
	import { Search, ArrowUpRight, Layers } from '@lucide/svelte';
	import SectionHeading from './SectionHeading.svelte';

	let { headingLevel = 2 }: { headingLevel?: 1 | 2 } = $props();
	let query = $state('');
	let domain = $state('all');
	const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
	const categories = $derived(t().skills.categories);
	const filtered = $derived.by(() => {
		const term = normalize(query);
		return categories
			.filter((category) => domain === 'all' || category.id === domain)
			.map((category) => ({
				...category,
				items: normalize(`${category.category} ${category.context}`).includes(term)
					? category.items
					: category.items.filter((item) => normalize(item).includes(term))
			}))
			.filter((category) => category.items.length > 0);
	});
	const count = $derived(filtered.reduce((total, category) => total + category.items.length, 0));
	const journey = $derived([
		...t().experience.jobs.map((entry) => ({ id: entry.id, label: entry.company, href: `/experience#${entry.id}` })),
		...t().experience.activities.map((entry) => ({ id: entry.id, label: entry.company, href: `/experience#${entry.id}` })),
		...t().education.items.map((entry) => ({ id: entry.id, label: entry.institution, href: `/education#${entry.id}` }))
	]);
</script>

<section id="skills" class="py-20">
	<SectionHeading {headingLevel} title={t().skills.heading} path="skills">
		<Layers class="w-5 h-5" />
	</SectionHeading>
	<p class="max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-zinc-400 mb-8">{t().skills.intro}</p>

	<div class="grid gap-4 sm:grid-cols-[1fr_auto] rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5">
		<div>
			<label for="skill-search" class="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-2">{t().skills.search}</label>
			<div class="relative">
				<Search class="absolute left-3 top-3 w-5 h-5 text-slate-400" />
				<input id="skill-search" type="search" bind:value={query} placeholder={t().skills.searchPlaceholder} class="w-full rounded-lg border border-slate-300 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-950 pl-10 pr-3 py-2.5 text-slate-900 dark:text-zinc-100 focus-visible:outline-2 focus-visible:outline-emerald-500" />
			</div>
		</div>
		<div class="min-w-0">
			<label for="skill-domain" class="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-2">{t().skills.domain}</label>
			<select id="skill-domain" bind:value={domain} class="w-full sm:max-w-80 rounded-lg border border-slate-300 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-950 px-3 py-2.5 text-slate-900 dark:text-zinc-100 focus-visible:outline-2 focus-visible:outline-emerald-500">
				<option value="all">{t().skills.allDomains}</option>
				{#each categories as category}<option value={category.id}>{category.category}</option>{/each}
			</select>
		</div>
	</div>
	<div class="flex flex-wrap items-center justify-between gap-3 my-5 text-sm">
		<p role="status" aria-live="polite" aria-atomic="true" class="text-slate-500 dark:text-zinc-400">{count} {t().skills.results}</p>
		{#if query || domain !== 'all'}
			<button type="button" onclick={() => { query = ''; domain = 'all'; }} class="text-emerald-700 dark:text-emerald-400 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500">{t().skills.clear}</button>
		{/if}
	</div>

	<div class="grid md:grid-cols-2 gap-6 items-start">
		{#each filtered as category (category.id)}
			<article id={`skill-${category.id}`} aria-labelledby={`skill-heading-${category.id}`} class="min-w-0 scroll-mt-24 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6">
				<svelte:element this={headingLevel === 1 ? 'h2' : 'h3'} id={`skill-heading-${category.id}`} class="text-xl font-bold text-slate-900 dark:text-zinc-100">{category.category}</svelte:element>
				<p class="mt-2 text-sm leading-relaxed text-slate-500 dark:text-zinc-400">{category.context}</p>
				<ul class="mt-5 flex flex-wrap gap-2">
					{#each category.items as item}
						<li class="max-w-full rounded-md border border-emerald-100 dark:border-emerald-900/50 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1.5 text-sm text-emerald-800 dark:text-emerald-200">{item}</li>
					{/each}
				</ul>
				{#if category.projectSlugs.length || category.journeyIds?.length}
					<details class="mt-5 border-t border-slate-200 dark:border-zinc-800 pt-4 text-sm">
						<summary class="cursor-pointer font-medium text-slate-700 dark:text-zinc-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500">{t().skills.examples}</summary>
						<ul class="mt-3 space-y-2">
							{#each t().projects.items.filter((project) => category.projectSlugs.includes(project.slug)) as project}
								<li><a href={`/projects/${project.slug}`} class="inline-flex items-start gap-1.5 text-emerald-700 dark:text-emerald-400 hover:underline">{project.title}<ArrowUpRight class="w-4 h-4 mt-0.5 shrink-0" /></a></li>
							{/each}
							{#each journey.filter((entry) => category.journeyIds?.includes(entry.id)) as entry}
								<li><a href={entry.href} class="inline-flex items-start gap-1.5 text-emerald-700 dark:text-emerald-400 hover:underline">{entry.label}<ArrowUpRight class="w-4 h-4 mt-0.5 shrink-0" /></a></li>
							{/each}
						</ul>
					</details>
				{/if}
			</article>
		{:else}
			<p class="md:col-span-2 rounded-xl border border-dashed border-slate-300 dark:border-zinc-700 p-10 text-center text-slate-600 dark:text-zinc-400">{t().skills.empty}</p>
		{/each}
	</div>
</section>
