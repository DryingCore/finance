import { aD } from "../modules/calendar.js";
import { defCategory } from "../modules/income/IncomeCategory.js";

export async function DefineIncome() {
	console.log("New income!");
	defDate().then(defCategory);
}

import { input } from "@inquirer/prompts";
export async function defDate() {
	const incomeDate = await aD();
	return incomeDate;
}
