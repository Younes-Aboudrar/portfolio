<script lang="ts">
	import { getLocale, t } from '#lib/i18n/i18n.svelte.ts';
	import SectionHeading from './SectionHeading.svelte';
	import Reveal from './Reveal.svelte';
	import LearningLinks from './LearningLinks.svelte';
	import { learningLinks } from '#lib/learning.ts';
	import siteStatus from '#lib/site-status.json';
	import { GraduationCap } from '@lucide/svelte';

	let { headingLevel = 2 }: { headingLevel?: 1 | 2 } = $props();
</script>

<section id="education" class="py-20">
	<SectionHeading {headingLevel} title={t().education.heading} path="education">
		<GraduationCap class="w-5 h-5" />
	</SectionHeading>
	{#if !siteStatus.blog && !siteStatus.wiki}
		<p class="mb-8 max-w-3xl text-sm text-slate-500 dark:text-zinc-400">{t().learning.pausedNote}</p>
	{/if}

	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		{#each t().education.items as ed, i}
			<Reveal delay={i * 100}>
				<article id={ed.id} class="relative scroll-mt-24 flex gap-4 h-full rounded-xl p-6 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-emerald-300 dark:hover:border-emerald-900 focus-within:ring-2 focus-within:ring-emerald-500">
					<div class="flex flex-col items-center">
						<div
							class="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-2.5 shadow shadow-emerald-500/50"
						></div>
						<div class="w-px h-full bg-slate-200 dark:bg-zinc-800 my-2"></div>
					</div>

					<div class="min-w-0">
						<span
							class="inline-block px-3 py-1 mb-3 text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/20 rounded-full border border-emerald-100 dark:border-emerald-800/50"
						>
							{ed.date}
						</span>
						<svelte:element this={headingLevel === 1 ? 'h2' : 'h3'} class="font-bold text-lg text-slate-900 dark:text-zinc-100 mb-1">
							<a href={learningLinks(ed.id, getLocale()).blog} class="after:absolute after:inset-0 after:rounded-xl hover:text-emerald-600 dark:hover:text-emerald-400 focus-visible:underline">{ed.degree}</a>
						</svelte:element>
						<p class="text-slate-700 dark:text-zinc-300 font-medium mb-3">
							{ed.institution}
						</p>
						<p
							class="text-sm text-slate-600 dark:text-zinc-400 border-l-2 border-emerald-200 dark:border-emerald-900/50 pl-3 italic"
						>
							{ed.highlight}
						</p>
						<LearningLinks id={ed.id} learning={ed.learning} />
					</div>
				</article>
			</Reveal>
		{/each}
	</div>
</section>