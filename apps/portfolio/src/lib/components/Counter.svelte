<script lang="ts">
	import { onMount } from 'svelte';

	let { value, suffix = '', duration = 1200 } = $props();

	let display = $state(0);
	let el: HTMLElement | undefined = $state();

	onMount(() => {
		const node = el;
		if (!node) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			display = value;
			return;
		}
		const observer = new IntersectionObserver(
			(entries) => {
				if (!entries.some((entry) => entry.isIntersecting)) return;
				observer.disconnect();
				const start = performance.now();
				const step = (now: number) => {
					const progress = Math.min((now - start) / duration, 1);
					display = Math.round(value * (1 - Math.pow(1 - progress, 3)));
					if (progress < 1) requestAnimationFrame(step);
				};
				requestAnimationFrame(step);
			},
			{ threshold: 0.4 }
		);
		observer.observe(node);
		return () => observer.disconnect();
	});
</script>

<span bind:this={el}>{display}{suffix}</span>
