<script lang="ts">
	import { t } from '$lib/i18n/i18n.svelte';
	import { ArrowUpRight } from '@lucide/svelte';
	import type { Project } from '$lib/i18n/types';

	let { project } = $props();

	let photoError = $state(false);
</script>

<a
	href="/projects/{project.slug}"
	class="group flex flex-col h-full overflow-hidden rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-lg hover:border-emerald-300 dark:hover:border-emerald-700/50 hover:-translate-y-1"
>
	<div class="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-zinc-800">
		{#if !photoError}
			<img
				src="/{project.image}"
				alt={project.title}
				loading="lazy"
				onerror={() => (photoError = true)}
				class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
			/>
		{:else}
			<div
				class="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-100 via-emerald-50 to-sky-100 dark:from-emerald-900/30 dark:via-zinc-900 dark:to-zinc-900"
			>
				<span
					class="font-mono text-4xl font-bold text-emerald-600 dark:text-emerald-400"
				>
					{project.tech[0]}
				</span>
			</div>
		{/if}
		<span
			class="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-mono bg-white/90 dark:bg-zinc-950/80 backdrop-blur text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700"
		>
			{project.status}
		</span>
	</div>

	<div class="flex flex-col flex-grow p-6">
		<div class="flex items-start justify-between gap-3 mb-3">
			<h3
				class="font-bold text-lg text-slate-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors"
			>
				{project.title}
			</h3>
			<ArrowUpRight
				class="w-5 h-5 text-slate-400 shrink-0 opacity-0 -translate-y-2 translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:text-emerald-500"
			/>
		</div>

		<p class="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-5">
			{project.tagline}
		</p>

		<div class="flex flex-wrap gap-2 mb-5">
			{#each project.tech.slice(0, 4) as tech}
				<span
					class="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-zinc-700"
				>
					{tech}
				</span>
			{/each}
		</div>

		<div
			class="mt-auto flex items-center gap-1 text-sm font-medium text-emerald-600 dark:text-emerald-400"
		>
			{t().projects.viewDetails}
			<ArrowUpRight class="w-4 h-4" />
		</div>
	</div>
</a>