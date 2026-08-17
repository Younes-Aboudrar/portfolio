<script lang="ts">
	import { t } from '$lib/i18n/i18n.svelte';
	import { contact } from '$lib/contact';
	import BrandIcon from './BrandIcon.svelte';
	import { ArrowUp, Mail, BookOpen, FileText } from '@lucide/svelte';
</script>

<footer class="border-t border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 pt-16 pb-8">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid md:grid-cols-3 gap-10 mb-12">
			<div>
				<div class="flex items-center gap-2 font-bold tracking-tight mb-3">
					<span class="text-emerald-500 font-mono">&gt;_</span>
					<span class="text-slate-900 dark:text-white">aboudrar.dev</span>
				</div>
				<p class="text-sm text-slate-500 dark:text-zinc-500 font-mono leading-relaxed">
					{contact.location}
				</p>
				<p class="text-sm text-slate-500 dark:text-zinc-500 mt-2">
					{t().footer.tagline}
				</p>
			</div>

			<div>
				<h3 class="text-sm font-semibold text-slate-900 dark:text-zinc-100 mb-4 uppercase tracking-wider">
					Explore
				</h3>
				<ul class="space-y-2.5">
					<li>
						<a href="/now" class="text-sm text-slate-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
							{t().nav.now}
						</a>
					</li>
					<li>
						<a href="/cv" class="text-sm text-slate-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
							{t().nav.cv}
						</a>
					</li>
					<li>
						<a href={contact.wiki} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
							<BookOpen class="w-4 h-4" />
							{t().nav.wiki}
						</a>
					</li>
					<li>
						<a href={contact.blog} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
							<FileText class="w-4 h-4" />
							{t().nav.blog}
						</a>
					</li>
				</ul>
			</div>

			<div>
				<h3 class="text-sm font-semibold text-slate-900 dark:text-zinc-100 mb-4 uppercase tracking-wider">
					{t().contact.socials}
				</h3>
				<div class="flex items-center gap-3">
					<a
						href="https://github.com/{contact.github}"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						class="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-300 dark:hover:border-emerald-800 transition-colors"
					>
						<BrandIcon name="github" className="w-5 h-5" />
					</a>
					<a
						href="https://linkedin.com/in/{contact.linkedin}"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
						class="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-300 dark:hover:border-emerald-800 transition-colors"
					>
						<BrandIcon name="linkedin" className="w-5 h-5" />
					</a>
					<a
						href="mailto:{contact.email}"
						aria-label="Email"
						class="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-300 dark:hover:border-emerald-800 transition-colors"
					>
						<Mail class="w-5 h-5" />
					</a>
				</div>
				<a
					href="mailto:{contact.email}"
					class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400"
				>
					{contact.email}
				</a>
			</div>
		</div>

		<div
			class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-zinc-800"
		>
			<div class="text-sm text-slate-500 dark:text-zinc-500 text-center sm:text-left">
				<p>© {new Date().getFullYear()} {contact.name}.</p>
				<p class="mt-1">{t().footer.madeWith}</p>
			</div>

			<a
				href="#top"
				aria-label={t().footer.backToTop}
				class="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 hover:bg-emerald-100 dark:bg-zinc-900 dark:hover:bg-emerald-900/40 text-slate-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
			>
				<ArrowUp class="w-5 h-5" />
			</a>
		</div>
	</div>
</footer>