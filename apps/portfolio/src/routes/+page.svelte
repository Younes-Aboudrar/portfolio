<script lang="ts">
  import PageShell from '#lib/components/PageShell.svelte';
  import Hero from '#lib/components/Hero.svelte';
  import ProjectCard from '#lib/components/ProjectCard.svelte';
  import { t } from '#lib/i18n/i18n.svelte.ts';
  import { ArrowUpRight } from '@lucide/svelte';
  const selected = $derived(['maintenance-manager', 'pfa-qualite-industrielle-iot'].flatMap(slug => t().projects.items.filter(project => project.slug === slug)));
</script>
<PageShell title={t().nav.home} description={t().meta.description} fullWidth>
  <Hero />
  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12" aria-labelledby="selected-heading">
    <div class="flex flex-wrap items-baseline justify-between gap-4 mb-7"><h2 id="selected-heading" class="text-2xl sm:text-3xl font-bold">{t().blueprint.selectedWork}</h2><a href="/projects" class="text-xs font-mono text-blue-700 dark:text-blue-300 hover:underline">{t().blueprint.allProjects} ↗</a></div>
    <div class="space-y-4">{#each selected as project}<ProjectCard {project} />{/each}</div>
  </section>
  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 pb-20" aria-labelledby="explore-heading">
    <h2 id="explore-heading" class="text-2xl sm:text-3xl font-bold mb-4">{t().home.heading}</h2>
    <p class="text-slate-600 dark:text-zinc-400 max-w-3xl mb-8">{t().home.intro}</p>
    <div class="grid md:grid-cols-2 gap-x-12">
      {#each t().home.pages as item, i}
        <a href={item.href} class="group flex gap-5 py-6 border-t border-slate-200 dark:border-zinc-800">
          <span class="font-mono text-xs text-blue-600 dark:text-blue-400 pt-1" aria-hidden="true">0{i + 1}</span>
          <div class="flex-1"><h3 class="text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">{item.title}</h3><p class="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">{item.description}</p></div><ArrowUpRight class="size-4 shrink-0 mt-1 text-blue-600 dark:text-blue-400" />
        </a>
      {/each}
    </div>
  </section>
</PageShell>
