import { useCallback, useEffect, useState } from "react";
import { useSupabase } from "./useSupabase";
import { Database } from "@/supabase";
import { PostgrestResponse } from "@supabase/supabase-js";

export const useGoals = () => {
	const [data, setData] = useState<
		| {
				amount_to_save: number | null;
				completion_date: string | null;
				created_at: string;
				id: string;
				title: string | null;
		  }[]
		| null
	>([]);
	const supabase = useSupabase();

	const collect = async () => {
		const goals = await supabase.from("savings_goals").select("*");
		if (goals.data) {
			setData(goals.data);
		}
	};

	useEffect(() => {
		collect();
	}, []);

	return data;
};
