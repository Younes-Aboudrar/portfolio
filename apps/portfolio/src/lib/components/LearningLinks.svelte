<script lang="ts">
	import { BookOpen, FileText, ArrowUpRight } from '@lucide/svelte';
	import { getLocale, t } from '#lib/i18n/i18n.svelte.ts';
	import { learningLinks } from '#lib/learning.ts';
	import siteStatus from '#lib/site-status.json';

	let { id, learning }: { id: string; learning: string[] } = $props();
	const links = $derived(learningLinks(id, getLocale()));
</script>

<div class="mt-6 border-t border-slate-200 dark:border-zinc-800 pt-5">
	<p class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-3">{t().learning.heading}</p>
	<ul class="flex flex-wrap gap-2 text-sm text-slate-700 dark:text-zinc-300">
		{#each learning as item}
			<li class="rounded-md bg-slate-100 dark:bg-zinc-800 px-2.5 py-1">{item}</li>
		{/each}
	</ul>
	<div class="relative z-10 mt-4 flex flex-wrap gap-3 text-sm">
		<a href={links.blog} class="inline-flex items-center gap-2 font-medium text-blue-700 dark:text-blue-400 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500">
			<FileText class="h-4 w-4" /> {t().learning.blog}
			{#if !siteStatus.blog}<span class="text-xs text-slate-500 dark:text-zinc-400">· {t().learning.paused}</span>{/if}
			<ArrowUpRight class="h-3.5 w-3.5" />
		</a>
		<a href={links.wiki} class="inline-flex items-center gap-2 font-medium text-blue-700 dark:text-blue-400 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500">
			<BookOpen class="h-4 w-4" /> {t().learning.wiki}
			{#if !siteStatus.wiki}<span class="text-xs text-slate-500 dark:text-zinc-400">· {t().learning.paused}</span>{/if}
			<ArrowUpRight class="h-3.5 w-3.5" />
		</a>
	</div>
</div>
