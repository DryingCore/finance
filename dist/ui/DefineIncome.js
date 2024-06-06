import { aD } from "../modules/calendar.js";
import { defCategory } from "../modules/income/IncomeCategory.js";
export async function DefineIncome() {
    console.log("New income!");
    defDate().then(defCategory);
}
export async function defDate() {
    const incomeDate = await aD();
    return incomeDate;
}
