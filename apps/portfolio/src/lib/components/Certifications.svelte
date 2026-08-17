<script lang="ts">
	import { t } from '$lib/i18n/i18n.svelte';
	import SectionHeading from './SectionHeading.svelte';
	import Reveal from './Reveal.svelte';
	import { Trophy, Award, Star } from '@lucide/svelte';
</script>

<section id="certifications" class="py-20">
	<SectionHeading title={t().certifications.heading} path="certifications">
		<Trophy class="w-5 h-5" />
	</SectionHeading>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		{#each t().certifications.items as cert, i}
			<Reveal delay={i * 100}>
				<div
					class="group h-full p-6 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md hover:border-emerald-200 dark:hover:border-emerald-900/50 flex flex-col"
				>
					<span
						class="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4 transition-transform group-hover:scale-110"
					>
						{#if i === 0}
							<Trophy class="w-6 h-6" />
						{:else if i === 1}
							<Award class="w-6 h-6" />
						{:else}
							<Star class="w-6 h-6" />
						{/if}
					</span>
					<h3 class="font-semibold text-slate-900 dark:text-zinc-100 leading-snug mb-3">
						{cert.title}
					</h3>
					<p class="text-sm text-emerald-600 dark:text-emerald-400 font-medium mb-1">
						{cert.issuer}
					</p>
					<p class="text-xs font-mono text-slate-500 dark:text-zinc-500 mt-auto">
						{cert.date}
					</p>
				</div>
			</Reveal>
		{/each}
	</div>
</section>