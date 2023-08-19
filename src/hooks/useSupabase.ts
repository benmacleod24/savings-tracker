import { Database } from "@/supabase";
import { createClient } from "@supabase/supabase-js";

export const useSupabase = () =>
	createClient<Database>(
		process.env.NEXT_PUBLIC_SUPABASE_URL as string,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
	);
