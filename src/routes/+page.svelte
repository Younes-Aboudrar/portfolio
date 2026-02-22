<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import ExperienceCard from "$lib/components/ExperienceCard.svelte";
    import ProjectGrid from "$lib/components/ProjectGrid.svelte";
    import EducationTimeline from "$lib/components/EducationTimeline.svelte";
    import SkillsTerminal from "$lib/components/SkillsTerminal.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { contact } from "$lib/data";
</script>

<svelte:head>
    <title>{contact.name} | Portfolio</title>
    <meta
        name="description"
        content="Portfolio of {contact.name}, Engineering Student & Software Developer."
    />
</svelte:head>

<div class="min-h-screen flex flex-col pt-16" id="top">
    <Navbar />

    <main class="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Hero />

        <div class="h-px bg-slate-200 dark:bg-zinc-800 w-full mb-16"></div>
        <ExperienceCard />

        <div class="h-px bg-slate-200 dark:bg-zinc-800 w-full my-16"></div>
        <EducationTimeline />

        <div class="h-px bg-slate-200 dark:bg-zinc-800 w-full my-16"></div>
        <ProjectGrid />

        <div class="h-px bg-slate-200 dark:bg-zinc-800 w-full my-16"></div>
        <SkillsTerminal />
    </main>

    <Footer />
</div>
