<script lang="ts">
    import { technicalArsenal } from "$lib/data";
    import { TerminalSquare } from "lucide-svelte";
</script>

<section id="skills" class="py-16">
    <div class="flex items-center gap-3 mb-10">
        <TerminalSquare
            class="w-6 h-6 text-emerald-600 dark:text-emerald-400"
        />
        <h2 class="text-3xl font-bold text-slate-900 dark:text-zinc-100">
            Technical Arsenal
        </h2>
    </div>

    <div
        class="rounded-xl overflow-hidden border border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#0d1117] shadow-lg"
    >
        <!-- Mac-like Terminal Header -->
        <div
            class="flex items-center gap-2 px-4 py-3 bg-slate-100 dark:bg-[#161b22] border-b border-slate-200 dark:border-zinc-800"
        >
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
            <div
                class="ml-2 px-2 py-0.5 rounded text-xs font-mono text-slate-500 bg-slate-200 dark:bg-zinc-800"
            >
                younes@portfolio: ~/arsenal
            </div>
        </div>

        <!-- Terminal Body -->
        <div class="p-6 font-mono text-sm">
            <div class="text-emerald-600 dark:text-emerald-400 mb-4">
                $ cat skills.json | jq .
            </div>

            <div class="text-slate-800 dark:text-zinc-300 pl-4 space-y-6">
                <div>
                    <span class="text-blue-600 dark:text-blue-400">"{"{"}</span>
                </div>

                {#each technicalArsenal as category, i}
                    <div class="pl-4">
                        <span class="text-sky-600 dark:text-sky-300"
                            >"{category.category}"</span
                        >: <span class="text-slate-500">[</span>
                        <div class="pl-4 flex flex-wrap gap-2 py-2">
                            {#each category.items as item, j}
                                <span
                                    class="px-2 py-1 bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded text-amber-600 dark:text-amber-300"
                                >
                                    "{item}"<span
                                        class="text-slate-500 bg-transparent border-none"
                                        >{j < category.items.length - 1
                                            ? ","
                                            : ""}</span
                                    >
                                </span>
                            {/each}
                        </div>
                        <span class="text-slate-500">]</span>{i <
                        technicalArsenal.length - 1
                            ? ","
                            : ""}
                    </div>
                {/each}

                <div>
                    <span class="text-blue-600 dark:text-blue-400">"}"}</span>
                </div>
            </div>

            <div class="flex items-center gap-2 mt-6">
                <span class="text-emerald-600 dark:text-emerald-400">$</span>
                <span class="w-2 h-4 bg-slate-400 animate-pulse"></span>
            </div>
        </div>
    </div>
</section>
