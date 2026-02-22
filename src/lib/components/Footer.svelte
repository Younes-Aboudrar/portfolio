<script lang="ts">
    import { contact } from "$lib/data";
    import { ArrowUp } from "lucide-svelte";
</script>

<footer
    class="border-t border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-12"
>
    <div
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6"
    >
        <div class="flex flex-col items-center md:items-start">
            <div class="flex items-center gap-2 font-bold tracking-tight mb-2">
                <span class="text-emerald-500">>_</span>
                <span class="text-slate-900 dark:text-white"
                    >Younes ABOUDRAR</span
                >
            </div>
            <p class="text-sm text-slate-500 dark:text-zinc-500 font-mono">
                {contact.location} • {contact.phone}
            </p>
        </div>

        <div
            class="text-sm text-slate-500 dark:text-zinc-500 text-center md:text-right"
        >
            <p>© {new Date().getFullYear()} Younes ABOUDRAR.</p>
            <p class="mt-1">Built with SvelteKit & Tailwind CSS.</p>
        </div>

        <!-- Scroll to top button -->
        <a
            href="#top"
            aria-label="Go to top"
            class="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 hover:bg-emerald-100 dark:bg-zinc-900 dark:hover:bg-emerald-900/40 text-slate-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
        >
            <ArrowUp class="w-5 h-5" />
        </a>
    </div>
</footer>
