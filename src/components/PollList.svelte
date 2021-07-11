<script>
	import pollStore from "../stores/PollStore";
	import PollDetails from "./PollDetails.svelte";
</script>

<div class="poll-list">
	{#each $pollStore as poll (poll.id)}
		<div>
			<!-- forward to parent -->
			<PollDetails {poll} />
		</div>
	{/each}
</div>

<style>
	.poll-list {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
	}
</style>
