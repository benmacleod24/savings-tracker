"use client";

import { useGoals } from "@/hooks/useGoals";
import { Flex, ScrollArea } from "@radix-ui/themes";
import React, { useState, useEffect } from "react";
import GoalCard from "./GoalCard";

interface GoalsContainerProps {}

/**
 * @description Container for goals
 * @return {React.FC<GoalsContainer>}
 */
const GoalsContainer: React.FC<GoalsContainerProps> = (props) => {
	const goals = useGoals();

	return (
		<Flex className="flex-col">
			<ScrollArea className="max-h-[75vh]">
				<Flex className="gap-3 flex-col">
					{goals && goals && goals.map((g) => <GoalCard goal={g} key={g.id} />)}
				</Flex>
			</ScrollArea>
		</Flex>
	);
};

export default GoalsContainer;
