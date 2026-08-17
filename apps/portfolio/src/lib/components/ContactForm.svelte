<script lang="ts">
	import { t } from '$lib/i18n/i18n.svelte';
	import { Send, LoaderCircle, CheckCircle2, XCircle } from '@lucide/svelte';
	import { env } from '$env/dynamic/public';

	const endpoint = env.PUBLIC_CONTACT_ENDPOINT || 'https://contact.aboudrar.dev/api/contact';

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let website = $state('');
	let status = $state<'idle' | 'sending' | 'success' | 'error'>('idle');

	const formLabels = $derived(t().contact.form);

	async function submit(event: SubmitEvent) {
		event.preventDefault();
		if (status === 'sending') return;
		if (website) return;
		status = 'sending';
		try {
			const res = await fetch(endpoint, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, message })
			});
			if (!res.ok) throw new Error('Bad response');
			status = 'success';
			name = email = message = '';
		} catch {
			status = 'error';
		}
	}
</script>

<div class="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 shadow-sm">
	<form onsubmit={submit} class="space-y-5">
		<div class="grid sm:grid-cols-2 gap-5">
			<div>
				<label for="contact-name" class="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-1.5">
					{formLabels.name}
				</label>
				<input
					id="contact-name"
					type="text"
					bind:value={name}
					required
					class="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-colors"
				/>
			</div>
			<div>
				<label for="contact-email" class="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-1.5">
					{formLabels.email}
				</label>
				<input
					id="contact-email"
					type="email"
					bind:value={email}
					required
					class="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-colors"
				/>
			</div>
		</div>

		<div>
			<label for="contact-message" class="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-1.5">
				{formLabels.message}
			</label>
			<textarea
				id="contact-message"
				bind:value={message}
				required
				rows="5"
				class="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-colors resize-none"
			></textarea>
		</div>

		<div class="hidden" aria-hidden="true">
			<label>Website <input type="text" bind:value={website} tabindex="-1" autocomplete="off" /></label>
		</div>

		<div class="flex items-center gap-4">
			<button
				type="submit"
				disabled={status === 'sending'}
				class="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
			>
				{#if status === 'sending'}
					<LoaderCircle class="w-4 h-4 animate-spin" />
					{formLabels.sending}
				{:else}
					<Send class="w-4 h-4" />
					{formLabels.send}
				{/if}
			</button>

			{#if status === 'success'}
				<p class="text-sm text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
					<CheckCircle2 class="w-4 h-4" />
					{formLabels.success}
				</p>
			{:else if status === 'error'}
				<p class="text-sm text-red-600 dark:text-red-400 flex items-center gap-2">
					<XCircle class="w-4 h-4" />
					{formLabels.error}
				</p>
			{/if}
		</div>
	</form>
</div>