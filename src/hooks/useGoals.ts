import { useState } from "react";
import { useSupabase } from "./useSupabase";

export const useGoals = () => {
	const [data, setData] = useState(null);
	const supabase = useSupabase();
	return;
};
