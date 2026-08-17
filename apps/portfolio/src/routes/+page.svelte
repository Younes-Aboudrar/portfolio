<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import StatsBar from '$lib/components/StatsBar.svelte';
	import About from '$lib/components/About.svelte';
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import EducationTimeline from '$lib/components/EducationTimeline.svelte';
	import Certifications from '$lib/components/Certifications.svelte';
	import ProjectGrid from '$lib/components/ProjectGrid.svelte';
	import SkillsTerminal from '$lib/components/SkillsTerminal.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { t } from '$lib/i18n/i18n.svelte';
	import { contact } from '$lib/contact';
</script>

<svelte:head>
	<title>{contact.name} | Portfolio</title>
	<meta property="og:title" content="{contact.name} — Portfolio" />
	<meta property="og:description" content={t().meta.description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://younes.aboudrar.dev/" />
</svelte:head>

<div class="min-h-screen flex flex-col pt-16" id="top">
	<Navbar />

	<main class="flex-grow w-full">
		<Hero />

		<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-20">
			<StatsBar />
		</div>

		<div class="h-px bg-slate-200 dark:bg-zinc-800 w-full"></div>
		<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
			<About />
		</div>

		<div class="h-px bg-slate-200 dark:bg-zinc-800 w-full"></div>
		<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
			<ExperienceCard />
		</div>

		<div class="h-px bg-slate-200 dark:bg-zinc-800 w-full"></div>
		<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
			<EducationTimeline />
		</div>

		<div class="h-px bg-slate-200 dark:bg-zinc-800 w-full"></div>
		<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
			<Certifications />
		</div>

		<div class="h-px bg-slate-200 dark:bg-zinc-800 w-full"></div>
		<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
			<ProjectGrid />
		</div>

		<div class="h-px bg-slate-200 dark:bg-zinc-800 w-full"></div>
		<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
			<SkillsTerminal />
		</div>

		<div class="h-px bg-slate-200 dark:bg-zinc-800 w-full"></div>
		<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
			<Contact />
		</div>
	</main>

	<Footer />
</div>