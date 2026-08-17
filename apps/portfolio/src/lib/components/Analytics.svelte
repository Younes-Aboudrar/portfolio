<script lang="ts">
	import { onMount } from 'svelte';
	import { env } from '$env/dynamic/public';

	onMount(() => {
		const token = env.PUBLIC_CF_ANALYTICS;
		if (!token) return;
		const a = document.createElement('script');
		a.src = 'https://static.cloudflareinsights.com/beacon.min.js';
		a.defer = true;
		a.setAttribute('data-cf-beacon', `{"token":"${token}"}`);
		document.head.appendChild(a);
	});
</script>
