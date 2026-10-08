<script lang="ts">
	import { t } from '$lib/i18n/i18n.svelte';
	import Reveal from './Reveal.svelte';
	import SectionHeading from './SectionHeading.svelte';
	import { User, MapPin, Mail, CalendarCheck, Cpu } from '@lucide/svelte';

	let { headingLevel = 2 }: { headingLevel?: 1 | 2 } = $props();
</script>

<section id="about" class="py-20">
	<SectionHeading title={t().about.heading} path="about" {headingLevel}>
		<User class="w-5 h-5" />
	</SectionHeading>

	<div class="grid md:grid-cols-2 gap-10">
		<Reveal delay={100}>
			<div class="space-y-5 text-lg leading-relaxed text-slate-700 dark:text-zinc-300">
				<p>{t().about.body}</p>
				<p class="text-slate-600 dark:text-zinc-400">{t().about.body2}</p>
			</div>
		</Reveal>

		<Reveal delay={200}>
			<div class="space-y-4">
				{#each t().about.facts as fact, i}
					<div
						class="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm"
					>
					<span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
							{#if i === 0}
								<MapPin class="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
							{:else if i === 1}
								<Mail class="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
							{:else if i === 2}
								<CalendarCheck class="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
							{:else}
								<Cpu class="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
							{/if}
						</span>
						<div>
							<div class="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-zinc-500">
								{fact.label}
							</div>
							<div class="font-medium text-slate-800 dark:text-zinc-200">
								{fact.value}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</Reveal>
	</div>
</section>
