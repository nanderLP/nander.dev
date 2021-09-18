<script lang="ts">
	import GithubIcon from './Icons/GithubIcon.svelte';
	import HomeIcon from './Icons/HomeIcon.svelte';
	import InfoIcon from './Icons/InfoIcon.svelte';
	import MailIcon from './Icons/MailIcon.svelte';
</script>

<nav>
	<a href="/" title="home" aria-label="home"><HomeIcon /></a>
	<a href="https://github.com/nanderLP" title="github" aria-label="github"><GithubIcon /></a>
	<a href="mailto:nander@nander.dev" title="mail" aria-label="mail"><MailIcon /></a>
	<a href="/credits" title="credits" aria-label="credits"><InfoIcon /></a>
</nav>

<style lang="scss">
	nav {
		display: flex;
		padding: 1rem;
	}

	a {
		padding: 1rem;
	}
</style>
