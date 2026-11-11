<script lang="ts">
  import { t } from '#lib/i18n/i18n.svelte.ts';
  import { contact } from '#lib/contact.ts';
  import { ArrowUpRight, MapPin } from '@lucide/svelte';
</script>

<section id="intro" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-12">
  <div class="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-12 items-center">
    <div class="min-w-0">
      <p class="blueprint-kicker text-blue-700 dark:text-blue-300 mb-6 max-w-md leading-relaxed">{t().hero.headline}</p>
      <h1 class="text-[2.8rem] sm:text-6xl xl:text-[4.3rem] font-extrabold leading-[1.06] tracking-[-.055em] mb-6">
        {#each t().blueprint.headline as line, i}<span class="block" class:text-blue-600={i === 1} class:dark:text-blue-400={i === 1}>{line}</span>{/each}
      </h1>
      <p class="text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed max-w-lg mb-8">{t().hero.mission}</p>
      <div class="flex flex-wrap items-center gap-3">
        <a href="/projects" class="inline-flex items-center justify-center gap-3 px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-300 dark:hover:bg-blue-200 dark:text-zinc-950 text-sm font-semibold transition-colors">{t().blueprint.allProjects}<ArrowUpRight class="size-4" /></a>
        <a href="/contact" class="inline-flex items-center justify-center px-5 py-3 rounded-md border border-slate-300 dark:border-zinc-700 hover:border-blue-600 dark:hover:border-blue-400 text-sm font-semibold transition-colors">{t().hero.ctaContact}</a>
      </div>
    </div>
    <figure class="blueprint-sheet relative min-w-0 border border-slate-200 dark:border-zinc-800">
      <div class="flex items-center justify-between px-5 py-3 border-b border-slate-200 dark:border-zinc-800 font-mono text-[10px] tracking-widest text-blue-700 dark:text-blue-300" aria-hidden="true"><span>YA / ENGINEERING</span><span>01 — 02</span></div>
      <div class="py-8 sm:py-12 px-2"><img class="blueprint-drawing w-full" src="/brand/blueprint-motor.webp" width="1536" height="1024" alt="" fetchpriority="high" /></div>
      <figcaption class="px-5 py-3 border-t border-slate-200 dark:border-zinc-800 font-mono text-[10px] text-slate-600 dark:text-zinc-400">{t().blueprint.figureCaption}</figcaption>
    </figure>
  </div>
  <div class="grid md:grid-cols-[1fr_1.4fr] gap-5 mt-12 pt-6 border-t border-slate-200 dark:border-zinc-800">
    <div><p class="text-xs font-mono font-medium text-blue-700 dark:text-blue-300 mb-2">{t().hero.badge}</p><p class="flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-500"><MapPin class="size-3.5" />{contact.location}</p></div>
    <p class="text-sm leading-relaxed text-slate-600 dark:text-zinc-400">{t().hero.objective}</p>
  </div>
</section>
