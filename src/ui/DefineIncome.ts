import { defDate } from "../modules/income/defDate.js";
import { defCategory } from "../modules/income/defCategory.js";
import { defBalance } from "../modules/income/defBalance.js";

export async function DefineIncome() {
	defDate().then(defCategory).then(defBalance);
}
