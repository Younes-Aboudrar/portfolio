<script lang="ts">
  import { hasImage } from '#lib/images.ts';
  import { t } from '#lib/i18n/i18n.svelte.ts';
  import { ArrowUpRight } from '@lucide/svelte';
  import type { Project } from '#lib/i18n/types.ts';
  let { project, compact = false }: { project: Project; compact?: boolean } = $props();
  let photoError = $state(false);
</script>
<a href="/projects/{project.slug}" class="group grid sm:grid-cols-[1fr_2.1fr] gap-5 sm:gap-8 p-6 sm:p-8 min-w-0 h-full border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-500 dark:hover:border-blue-400 transition-colors rounded-md">
  <div class="min-w-0">
    <p class="text-xs font-mono text-blue-700 dark:text-blue-300 mb-3">{project.context}</p>
    <p class="text-xs text-slate-500 dark:text-zinc-500">{project.status}</p>
    {#if !compact && project.image && hasImage(project.image) && !photoError}
      <img src="/{project.image}" alt="" loading="lazy" onerror={() => (photoError = true)} class="w-full aspect-video object-cover mt-4 rounded-sm" />
    {/if}
  </div>
  <div class="min-w-0">
    <div class="flex items-start justify-between gap-4 mb-3"><h3 class="text-xl sm:text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3><ArrowUpRight class="size-5 shrink-0 text-blue-600 dark:text-blue-400" /></div>
    <p class="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-5">{project.tagline}</p>
    <div class="flex flex-wrap gap-x-4 gap-y-2 mb-5">{#each project.tech.slice(0, 4) as tech}<span class="font-mono text-[11px] text-slate-500 dark:text-zinc-500">{tech}</span>{/each}</div>
    <span class="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 dark:text-blue-300">{t().projects.viewDetails}<ArrowUpRight class="size-3.5" /></span>
  </div>
</a>
