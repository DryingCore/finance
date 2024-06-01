const inquirer = require("inquirer");
const datePrompt = require("inquirer-datepicker-prompt");

inquirer.registerPrompt("datetime", datePrompt);

async function selectDate() {
	const response = await inquirer.prompt([
		{
			type: "datetime",
			name: "date",
			message: "Please select a date",
			format: ["Y", "-", "m", "-", "d"],
		},
	]);

	console.log("Selected Date:", response.date);
}

selectDate();
