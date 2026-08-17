<script lang="ts">
	let { children, delay = 0, className = '' } = $props();
	let el: HTMLElement | undefined = $state();

	$effect(() => {
		const node = el;
		if (!node) return;
		if (typeof IntersectionObserver === 'undefined') {
			node.classList.add('is-visible');
			return;
		}
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries.some((entry) => entry.isIntersecting)) {
					node.classList.add('is-visible');
					observer.disconnect();
				}
			},
			{ threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
		);
		observer.observe(node);
		return () => observer.disconnect();
	});
</script>

<div bind:this={el} data-reveal class={className} style={`transition-delay:${delay}ms`}>
	{@render children()}
</div>
