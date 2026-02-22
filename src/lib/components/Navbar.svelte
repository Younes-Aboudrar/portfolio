<script lang="ts">
    import { contact } from "$lib/data";
    import { Github, Linkedin, Mail, Menu, X } from "lucide-svelte";

    let isMenuOpen = false;

    const navLinks = [
        { label: "About", href: "#about" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Education", href: "#education" },
        { label: "Skills", href: "#skills" },
    ];
</script>

<nav
    class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-slate-200 dark:border-zinc-800 transition-colors"
>
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <!-- Logo -->
            <a
                href="/"
                class="group flex items-center gap-2 font-bold text-xl tracking-tight"
            >
                <span class="text-emerald-500">>&nbsp;</span>
                <span
                    class="text-slate-900 dark:text-white transition-colors group-hover:text-emerald-500"
                    >aboudrar.dev</span
                >
            </a>

            <!-- Desktop Nav -->
            <div class="hidden md:flex items-center space-x-8">
                <div class="flex space-x-6">
                    {#each navLinks as link}
                        <a
                            href={link.href}
                            class="text-sm font-medium text-slate-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
                        >
                            {link.label}
                        </a>
                    {/each}
                </div>

                <div class="h-4 w-px bg-slate-300 dark:bg-zinc-700"></div>

                <div class="flex items-center space-x-4">
                    <a
                        href="https://github.com/{contact.github}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-slate-500 hover:text-emerald-500 dark:text-zinc-400 transition-colors"
                    >
                        <span class="sr-only">GitHub</span>
                        <Github class="w-5 h-5" />
                    </a>
                    <a
                        href="https://linkedin.com/in/{contact.linkedin}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-slate-500 hover:text-emerald-500 dark:text-zinc-400 transition-colors"
                    >
                        <span class="sr-only">LinkedIn</span>
                        <Linkedin class="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:{contact.email}"
                        class="text-slate-500 hover:text-emerald-500 dark:text-zinc-400 transition-colors"
                    >
                        <span class="sr-only">Email</span>
                        <Mail class="w-5 h-5" />
                    </a>
                </div>
            </div>

            <!-- Mobile menu button -->
            <div class="md:hidden flex items-center">
                <button
                    on:click={() => (isMenuOpen = !isMenuOpen)}
                    class="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white pb-1 focus:outline-none"
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

    <!-- Mobile Nav -->
    {#if isMenuOpen}
        <div
            class="md:hidden border-t border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 pt-2 pb-4 space-y-1"
        >
            {#each navLinks as link}
                <a
                    href={link.href}
                    on:click={() => (isMenuOpen = false)}
                    class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors"
                >
                    {link.label}
                </a>
            {/each}
            <div
                class="flex space-x-4 px-3 py-4 mt-2 border-t border-slate-100 dark:border-zinc-800"
            >
                <a
                    href="https://github.com/{contact.github}"
                    class="text-slate-500 hover:text-emerald-500"
                >
                    <Github class="w-5 h-5" />
                </a>
                <a
                    href="https://linkedin.com/in/{contact.linkedin}"
                    class="text-slate-500 hover:text-emerald-500"
                >
                    <Linkedin class="w-5 h-5" />
                </a>
                <a
                    href="mailto:{contact.email}"
                    class="text-slate-500 hover:text-emerald-500"
                >
                    <Mail class="w-5 h-5" />
                </a>
            </div>
        </div>
    {/if}
</nav>
