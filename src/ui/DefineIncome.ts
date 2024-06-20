import { defDate } from "../modules/income/defDate.js";
import { defCategory } from "../modules/income/defCategory.js";
import { defBalance } from "../modules/income/defBalance.js";

export async function DefineIncome() {
	const [date, category, balance] = await Promise.all([defDate(), defCategory(), defBalance()]);
	console.log({ date, category, balance });
}
