<script lang="ts">
	import Reveal from './Reveal.svelte';

	let {
		title,
		path,
		children
	}: {
		title: string;
		path: string;
		children: import('svelte').Snippet;
	} = $props();
</script>

<Reveal>
	<div class="flex items-center gap-3 mb-12">
		<span
			class="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50"
		>
			{@render children()}
		</span>
		<div>
			<h2 class="text-3xl font-bold text-slate-900 dark:text-zinc-100">{title}</h2>
			<p class="text-sm font-mono text-slate-500 dark:text-zinc-500 mt-0.5">~/{path}</p>
		</div>
	</div>
</Reveal>