<script lang="ts">
  import { hero, contact } from "$lib/data";
  import { Terminal, Cpu, Database, ChevronRight } from "lucide-svelte";
</script>

<section
  id="about"
  class="min-h-[85vh] flex flex-col justify-center relative pt-20 pb-12"
>
  <div
    class="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-end items-start opacity-10 dark:opacity-[0.03]"
  >
    <!-- Abstract background tech shape -->
    <svg
      width="404"
      height="784"
      fill="none"
      viewBox="0 0 404 784"
      class="translate-x-1/3 -translate-y-1/4"
    >
      <defs>
        <pattern
          id="grid"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="0"
            width="4"
            height="4"
            class="text-zinc-900 dark:text-white"
            fill="currentColor"
          ></rect>
        </pattern>
      </defs>
      <rect width="404" height="784" fill="url(#grid)"></rect>
    </svg>
  </div>

  <div class="relative z-10 max-w-4xl">
    <div
      class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-xs font-mono mb-8 border border-emerald-200 dark:border-emerald-800/50"
    >
      <span class="relative flex h-2 w-2">
        <span
          class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
        ></span>
        <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"
        ></span>
      </span>
      <span>System Online. Ready for Deployment.</span>
    </div>

    <h2
      class="text-emerald-600 dark:text-emerald-400 font-mono font-semibold tracking-wide uppercase mb-3 text-sm sm:text-base"
    >
      {contact.name}
    </h2>

    <h1
      class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight"
    >
      <span class="block text-gradient">{contact.title}</span>
    </h1>

    <p
      class="text-xl sm:text-2xl text-slate-800 dark:text-zinc-200 max-w-3xl leading-relaxed mb-4 font-medium"
    >
      {hero.headline}
    </p>

    <p
      class="text-lg sm:text-xl text-slate-600 dark:text-zinc-400 max-w-3xl leading-relaxed mb-8"
    >
      {hero.mission}
    </p>

    <div
      class="p-4 sm:p-6 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl max-w-3xl mb-10 shadow-sm"
    >
      <div class="flex items-start gap-4">
        <Terminal
          class="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1"
        />
        <p
          class="text-slate-700 dark:text-zinc-300 font-mono text-sm leading-relaxed"
        >
          <span class="text-emerald-600 dark:text-emerald-400 font-bold"
            >~> execute --objective:</span
          >
          {hero.objective}
        </p>
      </div>
    </div>

    <div class="flex flex-wrap items-center gap-4">
      <a
        href="#experience"
        class="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 px-6 py-3 rounded-lg font-medium transition-colors"
      >
        View Experience
        <ChevronRight class="w-4 h-4" />
      </a>
      <a
        href="mailto:{contact.email}"
        class="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-slate-900 dark:text-zinc-100 border border-slate-200 dark:border-zinc-800 px-6 py-3 rounded-lg font-medium transition-colors"
      >
        Contact Engine
      </a>
    </div>
  </div>
</section>
