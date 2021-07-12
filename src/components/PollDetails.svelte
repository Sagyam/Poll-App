<script>
	import Button from "../shared/Button.svelte";
	import { tweened } from "svelte/motion";
	import Card from "../shared/Card.svelte";
	import pollStore from "../stores/PollStore";

	export let poll;

	//reactive values
	$: totalVotes = poll.votesA + poll.votesB;
	$: percentA = Math.floor((100 / totalVotes) * poll.votesA) || 0; //apply 0 if NaN
	$: percentB = Math.floor((100 / totalVotes) * poll.votesB) || 0; //note that 100/0 will  gives NaN intially

	//tweened percentages
	const tweenedA = tweened(0);
	const tweenedB = tweened(0);
	$: tweenedA.set(percentA);
	$: tweenedB.set(percentB);

	const handleVote = (option, id) => {
		pollStore.update((currentPolls) => {
			let pollCopy = [...currentPolls];

			let upvotedPoll = pollCopy.find((poll) => poll.id == id);

			if (option === "a") {
				upvotedPoll.votesA++;
			}
			if (option === "b") {
				upvotedPoll.votesB++;
			}

			return pollCopy;
		});
	};

	const handleDelete = (id) => {
		console.log("deleteed");
		pollStore.update((currentPolls) => {
			return currentPolls.filter((poll) => poll.id != id);
		});
	};
</script>

<Card>
	<div class="poll">
		<h3>{poll.question}</h3>

		<p>Total Votes {totalVotes}</p>

		<div class="answer" on:click={() => handleVote("a", poll.id)}>
			<div class="percent percent-a" style="width: {$tweenedA}%" />
			<span>{poll.answerA} ({poll.votesA})</span>
		</div>

		<div class="answer" on:click={() => handleVote("b", poll.id)}>
			<div class="percent percent-b" style="width: {$tweenedB}%" />
			<span>{poll.answerB} ({poll.votesB})</span>
		</div>

		<div class="delete">
			<Button flat="True" on:click={() => handleDelete(poll.id)}>Delete</Button>
		</div>
	</div>
</Card>

<style>
	h3 {
		margin: 0 auto;
		color: #555;
	}
	p {
		margin-top: 6px;
		font-size: 14px;
		color: #aaa;
		margin-bottom: 30px;
	}
	.answer {
		background: #fafafa;
		cursor: pointer;
		margin: 10px auto;
		position: relative;

		/*Prevent Text Select*/
		user-select: none;
	}
	.answer:hover {
		opacity: 0.6;
	}
	span {
		display: inline-block;
		padding: 10px 20px;
	}
	.percent {
		height: 100%;
		position: absolute;
		box-sizing: border-box;
	}

	.percent-a {
		background: rgba(217, 27, 66, 0.2);
		border-left: 4px solid rgb(217, 27, 66);
	}
	.percent-b {
		background: rgba(69, 196, 150, 0.2);
		border-left: 4px solid rgb(69, 196, 150);
	}
	.delete {
		margin-top: 30px;
		text-align: center;
		user-select: none;
	}
</style>
