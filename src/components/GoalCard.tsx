"use client";

import { USDollar } from "@/functions/USDollar";
import { useMonthlyContribution } from "@/hooks/useMonthlyContribution";
import { Database } from "@/supabase";
import { Card, Flex, Text } from "@radix-ui/themes";
import React, { useState, useEffect } from "react";

interface GoalCardProps {
	goal: Database["public"]["Tables"]["savings_goals"]["Row"];
}

/**
 * @description Card for each goal
 * @return {React.FC<GoalCard>}
 */
const GoalCard: React.FC<GoalCardProps> = ({ goal }) => {
	const contribution = useMonthlyContribution(goal);

	return (
		<Card>
			<Text className="text-blue-400 font-semibold" mb="1">
				{goal.title}
			</Text>
			<Flex justify={"between"}>
				<Text className="text-zinc-400">Monthly Contribution:</Text>
				<Text className="text-zinc-200 font-medium">{USDollar.format(contribution)}</Text>
			</Flex>
		</Card>
	);
};

export default GoalCard;
