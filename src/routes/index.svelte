<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load() {
		return {
			maxage: 3600
		};
	}
</script>

<script>
	import Cat from '$lib/components/Cat.svelte';
	import ProfilePicture from '$lib/owo.webp';

	const res = fetch('https://api.github.com/users/nanderLP').then((res) => res.json());
</script>

<svelte:head>
	<link rel="prefetch" href="https://api.github.com/users/nanderLP" />
</svelte:head>

<main>
	<div>
		<Cat />
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src={ProfilePicture} width="200" height="200" alt="Profile Picture" />
		<div>
			<p>I'm Nander</p>
			<p>I like to code</p>
			<p>I like the color <span>indigo</span></p>
		</div>
	</div>
	<div>
		<a href="https://github.com/nanderLP"><h2 class="gh">My GitHub Profile</h2></a>
		{#await res}
			<p />
			<p />
		{:then data}
			<p>Followers: {data.followers}</p>
			<p>Repositories: {data.public_repos}</p>
		{/await}
	</div>
</main>

<style lang="scss">
	main {
		max-width: 75ch;
		padding-top: 2rem;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		justify-content: center;
		& > div {
			margin: 1rem;
		}
	}

	a {
		color: inherit;
		text-decoration: underline var(--primary) 2px;
	}

	p:empty {
		width: 150px;
		height: 1rem;
		border-radius: 5px;
		background-image: linear-gradient(270deg, #fafafa, #eaeaea, #eaeaea, #fafafa);
		@media (prefers-color-scheme: dark) {
			background-image: linear-gradient(270deg, #111, #333, #333, #111);
		}
		background-size: 400% 100%;
		animation: loading 8s ease-in-out infinite;
		@media (prefers-reduced-motion) {
			animation: none;
		}
	}

	@keyframes loading {
		0% {
			background-position: 200% 0;
		}

		to {
			background-position: -200% 0;
		}
	}

	img {
		border-radius: 50%;
		position: relative;
		border-radius: 50%;
		// invinsible alt
		color: transparent;
		background-color: var(--bg);
	}

	span {
		color: var(--primary);
	}
</style>
