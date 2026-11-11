<script lang="ts">
	import { hasImage } from '#lib/images.ts';
	import Seo from '#lib/components/Seo.svelte';
	import { page } from '$app/state';
	import { t } from '#lib/i18n/i18n.svelte.ts';
	import Navbar from '#lib/components/Navbar.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import ProjectCard from '#lib/components/ProjectCard.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import BrandIcon from '#lib/components/BrandIcon.svelte';
	import { ArrowLeft, ArrowUpRight, Calendar, Lightbulb, Wrench, Target } from '@lucide/svelte';

	let slug = $derived(page.params.slug);
	let project = $derived(t().projects.items.find((item) => item.slug === slug));
	let category = $derived(t().projects.categories.find((item) => item.id === project?.category));
	let photoError = $state(false);

	const related = $derived(
		project
			? t().projects.items.filter((item) => item.slug !== project.slug && item.category === project.category).slice(0, 2)
			: []
	);
</script>

<Seo title={project?.title ?? '404'} description={project?.tagline ?? t().meta.description} type="article" />

{#if project}
	{@const links = project.links ?? {}}
	{@const hasLinks = Boolean(links.github || links.demo)}

	<div class="min-h-screen flex flex-col pt-20" id="top">
		<Navbar />

		<main class="flex-grow w-full">
			<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
				<a
					href={'/projects/' + project.category}
					class="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8"
				>
					<ArrowLeft class="w-4 h-4" />
					{t().projects.backToProjects}
				</a>

				<header class="mb-10">
					<div class="flex flex-wrap items-center gap-3 mb-4">
						<a href={'/projects/' + project.category} class="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
							{category?.title}
						</a>
						<span
							class="text-xs font-mono px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full border border-blue-100 dark:border-blue-800/50"
						>
							{project.status}
						</span>
						<span
							class="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 rounded-full border border-slate-200 dark:border-zinc-700"
						>
							<Calendar class="w-3 h-3" />
							{project.date}
						</span>
					</div>

					<h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-zinc-100 mb-4">
						{project.title}
					</h1>
					<p class="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">{project.context}</p>
					<p class="text-xl text-slate-600 dark:text-zinc-400 leading-relaxed">
						{project.tagline}
					</p>

					{#if hasLinks}
						<div class="flex flex-wrap gap-3 mt-6">
							{#if links.github}
								<a
									href={links.github}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
								>
									<BrandIcon name="github" className="w-4 h-4" />
									{t().projects.github}
								</a>
							{/if}
							{#if links.demo}
								<a
									href={links.demo}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center gap-2 bg-white hover:bg-slate-50 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-slate-900 dark:text-zinc-100 border border-slate-200 dark:border-zinc-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
								>
									{t().projects.live}
									<ArrowUpRight class="w-4 h-4" />
								</a>
							{/if}
						</div>
					{/if}
				</header>

				{#if project.image && hasImage(project.image) && !photoError}
                    <img src="/{project.image}" alt={project.title} onerror={() => (photoError = true)} class="w-full rounded-lg mb-10" />
                {:else}
                    <hr class="border-slate-200 dark:border-zinc-800 mb-10" />
                {/if}

				<div class="max-w-none mb-12">
					<p class="text-lg text-slate-700 dark:text-zinc-300 leading-relaxed">
						{project.description}
					</p>
				</div>

				<div class="grid md:grid-cols-2 gap-6 mb-12">
					<Reveal>
						<div class="p-6 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 h-full">
							<div class="flex items-center gap-3 mb-4">
								<span class="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
									<Target class="w-4 h-4" />
								</span>
								<h2 class="font-bold text-slate-900 dark:text-zinc-100">
									{t().projects.challengesLabel}
								</h2>
							</div>
							<p class="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
								{project.challenges}
							</p>
						</div>
					</Reveal>

					<Reveal delay={100}>
						<div class="p-6 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 h-full">
							<div class="flex items-center gap-3 mb-4">
								<span class="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
									<Wrench class="w-4 h-4" />
								</span>
								<h2 class="font-bold text-slate-900 dark:text-zinc-100">
									{t().projects.solutionsLabel}
								</h2>
							</div>
							<p class="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
								{project.solutions}
							</p>
						</div>
					</Reveal>
				</div>

				<Reveal>
					<div class="mb-12">
						<h2 class="font-bold text-xl text-slate-900 dark:text-zinc-100 mb-4">
							{t().projects.techLabel}
						</h2>
						<div class="flex flex-wrap gap-2">
							{#each project.tech as tech}
								<span
									class="px-3 py-1.5 text-sm font-mono rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700"
								>
									{tech}
								</span>
							{/each}
						</div>
					</div>
				</Reveal>

				<Reveal>
					<div class="p-6 rounded-xl border border-blue-200 dark:border-blue-900/50 bg-blue-50 dark:bg-blue-900/10 mb-12">
						<div class="flex items-center gap-3 mb-4">
							<span class="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
								<Lightbulb class="w-4 h-4" />
							</span>
							<h2 class="font-bold text-slate-900 dark:text-zinc-100">
								{t().projects.lessonsLabel}
							</h2>
						</div>
						<ul class="space-y-2.5">
							{#each project.lessons as lesson}
								<li class="flex items-start gap-2 text-sm text-slate-700 dark:text-zinc-300">
									<span class="text-blue-600 dark:text-blue-400 font-mono mt-0.5">&gt;&nbsp;</span>
									{lesson}
								</li>
							{/each}
						</ul>
					</div>
				</Reveal>

				{#if related.length}
					<div>
						<h2 class="font-bold text-xl text-slate-900 dark:text-zinc-100 mb-6">
							{t().projects.relatedLabel}
						</h2>
						<div class="grid grid-cols-1 gap-4">
							{#each related as relatedProject}
								<ProjectCard project={relatedProject} />
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</main>

		<Footer />
	</div>
{:else}
	<div class="min-h-screen flex items-center justify-center pt-16">
		<div class="text-center">
			<h1 class="text-2xl font-bold text-slate-900 dark:text-zinc-100 mb-4">404</h1>
			<a href="/" class="text-blue-600 dark:text-blue-400 font-medium">
				{t().misc.notFound}
			</a>
		</div>
	</div>
{/if}
