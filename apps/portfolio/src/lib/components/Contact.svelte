<script lang="ts">
	import { t } from '#lib/i18n/i18n.svelte.ts';
	import { contact } from '#lib/contact.ts';
	import SectionHeading from './SectionHeading.svelte';
	import Reveal from './Reveal.svelte';
	import ContactForm from './ContactForm.svelte';
	import { Send, Phone, MessageCircle, ArrowUpRight } from '@lucide/svelte';

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
			<div class="mb-8">
				<h2 class="text-sm font-medium text-slate-600 dark:text-zinc-400 mb-3">{t().contact.messaging}</h2>
				<div class="grid sm:grid-cols-2 gap-3">
					<a href={contact.telegram} target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 text-slate-800 dark:text-zinc-100 hover:border-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500">
						<Send class="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
						<span class="font-medium">Telegram</span><ArrowUpRight class="ml-auto h-4 w-4" />
					</a>
					<a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 text-slate-800 dark:text-zinc-100 hover:border-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500">
						<MessageCircle class="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
						<span class="font-medium">WhatsApp Business</span><ArrowUpRight class="ml-auto h-4 w-4" />
					</a>
				</div>
			</div>
			<ContactForm />
		</div>
	</Reveal>
</section>
