import { promptCalendar } from "../global/promptCalendar.js";
export async function defDate() {
	const incomeDate = await promptCalendar();
	return incomeDate;
}
