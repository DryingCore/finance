import { promptCalendar } from "../modules/global/calendar.js";
import { defCategory } from "../modules/income/IncomeCategory.js";
export async function DefineIncome() {
    console.log("New income!");
    defDate().then(defCategory).then(defBalance);
}
export async function defDate() {
    const incomeDate = await promptCalendar();
    return incomeDate;
}
// function to define income
function defBalance() {
    return 0;
}
