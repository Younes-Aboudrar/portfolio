<script lang="ts">
  let { title, headingLevel = 2, children }: {
    title: string;
    path: string;
    headingLevel?: 1 | 2;
    children: import('svelte').Snippet;
  } = $props();
</script>
<div class="flex items-center gap-4 mb-12 pb-6 border-b border-slate-200 dark:border-zinc-800">
  <span class="text-blue-600 dark:text-blue-400 shrink-0">{@render children()}</span>
  <svelte:element this={headingLevel === 1 ? 'h1' : 'h2'} class="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-zinc-100">{title}</svelte:element>
</div>
