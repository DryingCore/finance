import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay } from "date-fns"; // importing necessary modules

export function renderCalendar() {
	const now = new Date();
	const start = startOfMonth(now);
	const end = endOfMonth(now);
	const days = eachDayOfInterval({ start, end });
	const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const monthDays: string[] = [];
	// Render week days
	monthDays.push(weekDays.join(" "));
	// Render month days
	let currentWeek: string[] = Array(getDay(start)).fill("   ");
	days.forEach(day => {
		currentWeek.push(day.getDate().toString().padStart(2, " ") + " ");
		if (currentWeek.length === 7) {
			monthDays.push(currentWeek.join(" "));
			currentWeek = [];
		}
	});
	if (currentWeek.length > 0) {
		monthDays.push(currentWeek.join(" "));
	}
	console.log(`\n${format(now, "MMMM yyyy")}\n`);
	monthDays.forEach(week => console.log(week));
}
