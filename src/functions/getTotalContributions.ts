import { GOALS } from "@/config";
import { getMonthlyContribution } from "./getMonthlyContribution";
import { getTimeDiff } from ".";

export const getTotalContributions = () => {
	let now = new Date();
	let test = Object.values(GOALS).reduce((prev, next) => {
		const golfTimeDate = new Date(next.completionDate);
		const monthsForGoal = getTimeDiff(now, golfTimeDate).getMonth();
		let monthlyContri = getMonthlyContribution(next.amount, monthsForGoal);
		return prev + monthlyContri;
	}, 0);

	console.log(test);
	return test;
};
