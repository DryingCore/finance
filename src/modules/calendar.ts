import inquirer from "inquirer";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay } from "date-fns";

// Função para renderizar o calendário no terminal
export function renderCalendar() {
	const now = new Date();
	const start = startOfMonth(now);
	const end = endOfMonth(now);
	const days = eachDayOfInterval({ start, end });
	const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const monthDays: string[] = [];
	// Renderiza os dias da semana
	monthDays.push(weekDays.join(" "));
	// Renderiza os dias do mês
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
// Função para perguntar ao usuário qual dia ele quer selecionar
export async function selectDay(): Promise<Date> {
	const now = new Date();
	const start = startOfMonth(now);
	const end = endOfMonth(now);

	const days = eachDayOfInterval({ start, end });
	const choices = days.map(day => ({
		name: format(day, "do MMMM yyyy"),
		value: day,
	}));
	const answers = await inquirer.prompt([
		{
			type: "list",
			name: "selectedDay",
			message: "Selecione um dia:",
			choices,
		},
	]);
	return answers.selectedDay;
}
// aD => ask date
export async function aD() {
	renderCalendar();
	const selectedDay = await selectDay();
	console.log(`Você selecionou: ${format(selectedDay, "do MMMM yyyy")}`);
}
