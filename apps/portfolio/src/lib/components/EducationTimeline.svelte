<script lang="ts">
	import { t } from '$lib/i18n/i18n.svelte';
	import SectionHeading from './SectionHeading.svelte';
	import Reveal from './Reveal.svelte';
	import { GraduationCap } from '@lucide/svelte';
</script>

<section id="education" class="py-20">
	<SectionHeading title={t().education.heading} path="education">
		<GraduationCap class="w-5 h-5" />
	</SectionHeading>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		{#each t().education.items as ed, i}
			<Reveal delay={i * 100}>
				<div class="flex gap-4 h-full">
					<div class="flex flex-col items-center">
						<div
							class="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-2.5 shadow shadow-emerald-500/50"
						></div>
						<div class="w-px h-full bg-slate-200 dark:bg-zinc-800 my-2"></div>
					</div>

					<div class="pb-6">
						<span
							class="inline-block px-3 py-1 mb-3 text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/20 rounded-full border border-emerald-100 dark:border-emerald-800/50"
						>
							{ed.date}
						</span>
						<h3 class="font-bold text-lg text-slate-900 dark:text-zinc-100 mb-1">
							{ed.degree}
						</h3>
						<p class="text-slate-700 dark:text-zinc-300 font-medium mb-3">
							{ed.institution}
						</p>
						<p
							class="text-sm text-slate-600 dark:text-zinc-400 border-l-2 border-emerald-200 dark:border-emerald-900/50 pl-3 italic"
						>
							{ed.highlight}
						</p>
					</div>
				</div>
			</Reveal>
		{/each}
	</div>
</section>