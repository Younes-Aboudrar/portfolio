<script lang="ts">
	import { t } from '$lib/i18n/i18n.svelte';
	import SectionHeading from './SectionHeading.svelte';
	import Reveal from './Reveal.svelte';
	import ProjectCard from './ProjectCard.svelte';
	import { Code } from '@lucide/svelte';
</script>

<section id="projects" class="py-20">
	<SectionHeading title={t().projects.heading} path="projects">
		<Code class="w-5 h-5" />
	</SectionHeading>

	<p
		class="text-lg text-slate-600 dark:text-zinc-400 max-w-3xl leading-relaxed -mt-6 mb-10"
	>
		{t().projects.subheading}
	</p>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		{#each t().projects.items as project, i}
			<Reveal delay={(i % 2) * 100} className="h-full">
				<ProjectCard {project} />
			</Reveal>
		{/each}
	</div>
</section>