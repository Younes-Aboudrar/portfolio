<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import { t } from '#lib/i18n/i18n.svelte.ts';
	import { contact } from '#lib/contact.ts';
	import Navbar from '#lib/components/Navbar.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import { Rocket, Activity, ArrowLeft } from '@lucide/svelte';
</script>

<Seo title={t().now.heading} description={t().now.subheading} />

<div class="min-h-screen flex flex-col pt-20" id="top">
	<Navbar />

	<main class="flex-grow w-full">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
			<a
				href="/"
				class="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8"
			>
				<ArrowLeft class="w-4 h-4" />
				aboudrar.dev
			</a>

			<header class="mb-12">
				<div class="flex items-center gap-3 mb-4">
					<span class="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50">
						<Rocket class="w-5 h-5" />
					</span>
					<h1 class="text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
						{t().now.heading}
					</h1>
				</div>
				<p class="text-lg text-slate-600 dark:text-zinc-400">
					{t().now.subheading}
				</p>
			</header>

			<Reveal>
				<h2 class="text-xl font-bold text-slate-900 dark:text-zinc-100 mb-5">
					{t().now.focusTitle}
				</h2>
				<div class="space-y-4 mb-12">
					{#each t().now.focus as item}
						<div
							class="p-5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm"
						>
							<h3 class="font-bold text-blue-600 dark:text-blue-400 mb-1.5">
								&gt; {item.title}
							</h3>
							<p class="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
								{item.detail}
							</p>
						</div>
					{/each}
				</div>
			</Reveal>

			<Reveal delay={100}>
				<h2 class="text-xl font-bold text-slate-900 dark:text-zinc-100 mb-5">
					{t().now.currentlyTitle}
				</h2>
				<ul class="space-y-2.5">
					{#each t().now.currently as item}
						<li class="flex items-start gap-3 text-slate-600 dark:text-zinc-400">
							<Activity class="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
							{item}
						</li>
					{/each}
				</ul>
			</Reveal>
		</div>
	</main>

	<Footer />
</div>