<script lang="ts">
	import { t } from '$lib/i18n/i18n.svelte';
	import type { ProjectCategory } from '$lib/i18n/types';
	import SectionHeading from './SectionHeading.svelte';
	import Reveal from './Reveal.svelte';
	import ProjectCard from './ProjectCard.svelte';
	import { Code, ArrowLeft, ArrowUpRight } from '@lucide/svelte';

	let { headingLevel = 2, category }: { headingLevel?: 1 | 2; category?: ProjectCategory } = $props();
	const selectedCategory = $derived(t().projects.categories.find((item) => item.id === category));
	const items = $derived(t().projects.items.filter((item) => item.category === category));
	const groups = $derived(
		category === 'academic'
			? [
					{ id: 'academic-projects', title: t().projects.academicProjects, items: items.filter((item) => item.kind === 'project') },
					{ id: 'academic-coursework', title: t().projects.coursework, items: items.filter((item) => item.kind === 'coursework') }
				]
			: [{ id: 'category-projects', title: selectedCategory?.title ?? '', items }]
	);
</script>

<section id="projects" class="py-20">
	{#if selectedCategory}
		<a href="/projects" class="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 mb-8">
			<ArrowLeft class="w-4 h-4" />
			{t().projects.allCategories}
		</a>
	{/if}

	<SectionHeading {headingLevel} title={selectedCategory?.title ?? t().projects.heading} path={category ? 'projects/' + category : 'projects'}>
		<Code class="w-5 h-5" />
	</SectionHeading>
	<p class="text-lg text-slate-600 dark:text-zinc-400 max-w-3xl leading-relaxed -mt-6 mb-10">
		{selectedCategory?.description ?? t().projects.subheading}
	</p>

	{#if !selectedCategory}
		<div class="grid sm:grid-cols-2 gap-6">
			{#each t().projects.categories as group, i}
				{@const count = t().projects.items.filter((item) => item.category === group.id).length}
				<Reveal delay={(i % 2) * 80} className="h-full">
					<a href={'/projects/' + group.id} class="group flex flex-col h-full p-6 sm:p-8 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-emerald-400 dark:hover:border-emerald-700 transition-colors">
						<div class="flex items-start justify-between gap-4 mb-4">
							<h2 class="text-2xl font-bold text-slate-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">{group.title}</h2>
							<ArrowUpRight class="w-5 h-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
						</div>
						<p class="text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">{group.description}</p>
						<p class="text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-auto">{count} {count === 1 ? t().projects.projectSingular : t().projects.projectPlural}</p>
					</a>
				</Reveal>
			{/each}
		</div>
	{:else}
		<nav aria-label={t().projects.heading} class="flex flex-wrap gap-2 mb-10">
			{#each t().projects.categories as group}
				<a href={'/projects/' + group.id} aria-current={group.id === category ? 'page' : undefined} class="px-3 py-2 rounded-lg text-sm font-medium border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-700 dark:aria-[current=page]:bg-emerald-900/20 dark:aria-[current=page]:text-emerald-300">
					{group.title}
				</a>
			{/each}
		</nav>
		{#if category === 'academic'}
			<div class="flex flex-wrap gap-4 mb-10">
				{#each groups as group}
					<a href={'#' + group.id} class="text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline">{group.title} ({group.items.length})</a>
				{/each}
			</div>
		{/if}
		<div class="space-y-16">
			{#each groups as group}
				{#if group.items.length}
					<div id={group.id} class="scroll-mt-24">
						{#if category === 'academic'}
							<h2 class="text-2xl font-bold text-slate-900 dark:text-zinc-100 mb-6">{group.title}</h2>
						{/if}
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							{#each group.items as project, i (project.slug)}
								<Reveal delay={(i % 2) * 80} className="h-full">
									<ProjectCard {project} compact={project.kind === 'coursework'} />
								</Reveal>
							{/each}
						</div>
					</div>
				{/if}
			{/each}
		</div>
	{/if}
</section>
