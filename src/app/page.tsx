import GoalCard, { USDollar } from "@/components/GoalCard";
import { GOALS } from "@/config";
import { getTimeDiff } from "@/functions";
import { getTotalContributions } from "@/functions/getTotalContributions";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-24">
			<GoalCard goal={GOALS.GOLF} />
			<GoalCard goal={GOALS.MOVE_OUT} />
			<div className="flex w-1/4 justify-between text-slate-300 font-medium">
				<p>Total Contributions:</p>
				<p>{USDollar.format(getTotalContributions())} </p>
			</div>
		</main>
	);
}
