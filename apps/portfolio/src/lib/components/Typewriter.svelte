<script lang="ts">
	import { onMount } from 'svelte';

	let { phrases, className = '' } = $props();

	let text = $state('');
	let index = $state(0);
	let charIndex = $state(0);
	let deleting = $state(false);

	onMount(() => {
		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduced || phrases.length === 0) {
			text = phrases[0] ?? '';
			return;
		}
		const tick = () => {
			const current = phrases[index] ?? '';
			if (!deleting) {
				charIndex++;
				text = current.slice(0, charIndex);
				if (charIndex >= current.length) {
					deleting = true;
					setTimeout(tick, 1900);
					return;
				}
				setTimeout(tick, 55 + Math.random() * 70);
			} else {
				charIndex--;
				text = current.slice(0, charIndex);
				if (charIndex <= 0) {
					deleting = false;
					index = (index + 1) % phrases.length;
					setTimeout(tick, 350);
					return;
				}
				setTimeout(tick, 28);
			}
		};
		tick();
	});
</script>

<span class={className}>{text}</span>
<span
	class="inline-block w-[2px] h-[1em] ml-0.5 bg-emerald-500 dark:bg-emerald-400 align-middle animate-blink"
></span>
