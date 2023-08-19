import CreateNewGoal from "@/components/CreateNewGoal";
import GoalCard from "@/components/GoalCard";
import GoalsContainer from "@/components/Goals";
import TotalMonthly from "@/components/TotalMonthly";
import { useGoals } from "@/hooks/useGoals";
import { useSupabase } from "@/hooks/useSupabase";
import { Flex, Grid, Heading, ScrollArea } from "@radix-ui/themes";
import React, { useCallback, useEffect, useState } from "react";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-24 bg-zinc-900">
			<Grid className="max-w-3xl w-full" columns={"2"} mb="2">
				<Heading size="4" className="mb-2 font-semibold">
					Overview
				</Heading>
				<Heading size="4" className="mb-2 font-semibold" ml="2">
					My Goals
				</Heading>
			</Grid>
			<Grid className=" flex-col gap-3 max-w-3xl" columns={"2"}>
				<Flex className="flex-col gap-3">
					<TotalMonthly />
					<CreateNewGoal />
				</Flex>
				<GoalsContainer />
			</Grid>
		</main>
	);
}
