<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from "./shared/Tabs.svelte";
	import CreatePollForm from "./components/CreatePollForm.svelte";
	import PollList from "./components/PollList.svelte";
	import Meta from "svelte-meta";

	let items = ["Current Polls", "Add New Poll"];
	let activeItem = "Current Polls";

	const tabChange = (e) => (activeItem = e.detail);

	let polls = [];

	const handleAdd = (e) => {
		activeItem = "Current Polls";
	};
</script>

<Meta
	title="Poll App"
	description="Create and Vote on Polls"
	image="https://raw.githubusercontent.com/Sagyam/Poll-App/master/public/favicon.png"
	url="https://sagyam-polling-app.netlify.app/"
/>

<Header />

<main>
	<Tabs {activeItem} {items} on:tabChange={tabChange} />
	{#if activeItem === "Current Polls"}
		<PollList />
	{:else if activeItem === "Add New Poll"}
		<CreatePollForm on:add={handleAdd} />
	{/if}
</main>

<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>
