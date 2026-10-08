<script lang="ts">
	import { t } from '$lib/i18n/i18n.svelte';
	import { contact } from '$lib/contact';
	import SectionHeading from './SectionHeading.svelte';
	import Reveal from './Reveal.svelte';
	import ContactForm from './ContactForm.svelte';
	import { Send, Phone } from '@lucide/svelte';

	let { headingLevel = 2 }: { headingLevel?: 1 | 2 } = $props();
</script>

<section id="contact" class="py-20">
	<SectionHeading {headingLevel} title={t().contact.heading} path="contact">
		<Send class="w-5 h-5" />
	</SectionHeading>

	<Reveal>
		<div class="max-w-3xl">
			<p class="text-lg text-slate-600 dark:text-zinc-400 leading-relaxed mb-10">
				{t().contact.subheading}
			</p>
			<a href={contact.phoneHref} class="inline-flex items-center gap-3 mb-8 text-lg font-medium text-emerald-600 dark:text-emerald-400 hover:underline">
				<Phone class="w-5 h-5 shrink-0" />
				{contact.phone}
			</a>
			<ContactForm />
		</div>
	</Reveal>
</section>
