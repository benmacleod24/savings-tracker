import { GOALS } from "@/config";
import { getTimeDiff } from "@/functions";
import { getMonthlyContribution } from "@/functions/getMonthlyContribution";
import { Card } from "@radix-ui/themes";
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
	const monthlyContribution = getMonthlyContribution(goal.amount, monthsForGoal);
	return <Card>{monthlyContribution}</Card>;
};

export default GoalCard;
