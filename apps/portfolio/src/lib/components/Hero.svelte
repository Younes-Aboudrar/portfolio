<script lang="ts">
	import { t } from '$lib/i18n/i18n.svelte';
	import { contact } from '$lib/contact';
	import Typewriter from './Typewriter.svelte';
	import { ChevronRight, MapPin } from '@lucide/svelte';

	let photoError = $state(false);

	const typeLines = $derived([
		'echo "Ingénieur"',
		'echo "Développeur"',
		'echo "Automatisation & IA"',
		'echo "Rust · Go · Python · TS"'
	]);
</script>

<section id="about" class="min-h-screen flex flex-col justify-center relative pt-24 pb-10">
	<div
		class="absolute inset-0 z-0 pointer-events-none overflow-hidden"
		aria-hidden="true"
	>
		<div class="absolute inset-0 opacity-[0.04] dark:opacity-[0.05]">
			<svg width="100%" height="100%">
				<defs>
					<pattern
						id="grid"
						width="32"
						height="32"
						patternUnits="userSpaceOnUse"
					>
						<path
							d="M32 0H0V32"
							fill="none"
							stroke="currentColor"
							stroke-width="1"
						/>
					</pattern>
				</defs>
				<rect width="100%" height="100%" fill="url(#grid)" />
			</svg>
		</div>
		<div
			class="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-3xl"
		></div>
		<div
			class="absolute bottom-0 -left-32 w-[420px] h-[420px] rounded-full bg-sky-500/10 dark:bg-sky-500/5 blur-3xl"
		></div>
	</div>

	<div
		class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center"
	>
		<div>
			<div
				class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-xs font-mono mb-8 border border-emerald-200 dark:border-emerald-800/50"
			>
				<span class="relative flex h-2 w-2">
					<span
						class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
					></span>
					<span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
				</span>
				{t().hero.badge}
			</div>

			<h2
				class="text-emerald-600 dark:text-emerald-400 font-mono font-semibold tracking-wide uppercase mb-3 text-sm sm:text-base"
			>
				{t().hero.name}
			</h2>

			<h1
				class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight"
			>
				<span class="block text-gradient">{t().hero.headline}</span>
			</h1>

			<p
				class="text-xl sm:text-2xl text-slate-800 dark:text-zinc-200 max-w-3xl leading-relaxed mb-4 font-medium"
			>
				{t().hero.mission}
			</p>

			<p
				class="text-lg sm:text-xl text-slate-600 dark:text-zinc-400 max-w-3xl leading-relaxed mb-8"
			>
				{t().hero.objective}
			</p>

			<div class="flex flex-wrap items-center gap-4 mb-10">
				<a
					href="#experience"
					class="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 px-6 py-3 rounded-lg font-medium transition-colors shadow-lg shadow-slate-900/10 dark:shadow-black/30"
				>
					{t().hero.ctaExperience}
					<ChevronRight class="w-4 h-4" />
				</a>
				<a
					href="mailto:{contact.email}"
					class="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-slate-900 dark:text-zinc-100 border border-slate-200 dark:border-zinc-800 px-6 py-3 rounded-lg font-medium transition-colors"
				>
					{t().hero.ctaContact}
				</a>
			</div>

			<div class="flex items-center gap-2 text-sm text-slate-500 dark:text-zinc-500 font-mono">
				<MapPin class="w-4 h-4 text-emerald-500" />
				{contact.location}
			</div>
		</div>

		<div class="hidden lg:block">
			<div
				class="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#0d1117] shadow-2xl shadow-slate-900/10 dark:shadow-black/40"
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
						younes@aboudrar: ~
					</div>
				</div>

				<div class="p-6">
					{#if !photoError}
						<div class="aspect-square w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-zinc-800">
							<img
								src="/images/profile.jpg"
								alt={contact.name}
								class="w-full h-full object-cover"
								loading="lazy"
								onerror={() => (photoError = true)}
							/>
						</div>
					{:else}
						<div
							class="aspect-square w-full rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-800 flex items-center justify-center"
						>
							<span class="text-6xl font-bold text-white font-mono">YA</span>
						</div>
					{/if}

					<div class="mt-4 font-mono text-sm text-slate-500 dark:text-zinc-500">
						<div class="flex items-center gap-2 mb-2">
							<span class="text-emerald-500">$</span>
							<Typewriter phrases={typeLines} className="text-slate-700 dark:text-zinc-300" />
						</div>
						<div class="flex items-center gap-2">
							<span class="text-emerald-500">$</span>
							<span class="text-slate-500 dark:text-zinc-500">whoami</span>
						</div>
						<div class="pl-5 text-slate-600 dark:text-zinc-400">
							Étudiant ingénieur · Développeur · En quête de maîtrise
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="absolute bottom-0 inset-x-0">
		<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8">
			<div class="flex items-center justify-center gap-3 text-slate-400 dark:text-zinc-600">
				<span class="w-10 h-px bg-slate-300 dark:bg-zinc-700"></span>
				<span class="text-xs font-mono uppercase tracking-widest">scroll</span>
				<span class="w-10 h-px bg-slate-300 dark:bg-zinc-700"></span>
			</div>
		</div>
	</div>
</section>
