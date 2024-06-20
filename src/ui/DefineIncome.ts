import { defDate } from "../modules/income/defDate.js";
import { defCategory } from "../modules/income/defCategory.js";
import { defBalance } from "../modules/income/defBalance.js";

export async function DefineIncome() {
	const date = await defDate();
	const category = await defCategory();
	const balance = await defBalance();
	console.log({ date, category, balance });
}
