<script lang="ts">
	let { phrases, className = '' } = $props();

	let text = $state('');

	$effect(() => {
		const currentPhrases = phrases;
		let index = 0;
		let charIndex = 0;
		let deleting = false;
		let timer: ReturnType<typeof setTimeout>;
		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduced || currentPhrases.length === 0) {
			text = currentPhrases[0] ?? '';
			return;
		}
		const tick = () => {
			const current = currentPhrases[index] ?? '';
			if (!deleting) {
				charIndex++;
				text = current.slice(0, charIndex);
				if (charIndex >= current.length) {
					deleting = true;
					timer = setTimeout(tick, 1900);
					return;
				}
				timer = setTimeout(tick, 55 + Math.random() * 70);
			} else {
				charIndex--;
				text = current.slice(0, charIndex);
				if (charIndex <= 0) {
					deleting = false;
					index = (index + 1) % currentPhrases.length;
					timer = setTimeout(tick, 350);
					return;
				}
				timer = setTimeout(tick, 28);
			}
		};
		tick();
		return () => clearTimeout(timer);
	});
</script>

<span class={className}>{text}</span>
<span
	class="inline-block w-[2px] h-[1em] ml-0.5 bg-emerald-500 dark:bg-emerald-400 align-middle animate-blink"
></span>
