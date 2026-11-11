<script lang="ts">
  import { getLocale, t } from '#lib/i18n/i18n.svelte.ts';
  import SectionHeading from './SectionHeading.svelte';
  import LearningLinks from './LearningLinks.svelte';
  import { learningLinks } from '#lib/learning.ts';
  import siteStatus from '#lib/site-status.json';
  import { GraduationCap } from '@lucide/svelte';
  let { headingLevel = 2 }: { headingLevel?: 1 | 2 } = $props();
</script>
<section id="education" class="py-20">
  <SectionHeading {headingLevel} title={t().education.heading} path="education"><GraduationCap class="size-5" /></SectionHeading>
  {#if !siteStatus.blog && !siteStatus.wiki}<p class="mb-8 max-w-3xl text-sm text-slate-500 dark:text-zinc-400">{t().learning.pausedNote}</p>{/if}
  <div class="border-b border-slate-200 dark:border-zinc-800">
    {#each t().education.items as ed}
      <article id={ed.id} class="relative grid md:grid-cols-[1fr_2.2fr] gap-6 md:gap-12 py-9 border-t border-slate-200 dark:border-zinc-800 scroll-mt-24 focus-within:ring-2 focus-within:ring-blue-500">
        <div><p class="text-xs font-mono text-blue-700 dark:text-blue-300 mb-3">{ed.date}</p><p class="font-semibold">{ed.institution}</p></div>
        <div class="min-w-0">
          <svelte:element this={headingLevel === 1 ? 'h2' : 'h3'} class="text-xl sm:text-2xl font-bold mb-4"><a href={learningLinks(ed.id, getLocale()).blog} class="after:absolute after:inset-0 hover:text-blue-600 dark:hover:text-blue-400 focus-visible:underline">{ed.degree}</a></svelte:element>
          <p class="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">{ed.highlight}</p>
          <LearningLinks id={ed.id} learning={ed.learning} />
        </div>
      </article>
    {/each}
  </div>
</section>
