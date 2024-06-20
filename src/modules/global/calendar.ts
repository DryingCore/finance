// Necessary imports
import { renderCalendar } from "./calendar/renderCalendar.js";
import { selectDay } from "./calendar/selectDay.js";
import { format } from "date-fns"; // importing necessary modules

export async function promptCalendar() {
	renderCalendar();
	const selectedDay = await selectDay();
	console.log(`You have selected: ${format(selectedDay, "do MMMM yyyy")}`);
}
