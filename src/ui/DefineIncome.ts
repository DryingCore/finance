import { prompts } from "prompts";
import { aD } from "../modules/global/calendar.js";
import { defCategory } from "../modules/income/IncomeCategory.js";

export async function DefineIncome() {
	console.log("New income!");
	defDate().then(defCategory).then(defBalance);
}

export async function defDate() {
	const incomeDate = await aD();
	return incomeDate;
}