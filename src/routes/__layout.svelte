<script>
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<title>Nander</title>
</svelte:head>

<div>
	<Header />
	<slot />
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	:root {
		--primary: #5872fe;
		--bg: #fff;
		--fg: #000;
		--cat-color: #121212;
		@media (prefers-color-scheme: dark) {
			--bg: #131415; // i love this color
			--fg: #fff;
			--cat-color: #fff;
		}
	}

	:global(body, html) {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
		background-color: var(--bg);
		color: var(--fg);
	}
</style>
