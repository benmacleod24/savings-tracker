"use client";

import React, { useState, useEffect, useCallback } from "react";
import { createClient } from "@supabase/supabase-js";
import { Button, Callout, Card, Flex, Heading, TextField } from "@radix-ui/themes";
import { useSupabase } from "@/hooks/useSupabase";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface CreateNewGoalProps {}

/**
 * @description Create new goal component.
 * @return {React.FC<CreateNewGoal>}
 */
const CreateNewGoal: React.FC<CreateNewGoalProps> = (props) => {
	const supabase = useSupabase();
	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState("");
	const [date, setDate] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const clearMessage = (duration?: number) =>
		setTimeout(() => setErrorMessage(""), duration ? duration * 1000 : 5000);

	const onSubmit = async () => {
		setLoading(true);
		if (!title || !amount || !date) {
			setLoading(false);
			setErrorMessage("Missing goal properties please try again.");
			clearMessage();
			return;
		}

		// Check if amount is valid.
		if (isNaN(Number(amount))) {
			setLoading(false);
			setErrorMessage("Invalid amount to save for.");
			clearMessage();
			return;
		}

		// Check if date is valid.
		if (isNaN(new Date(date).getTime())) {
			setLoading(false);
			setErrorMessage("Invalid date, please try again.");
			clearMessage();
			return;
		}

		// Verify date is in future not in past.
		if (new Date(date).getTime() < new Date().getTime()) {
			setLoading(false);
			setErrorMessage("Can't save in the past.");
			clearMessage();
			return;
		}

		// Insert data to supabase.
		const { data, error, status } = await supabase.from("savings_goals").insert({
			amount_to_save: Number(amount),
			completion_date: new Date(date).toISOString(),
			title: title,
		});

		// Display error.
		if (error) {
			setLoading(false);
			setErrorMessage(error.message);
			return;
		}

		setLoading(false);
	};

	return (
		<Card>
			<Flex className="p-2 flex-col">
				<Heading size="4" className="mb-2 font-semibold" mb={"2"}>
					Create Goal
				</Heading>
				<Flex className="rounded-md text-white flex-col gap-3">
					<div className="flex justify-between gap-3">
						<TextField.Root className="w-full">
							<TextField.Input
								placeholder="Title"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</TextField.Root>
						<TextField.Root className="w-full">
							<TextField.Input
								placeholder="Amount to Save"
								value={amount}
								onChange={(e) => setAmount(e.target.value)}
							/>
						</TextField.Root>
					</div>
					<TextField.Root className="w-full">
						<TextField.Input
							placeholder="Completion Date (MM/DD/YYYY)"
							value={date}
							onChange={(e) => setDate(e.target.value)}
						/>
					</TextField.Root>
					<Button onClick={onSubmit} className="shadow-md">
						Submit Goal
					</Button>
					{errorMessage && (
						<Callout.Root color="red" role="alert">
							<Callout.Icon>
								<ExclamationTriangleIcon />
							</Callout.Icon>
							<Callout.Text>{errorMessage}</Callout.Text>
						</Callout.Root>
					)}
				</Flex>
			</Flex>
		</Card>
	);
};

export default CreateNewGoal;
