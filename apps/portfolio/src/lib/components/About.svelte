<script lang="ts">
	import { t } from '$lib/i18n/i18n.svelte';
	import Reveal from './Reveal.svelte';
	import { User, MapPin, Mail, CalendarCheck, Cpu } from '@lucide/svelte';
</script>

<section id="about" class="py-20">
	<Reveal>
		<div class="flex items-center gap-3 mb-12">
			<span class="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50">
				<User class="w-5 h-5" />
			</span>
			<div>
				<h2 class="text-3xl font-bold text-slate-900 dark:text-zinc-100">
					{t().about.heading}
				</h2>
				<p class="text-sm font-mono text-slate-500 dark:text-zinc-500 mt-0.5">
					~/about
				</p>
			</div>
		</div>
	</Reveal>

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
