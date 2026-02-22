<script lang="ts">
    import { projects } from "$lib/data";
    import { Code, ArrowUpRight } from "lucide-svelte";
</script>

<section id="projects" class="py-16">
    <div class="flex items-center gap-3 mb-10">
        <Code class="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
        <h2 class="text-3xl font-bold text-slate-900 dark:text-zinc-100">
            Technical Projects
        </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each projects as project}
            <div
                class="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 shadow-sm transition-all hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-700/50"
            >
                <!-- Decoration element -->
                <div
                    class="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-50 dark:bg-emerald-900/10 transition-transform duration-500 group-hover:scale-150"
                ></div>

                <div class="relative z-10">
                    <div class="flex items-center justify-between mb-4">
                        <h3
                            class="font-bold text-lg text-slate-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors"
                        >
                            {project.title}
                        </h3>
                        <ArrowUpRight
                            class="w-5 h-5 text-slate-400 opacity-0 -translate-y-2 translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0"
                        />
                    </div>

                    <p
                        class="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6"
                    >
                        {project.description}
                    </p>
                </div>

                <div
                    class="relative z-10 w-full bg-slate-100 dark:bg-zinc-950 h-[1px] mt-auto group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/30 transition-colors"
                ></div>
            </div>
        {/each}
    </div>
</section>
