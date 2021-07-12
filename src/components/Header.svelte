<script>
	import ForkMe from "./ForkMe.svelte";
</script>

<header>
	<ForkMe />
	<h1>
		<img src="/img/hero.svg" alt="App Logo" />
	</h1>
	<h1>Polling App</h1>
</header>

<style>
	header {
		background: #f7f7f7;
		padding: 20px;
	}
	h1 {
		margin-bottom: 20px;
		text-align: center;
	}
	img {
		max-width: 200px;
	}
</style>
