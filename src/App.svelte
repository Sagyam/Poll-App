<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from "./shared/Tabs.svelte";
	import CreatePollForm from "./components/CreatePollForm.svelte";
	import PollList from "./components/PollList.svelte";

	let items = ["Current Polls", "Add New Poll"];
	let activeItem = "Current Polls";

	const tabChange = (e) => (activeItem = e.detail);

	let polls = [];

	const handleAdd = (e) => {
		const poll = e.detail;
		polls = [poll, ...polls];
		activeItem = "Current Polls";
		console.log(polls);
	};

	const handleVote = (e) => {
		const { id, option } = e.detail;
		let pollCopy = [...polls];

		let upvotedPoll = pollCopy.find((poll) => poll.id == id);

		if (option === "a") {
			upvotedPoll.votesA++;
		}
		if (option === "b") {
			upvotedPoll.votesB++;
		}

		polls = pollCopy;
	};
</script>

<Header />

<main>
	<Tabs {activeItem} {items} on:tabChange={tabChange} />
	{#if activeItem === "Current Polls"}
		<PollList on:vote={handleVote} />
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
