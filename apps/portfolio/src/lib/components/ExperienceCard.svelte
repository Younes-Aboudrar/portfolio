<script lang="ts">
  import { getLocale, t } from '#lib/i18n/i18n.svelte.ts';
  import SectionHeading from './SectionHeading.svelte';
  import LearningLinks from './LearningLinks.svelte';
  import { learningLinks } from '#lib/learning.ts';
  import siteStatus from '#lib/site-status.json';
  import { Briefcase, Users } from '@lucide/svelte';
  let { headingLevel = 2, group = 'professional' }: { headingLevel?: 1 | 2; group?: 'professional' | 'extracurricular' } = $props();
  const extracurricular = $derived(group === 'extracurricular');
  const items = $derived(extracurricular ? t().experience.activities : t().experience.jobs);
</script>
<section id={extracurricular ? 'extracurricular' : 'experience'} class="py-20">
  <SectionHeading {headingLevel} title={extracurricular ? t().experience.extracurricularHeading : t().experience.professionalHeading} path="experience">
    {#if extracurricular}<Users class="size-5" />{:else}<Briefcase class="size-5" />{/if}
  </SectionHeading>
  {#if !extracurricular && !siteStatus.blog && !siteStatus.wiki}<p class="mb-8 max-w-3xl text-sm text-slate-500 dark:text-zinc-400">{t().learning.pausedNote}</p>{/if}
  <div class="border-b border-slate-200 dark:border-zinc-800">
    {#each items as job}
      <article id={job.id} class="relative grid md:grid-cols-[1fr_2.2fr] gap-6 md:gap-12 py-9 border-t border-slate-200 dark:border-zinc-800 scroll-mt-24 focus-within:ring-2 focus-within:ring-blue-500">
        <div><p class="text-xs font-mono text-blue-700 dark:text-blue-300 mb-3">{job.date}</p><p class="text-base font-semibold">{job.company}</p></div>
        <div class="min-w-0">
          <svelte:element this={headingLevel === 1 ? 'h2' : 'h3'} class="text-xl sm:text-2xl font-bold mb-5"><a href={learningLinks(job.id, getLocale()).blog} class="after:absolute after:inset-0 hover:text-blue-600 dark:hover:text-blue-400 focus-visible:underline">{job.role}</a></svelte:element>
          {#if job.tech?.length}<div class="flex flex-wrap gap-2 mb-5">{#each job.tech as tech}<span class="text-xs font-mono px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800/40 rounded-sm">{tech}</span>{/each}</div>{/if}
          <ul class="space-y-3 list-disc pl-4 marker:text-blue-600 dark:marker:text-blue-400">{#each job.tasks as task}<li class="pl-1 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">{task}</li>{/each}</ul>
          <LearningLinks id={job.id} learning={job.learning} />
        </div>
      </article>
    {/each}
  </div>
</section>
