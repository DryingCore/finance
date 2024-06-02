import { defCategory } from "../modules/income/IncomeCategory.js";

// dI => define income
export async function DefineIncome() {
	console.log("New income!");
	defDate().then(defCategory);
}

import { input } from "@inquirer/prompts";
export async function defDate() {
	const incomeDate = await input({ message: "Income date:" });
	return incomeDate;
}
