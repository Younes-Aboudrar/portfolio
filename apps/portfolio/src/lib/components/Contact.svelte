<script lang="ts">
	import { t } from '$lib/i18n/i18n.svelte';
	import SectionHeading from './SectionHeading.svelte';
	import Reveal from './Reveal.svelte';
	import ContactForm from './ContactForm.svelte';
	import { Send } from '@lucide/svelte';
</script>

<section id="contact" class="py-20">
	<SectionHeading title={t().contact.heading} path="contact">
		<Send class="w-5 h-5" />
	</SectionHeading>

	<Reveal>
		<div class="max-w-3xl">
			<p class="text-lg text-slate-600 dark:text-zinc-400 leading-relaxed mb-10">
				{t().contact.subheading}
			</p>
			<ContactForm />
		</div>
	</Reveal>
</section>