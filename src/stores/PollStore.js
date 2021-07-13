import { writable } from "svelte/store";

const pollStore = writable([
	{
		id: 1,
		question: "Python or JavaScript?",
		answerA: "Python 🐍",
		answerB: "JavaScript",
		votesA: 7,
		votesB: 7,
	},
	{
		id: 2,
		question: "9 out of 10 dentists recommend 🦷",
		answerA: "Colgate",
		answerB: "Pepsodent",
		votesA: 9,
		votesB: 1,
	},
]);

export default pollStore;
