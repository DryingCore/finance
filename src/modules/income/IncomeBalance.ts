import prompts from "prompts";

// function to define income
export async function defBalance() {
	const userBalance = await prompts({
		type: "text",
		name: "balance",
		message: "What's the income value?",
	});

	return userBalance;
}
