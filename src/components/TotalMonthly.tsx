import { Card, Flex, Text } from "@radix-ui/themes";
import React, { useState, useEffect } from "react";
import { USDollar } from "./GoalCard";
import { getTotalContributions } from "@/functions/getTotalContributions";
import { MONTHLY_INCOME } from "@/config";

interface TotalMonthlyProps {}

/**
 * @description Total Monthly component.
 * @return {React.FC<TotalMonthly>}
 */
const TotalMonthly: React.FC<TotalMonthlyProps> = async (props) => {
	const totalContributions = await getTotalContributions();
	const percentOfIncome = (totalContributions / MONTHLY_INCOME) * 100;
	const leftAfterContributions = MONTHLY_INCOME - totalContributions;
	return (
		<Card>
			<Flex className="flex-col" gap="0">
				<Flex justify={"between"}>
					<Text className="font-semibold text-blue-400">Total Contributions</Text>
					<Text>{USDollar.format(totalContributions)}</Text>
				</Flex>
				<Flex justify={"between"}>
					<Text className="font-semibold text-blue-400">Percent of Income</Text>
					<Text>{percentOfIncome.toFixed(0)}%</Text>
				</Flex>
				<Flex justify={"between"}>
					<Text className="font-semibold text-blue-400">Income After Contributions</Text>
					<Text>{USDollar.format(leftAfterContributions)}</Text>
				</Flex>
			</Flex>
		</Card>
	);
};

export default TotalMonthly;
