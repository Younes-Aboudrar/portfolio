<script lang="ts">
	import { Moon, Sun } from '@lucide/svelte';
	import { getTheme, toggleTheme } from '$lib/theme.svelte';

	let isDark = $derived(getTheme());
</script>

<button
	type="button"
	onclick={() => toggleTheme()}
	aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
	class="relative inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
>
	<Sun class="w-4.5 h-4.5 rotate-0 scale-100 transition-all duration-200 dark:-rotate-90 dark:scale-0" />
	<Moon
		class="absolute w-4.5 h-4.5 rotate-90 scale-0 transition-all duration-200 dark:rotate-0 dark:scale-100"
	/>
</button>
