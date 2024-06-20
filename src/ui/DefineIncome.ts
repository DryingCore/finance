import { promptCalendar } from "../modules/global/promptCalendar.js";
import { defCategory } from "../modules/income/IncomeCategory.js";
import { defBalance } from "../modules/income/IncomeBalance.js";

export async function DefineIncome() {
	console.log("New income!");
	defDate().then(defCategory).then(defBalance);
}

export async function defDate() {
	const incomeDate = await promptCalendar();
	return incomeDate;
}
