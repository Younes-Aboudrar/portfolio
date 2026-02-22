<script lang="ts">
  import { experience } from '$lib/data';
  import { Briefcase, Calendar } from 'lucide-svelte';
</script>

<section id="experience" class="py-16">
  <div class="flex items-center gap-3 mb-10">
    <Briefcase class="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
    <h2 class="text-3xl font-bold text-slate-900 dark:text-zinc-100">Experience</h2>
  </div>

  <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-zinc-800 before:to-transparent">
    
    {#each experience as job}
      <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        
        <!-- Timeline Marker -->
        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-zinc-950 bg-slate-100 dark:bg-zinc-900 text-emerald-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-zinc-900 group-hover:border-emerald-500">
          <Calendar class="w-4 h-4" />
        </div>
        
        <!-- Content -->
        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md hover:border-emerald-200 dark:hover:border-emerald-900/50">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
            <div>
              <h3 class="font-bold text-lg text-slate-900 dark:text-zinc-100">{job.role}</h3>
              <p class="text-emerald-600 dark:text-emerald-400 font-medium text-sm">{job.company}</p>
            </div>
            <span class="text-xs font-mono px-3 py-1 bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 rounded-full shrink-0 border border-slate-200 dark:border-zinc-700">
              {job.date}
            </span>
          </div>
          
          <ul class="space-y-3">
            {#each job.tasks as task}
              <li class="flex items-start text-sm text-slate-600 dark:text-zinc-400">
                <span class="mr-3 text-emerald-500 font-mono mt-0.5">>&nbsp;</span>
                <span class="leading-relaxed">{task}</span>
              </li>
            {/each}
          </ul>
        </div>

      </div>
    {/each}

  </div>
</section>
