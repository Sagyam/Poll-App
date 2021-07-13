import { writable } from "svelte/store";

const pollStore = writable([
	{
		id: 1,
		question: "A sample poll question?",
		answerA: "Option A",
		answerB: "Option B",
		votesA: 9,
		votesB: 15,
	},
	{
		id: 2,
		question: "A sample poll question?",
		answerA: "Option A",
		answerB: "Option B",
		votesA: 9,
		votesB: 15,
	},
]);

export default pollStore;
