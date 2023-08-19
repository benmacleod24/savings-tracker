import CreateNewGoal from "@/components/CreateNewGoal";
import GoalCard, { USDollar } from "@/components/GoalCard";
import TotalMonthly from "@/components/TotalMonthly";
import { GOALS } from "@/config";
import { GoalController } from "@/controllers/goal.controller";
import { getTimeDiff } from "@/functions";
import { getTotalContributions } from "@/functions/getTotalContributions";
import { useSupabase } from "@/hooks/useSupabase";
import { Container, Flex, Grid, Heading, ScrollArea, Text } from "@radix-ui/themes";
import Image from "next/image";

export default async function Home() {
	const supabase = useSupabase();
	const goals = await supabase.from("savings_goals").select("", { count: "exact" });

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
				<Flex className="flex-col">
					<ScrollArea className="max-h-[75vh]">
						<Flex className="gap-3 flex-col">
							{goals.data && goals.data.map((g) => <GoalCard goal={g} />)}
						</Flex>
					</ScrollArea>
				</Flex>
			</Grid>
		</main>
	);
}
