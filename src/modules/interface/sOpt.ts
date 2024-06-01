import select from "@inquirer/select";
import { CustomTheme } from "./customTheme.js";

// Define your custom theme
const customtheme: CustomTheme = {
	prefix: "",
	spinner: {
		interval: 100,
		frames: ["-", "\\", "|", "/"],
	},
	style: {
		answer: (text: string) => `\u001b[32m${text}\u001b[0m`, // Style for the answer
		message: (text: string) => `\u001b[36m${text}\u001b[0m`, // Style for the message
		error: (text: string) => `\u001b[31m${text}\u001b[0m`, // Style for error
		help: (text: string) => `\u001b[33m${text}\u001b[0m`, // Style for help
		highlight: (text: string) => `\u001b[35m${text}\u001b[0m`, // Style for highlight
	},
	icon: {
		cursor: "->",
	},
	helpMode: "never", // Help display mode
};

// sOpt => Select Option
export async function sOpt(): Promise<string> {
	const answer: string = await select({
		message: "Please select a option",
		choices: [
			{
				name: "Show table",
				value: "Show table",
				description: "Render a table in the terminal",
			},
			{
				name: "Add Entry",
				value: "Add Entry",
				description: "Add a new entry to your table",
			},
			{
				name: "New Expense",
				value: "New Expense",
				description: "Register a new expense.",
			},
			{
				name: "Create table",
				value: "Create table",
				description: "Create a new table",
			},
		],
		theme: customtheme, // Using the custom theme
	});
	return answer;
}
