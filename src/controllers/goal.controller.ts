import { Database } from "@/supabase";
import { SupabaseClient, createClient } from "@supabase/supabase-js";

export class GoalController {
	private static readonly TABLE_NAME: string = "savings_goals";
	private static db = createClient<Database>(
		process.env.NEXT_PUBLIC_SUPABASE_URL as string,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
	);

	public static getGoals = async () => {
		return await this.db.from("savings_goals").select("*", {
			count: "exact",
		});
	};
}
