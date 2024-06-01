import { checkbox } from "@inquirer/prompts";

// dIC => define income category
export async function dIC() {
	const category = await checkbox({
		message: "What's the income category?",
		choices: [
			{ name: "Payday", value: "Payday" },
			{ name: "Offshore", value: "a" },
		],
	});
}
