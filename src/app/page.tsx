import CreateNewGoal from "@/components/CreateNewGoal";
import GoalCard, { USDollar } from "@/components/GoalCard";
import { GOALS } from "@/config";
import { GoalController } from "@/controllers/goal.controller";
import { getTimeDiff } from "@/functions";
import { getTotalContributions } from "@/functions/getTotalContributions";
import { Container, Flex, Heading, ScrollArea, Separator } from "@radix-ui/themes";
import Image from "next/image";

export default async function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-24 bg-zinc-900">
			<Flex className=" flex-col gap-3 max-w-md">
				<Flex className="gap-3 flex-col">
					<GoalCard goal={GOALS.GOLF} />
					<GoalCard goal={GOALS.GOLF} />
				</Flex>

				<CreateNewGoal />
			</Flex>
		</main>
	);
}
