<script lang="ts">
    import { education } from "$lib/data";
    import { GraduationCap } from "lucide-svelte";
</script>

<section id="education" class="py-16">
    <div class="flex items-center gap-3 mb-10">
        <GraduationCap class="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
        <h2 class="text-3xl font-bold text-slate-900 dark:text-zinc-100">
            Education
        </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each education as ed}
            <div class="flex gap-4">
                <!-- Vertical line indicator -->
                <div class="flex flex-col items-center">
                    <div
                        class="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2.5"
                    ></div>
                    <div
                        class="w-px h-full bg-slate-200 dark:bg-zinc-800 my-2"
                    ></div>
                </div>

                <div class="pb-6">
                    <span
                        class="inline-block px-3 py-1 mb-3 text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/20 rounded-full border border-emerald-100 dark:border-emerald-800/50"
                    >
                        {ed.date}
                    </span>
                    <h3
                        class="font-bold text-lg text-slate-900 dark:text-zinc-100 mb-1"
                    >
                        {ed.degree}
                    </h3>
                    <p
                        class="text-slate-700 dark:text-zinc-300 font-medium mb-3"
                    >
                        {ed.institution}
                    </p>
                    <p
                        class="text-sm text-slate-600 dark:text-zinc-400 border-l-2 border-slate-200 dark:border-zinc-800 pl-3 italic"
                    >
                        {ed.highlight}
                    </p>
                </div>
            </div>
        {/each}
    </div>
</section>
