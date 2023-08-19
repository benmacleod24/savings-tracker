import { GOALS } from "@/config";
import { getTimeDiff } from "@/functions";
import { getMonthlyContribution } from "@/functions/getMonthlyContribution";
import { Database } from "@/supabase";
import { Card, Flex, Text } from "@radix-ui/themes";
import React, { useState, useEffect } from "react";

export let USDollar = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});

interface GoalCardProps {
	goal: Database["public"]["Tables"]["savings_goals"]["Row"];
}

/**
 * @description Card for each goal
 * @return {React.FC<GoalCard>}
 */
const GoalCard: React.FC<GoalCardProps> = ({ goal }) => {
	const startDate = new Date(goal.created_at);
	const endDate = new Date(goal.completion_date as string);
	const timeDiff = getTimeDiff(startDate, endDate).getMonth();
	const monthlyContribution = getMonthlyContribution(goal.amount_to_save as number, timeDiff);

	return (
		<Card>
			<Text className="text-blue-400 font-semibold" mb="1">
				{goal.title}
			</Text>
			<Flex justify={"between"}>
				<Text className="text-zinc-400">Monthly Contribution:</Text>
				<Text className="text-zinc-200 font-medium">
					{USDollar.format(monthlyContribution)}
				</Text>
			</Flex>
		</Card>
	);
};

export default GoalCard;
