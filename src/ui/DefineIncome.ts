import { defDate } from "../modules/income/DefDate.js";
import { defCategory } from "../modules/income/IncomeCategory.js";
import { defBalance } from "../modules/income/IncomeBalance.js";

export async function DefineIncome() {
	defDate().then(defCategory).then(defBalance);
}
