import { getTimeDiff } from "@/functions";
import { Database } from "@/supabase";
import { useEffect, useState } from "react";

export const useMonthlyContribution = (
	goal: Database["public"]["Tables"]["savings_goals"]["Row"]
) => {
	const [contribution, setContribution] = useState<number>(0.0);
	// Format dates into objects.
	const startDate = new Date(goal.created_at);
	const endDate = new Date(goal.completion_date as string);

	//Get time difference between dates in months.
	const timeDiffInMonths = getTimeDiff(startDate, endDate).getMonth();

	useEffect(() => {
		if (!goal || !goal.amount_to_save) return;
		setContribution(Math.ceil(goal.amount_to_save / timeDiffInMonths));
	}, [goal]);

	return contribution;
};
