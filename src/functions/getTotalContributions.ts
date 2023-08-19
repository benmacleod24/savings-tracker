import { GOALS } from "@/config";
import { getMonthlyContribution } from "./getMonthlyContribution";
import { getTimeDiff } from ".";
import { useSupabase } from "@/hooks/useSupabase";

export const getTotalContributions = async () => {
	const supabase = useSupabase();
	const goals = await supabase.from("savings_goals").select();
	if (!goals.data) return 0;

	const totalMonthlySavings = goals.data.reduce((prev, next) => {
		const startDate = new Date(next.created_at);
		const endDate = new Date(next.completion_date as string);
		const timeDiff = getTimeDiff(startDate, endDate).getMonth();
		const monthlyContribution = getMonthlyContribution(next.amount_to_save as number, timeDiff);

		prev = prev + monthlyContribution;
		return prev;
	}, 0);

	return totalMonthlySavings;
};
