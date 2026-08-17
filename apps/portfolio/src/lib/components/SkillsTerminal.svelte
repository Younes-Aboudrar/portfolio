<script lang="ts">
	import { t } from '$lib/i18n/i18n.svelte';
	import SectionHeading from './SectionHeading.svelte';
	import Reveal from './Reveal.svelte';
	import { SquareTerminal } from '@lucide/svelte';
</script>

<section id="skills" class="py-20">
	<SectionHeading title={t().skills.heading} path="skills">
		<SquareTerminal class="w-5 h-5" />
	</SectionHeading>

	<Reveal>
		<div
			class="rounded-xl overflow-hidden border border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#0d1117] shadow-lg"
		>
			<div
				class="flex items-center gap-2 px-4 py-3 bg-slate-100 dark:bg-[#161b22] border-b border-slate-200 dark:border-zinc-800"
			>
				<div class="w-3 h-3 rounded-full bg-red-500"></div>
				<div class="w-3 h-3 rounded-full bg-yellow-500"></div>
				<div class="w-3 h-3 rounded-full bg-green-500"></div>
				<div
					class="ml-2 px-2 py-0.5 rounded text-xs font-mono text-slate-500 bg-slate-200 dark:bg-zinc-800"
				>
					{t().skills.terminalPrompt}
				</div>
			</div>

			<div class="p-6 sm:p-8 font-mono text-sm">
				<div class="text-emerald-600 dark:text-emerald-400 mb-6">
					$ cat skills.json | jq .
				</div>

				<div class="text-slate-800 dark:text-zinc-300 pl-4 space-y-6">
					<div>
						<span class="text-blue-600 dark:text-blue-400">{'{'}</span>
					</div>

					{#each t().skills.categories as category, i}
						<div class="pl-4">
							<span class="text-sky-600 dark:text-sky-300">"{category.category}"</span
							>: <span class="text-slate-500">[</span>
							<div class="pl-4 flex flex-wrap gap-2 py-2">
								{#each category.items as item, j}
									<span
										class="px-2 py-1 bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded text-amber-600 dark:text-amber-300"
									>
										"{item}"<span
											class="text-slate-500 bg-transparent border-none"
											>{j < category.items.length - 1 ? ',' : ''}</span
										>
									</span>
								{/each}
							</div>
							<span class="text-slate-500">]</span
							>{i < t().skills.categories.length - 1 ? ',' : ''}
						</div>
					{/each}

					<div>
						<span class="text-blue-600 dark:text-blue-400">{'}'}</span>
					</div>
				</div>

				<div class="flex items-center gap-2 mt-8">
					<span class="text-emerald-600 dark:text-emerald-400">$</span>
					<span class="w-2 h-4 bg-slate-400 animate-blink"></span>
				</div>
			</div>
		</div>
	</Reveal>
</section>