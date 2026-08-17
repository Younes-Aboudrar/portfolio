<script lang="ts">
	import { page } from '$app/state';
	import { t } from '$lib/i18n/i18n.svelte';
	import { contact } from '$lib/contact';
	import BrandIcon from './BrandIcon.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import LangToggle from './LangToggle.svelte';
	import { Menu, X, BookOpen, FileText, ArrowUpRight, Mail } from '@lucide/svelte';

	let isMenuOpen = $state(false);
	let activeSection = $state('');

	const root = $derived(page.url.pathname === '/' ? '' : '/');

	const siteLinks = $derived([
		{ label: t().nav.about, href: root + '#about' },
		{ label: t().nav.experience, href: root + '#experience' },
		{ label: t().nav.projects, href: root + '#projects' },
		{ label: t().nav.education, href: root + '#education' },
		{ label: t().nav.skills, href: root + '#skills' },
		{ label: t().nav.certifications, href: root + '#certifications' },
		{ label: t().nav.contact, href: root + '#contact' }
	]);

	const externalLinks = $derived([
		{ label: t().nav.wiki, href: contact.wiki, icon: 'wiki' },
		{ label: t().nav.blog, href: contact.blog, icon: 'blog' }
	]);

	$effect(() => {
		const sections = document.querySelectorAll<HTMLElement>('section[id]');
		if (!sections.length) return;
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) activeSection = entry.target.id;
				}
			},
			{ rootMargin: '-40% 0px -55% 0px' }
		);
		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	});

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<nav
	class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-slate-200 dark:border-zinc-800 transition-colors"
>
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16">
			<a
				href="/"
				class="group flex items-center gap-2 font-bold text-xl tracking-tight shrink-0"
			>
				<span class="text-emerald-500 font-mono">&gt;_</span>
				<span
					class="text-slate-900 dark:text-white transition-colors group-hover:text-emerald-500"
					>aboudrar.dev</span
				>
			</a>

			<div class="hidden lg:flex items-center gap-6">
				<div class="flex items-center gap-5">
					{#each siteLinks as link}
						<a
							href={link.href}
							class:active={activeSection === link.href.slice(1)}
							class="text-sm font-medium text-slate-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors border-b-2 border-transparent py-1 [&.active]:text-emerald-600 [&.active]:border-emerald-500 [&.active]:dark:text-emerald-400"
						>
							{link.label}
						</a>
					{/each}
				</div>

				<div class="h-4 w-px bg-slate-300 dark:bg-zinc-700"></div>

				<div class="flex items-center gap-3">
					{#each externalLinks as link}
						<a
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
						>
							{#if link.icon === 'wiki'}
								<BookOpen class="w-4 h-4" />
							{:else}
								<FileText class="w-4 h-4" />
							{/if}
							{link.label}
							<ArrowUpRight class="w-3 h-3" />
						</a>
					{/each}
					<ThemeToggle />
					<LangToggle />
				</div>
			</div>

			<div class="lg:hidden flex items-center gap-2">
				<ThemeToggle />
				<LangToggle />
				<button
					onclick={() => (isMenuOpen = !isMenuOpen)}
					class="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white pb-1 focus:outline-none"
					aria-label="Menu"
				>
					{#if isMenuOpen}
						<X class="w-6 h-6" />
					{:else}
						<Menu class="w-6 h-6" />
					{/if}
				</button>
			</div>
		</div>
	</div>

	{#if isMenuOpen}
		<div
			class="lg:hidden border-t border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 pt-2 pb-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto"
		>
			{#each siteLinks as link}
				<a
					href={link.href}
					onclick={closeMenu}
					class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors"
				>
					{link.label}
				</a>
			{/each}

			<div
				class="flex flex-col gap-1 px-3 py-3 mt-2 border-t border-slate-100 dark:border-zinc-800"
			>
				{#each externalLinks as link}
					<a
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						onclick={closeMenu}
						class="inline-flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors"
					>
						{#if link.icon === 'wiki'}
								<BookOpen class="w-4 h-4" />
							{:else}
								<FileText class="w-4 h-4" />
							{/if}
						{link.label}
					</a>
				{/each}

				<div class="flex items-center gap-4 px-3 pt-3">
					<a
						href="https://github.com/{contact.github}"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						class="text-slate-500 hover:text-emerald-500 transition-colors"
					>
						<BrandIcon name="github" className="w-5 h-5" />
					</a>
					<a
						href="https://linkedin.com/in/{contact.linkedin}"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
						class="text-slate-500 hover:text-emerald-500 transition-colors"
					>
						<BrandIcon name="linkedin" className="w-5 h-5" />
					</a>
					<a
						href="mailto:{contact.email}"
						aria-label="Email"
						class="text-slate-500 hover:text-emerald-500 transition-colors"
					>
						<Mail class="w-5 h-5" />
					</a>
				</div>
			</div>
		</div>
	{/if}
</nav>
