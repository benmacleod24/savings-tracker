import { GOALS } from "@/config";
import { getTimeDiff } from "@/functions";
import { getMonthlyContribution } from "@/functions/getMonthlyContribution";
import React, { useState, useEffect } from "react";

export let USDollar = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});

interface GoalCardProps {
	goal: typeof GOALS.GOLF;
}

/**
 * @description Card for each goal
 * @return {React.FC<GoalCard>}
 */
const GoalCard: React.FC<GoalCardProps> = ({ goal }) => {
	const now = new Date();
	const golfTimeDate = new Date(goal.completionDate);
	const monthsForGoal = getTimeDiff(now, golfTimeDate).getMonth();
	const monthlyContribution = getMonthlyContribution(
		goal.amount,
		monthsForGoal
	);
	return (
		<div className=" bg-zinc-800 m-2 p-3 rounded-md w-1/4">
			<p className="font-medium text-green-500">{goal.title}</p>
			<div className="flex justify-between mt-1">
				<p>Monthly Contribution</p>
				<p>{USDollar.format(monthlyContribution)}</p>
			</div>
		</div>
	);
};

export default GoalCard;
