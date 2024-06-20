import inquirer from "inquirer";
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns"; // importing necessary modules
export async function selectDay() {
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
            message: "Select a day:",
            choices,
        },
    ]);
    return answers.selectedDay;
}
