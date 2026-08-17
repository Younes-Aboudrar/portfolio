<script lang="ts">
	import { t } from '$lib/i18n/i18n.svelte';
	import { contact } from '$lib/contact';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BrandIcon from '$lib/components/BrandIcon.svelte';
	import { Printer, Mail, MapPin } from '@lucide/svelte';
</script>

<svelte:head>
	<title>{t().cv.title} | {contact.name}</title>
	<meta name="description" content={`${contact.name} — ${t().cv.title}`} />
</svelte:head>

<div class="min-h-screen flex flex-col pt-16 print:pt-0" id="top">
	<Navbar />

	<main class="flex-grow w-full">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 print:max-w-none print:px-0 print:py-0">
			<div class="flex justify-end mb-6 print:hidden">
				<button
					onclick={() => window.print()}
					class="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
				>
					<Printer class="w-4 h-4" />
					{t().cv.print}
				</button>
			</div>

			<article class="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-8 sm:p-12 print:border-0 print:rounded-none print:p-0 print:dark:bg-white print:text-black">
				<header class="border-b-2 border-emerald-500 pb-6 mb-8 print:border-black">
					<div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
						<div>
							<h1 class="text-3xl font-bold text-slate-900 dark:text-zinc-100 print:text-black">
								{contact.name}
							</h1>
							<p class="text-emerald-600 dark:text-emerald-400 font-medium mt-1 print:text-emerald-700">
								{t().hero.headline}
							</p>
						</div>
						<div class="text-sm text-slate-600 dark:text-zinc-400 space-y-1 print:text-black">
							<p class="inline-flex items-center gap-2">
								<MapPin class="w-4 h-4" />
								{contact.location}
							</p>
							<p class="inline-flex items-center gap-2">
								<Mail class="w-4 h-4" />
								{contact.email}
							</p>
							<p class="inline-flex items-center gap-2">
								<BrandIcon name="github" className="w-4 h-4" />
								github.com/{contact.github}
							</p>
							<p class="inline-flex items-center gap-2">
								<BrandIcon name="linkedin" className="w-4 h-4" />
								linkedin.com/in/{contact.linkedin}
							</p>
						</div>
					</div>
				</header>

				<section class="mb-8">
					<h2 class="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3 print:text-emerald-700">
						{t().cv.profile}
					</h2>
					<p class="text-slate-700 dark:text-zinc-300 leading-relaxed text-sm print:text-black">
						{t().hero.mission}
					</p>
				</section>

				<section class="mb-8">
					<h2 class="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-4 print:text-emerald-700">
						{t().cv.experienceTitle}
					</h2>
					<div class="space-y-6">
						{#each t().experience.jobs as job}
							<div>
								<div class="flex flex-wrap items-baseline justify-between gap-2">
									<h3 class="font-bold text-slate-900 dark:text-zinc-100 print:text-black">
										{job.role} — <span class="font-medium text-emerald-600 dark:text-emerald-400 print:text-emerald-700">{job.company}</span>
									</h3>
									<span class="text-xs font-mono text-slate-500 dark:text-zinc-500 print:text-black">
										{job.date}
									</span>
								</div>
								<ul class="mt-2 space-y-1.5">
									{#each job.tasks as task}
										<li class="flex items-start gap-2 text-sm text-slate-600 dark:text-zinc-400 print:text-black">
											<span class="text-emerald-600 dark:text-emerald-400 mt-0.5">&gt;</span>
											{task}
										</li>
									{/each}
								</ul>
							</div>
						{/each}
					</div>
				</section>

				<section class="mb-8">
					<h2 class="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-4 print:text-emerald-700">
						{t().cv.educationTitle}
					</h2>
					<div class="space-y-4">
						{#each t().education.items as ed}
							<div>
								<div class="flex flex-wrap items-baseline justify-between gap-2">
									<h3 class="font-bold text-slate-900 dark:text-zinc-100 print:text-black">
										{ed.degree}
									</h3>
									<span class="text-xs font-mono text-slate-500 dark:text-zinc-500 print:text-black">
										{ed.date}
									</span>
								</div>
								<p class="text-sm font-medium text-emerald-600 dark:text-emerald-400 print:text-emerald-700">
									{ed.institution}
								</p>
								<p class="text-sm text-slate-600 dark:text-zinc-400 mt-1 print:text-black">
									{ed.highlight}
								</p>
							</div>
						{/each}
					</div>
				</section>

				<section class="mb-8">
					<h2 class="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-4 print:text-emerald-700">
						{t().cv.skillsTitle}
					</h2>
					<div class="grid sm:grid-cols-2 gap-4">
						{#each t().skills.categories as category}
							<div>
								<h3 class="text-sm font-bold text-slate-800 dark:text-zinc-200 mb-1.5 print:text-black">
									{category.category}
								</h3>
								<p class="text-sm text-slate-600 dark:text-zinc-400 print:text-black">
									{category.items.join(' · ')}
								</p>
							</div>
						{/each}
					</div>
				</section>

				<section class="mb-8">
					<h2 class="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-4 print:text-emerald-700">
						{t().cv.projectsTitle}
					</h2>
					<div class="space-y-4">
						{#each t().projects.items as project}
							<div>
								<h3 class="font-bold text-slate-900 dark:text-zinc-100 print:text-black">
									{project.title}
								</h3>
								<p class="text-sm text-slate-600 dark:text-zinc-400 print:text-black">
									{project.tagline} — {project.tech.join(' · ')}
								</p>
							</div>
						{/each}
					</div>
				</section>

				<section>
					<h2 class="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-4 print:text-emerald-700">
						{t().cv.certificationsTitle}
					</h2>
					<ul class="space-y-2">
						{#each t().certifications.items as cert}
							<li class="flex items-start gap-2 text-sm text-slate-600 dark:text-zinc-400 print:text-black">
								<span class="text-emerald-600 dark:text-emerald-400 mt-0.5">&gt;</span>
								<span>
									{cert.title}
									<span class="text-slate-500 dark:text-zinc-500"> — {cert.issuer}, {cert.date}</span>
								</span>
							</li>
						{/each}
					</ul>
				</section>
			</article>
		</div>
	</main>

	<Footer />
</div>

<style>
	@media print {
		@page {
			margin: 1.2cm;
		}
	}
</style>