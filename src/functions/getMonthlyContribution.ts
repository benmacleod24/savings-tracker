export const getMonthlyContribution = (
	totalGoal: number,
	monthsForGoal: number
) => {
	return Math.ceil(totalGoal / monthsForGoal);
};
