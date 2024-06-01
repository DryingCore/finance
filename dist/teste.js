// selectDate.mjs
import inquirer from "inquirer";
import datePrompt from "inquirer-date-prompt";
// Register the custom prompt
inquirer.registerPrompt("date", datePrompt);
async function selectDate() {
    const response = await inquirer.prompt([
        {
            type: "date",
            name: "date",
            message: "Please select a date",
            format: { year: "numeric", month: "2-digit", day: "2-digit" },
            clearable: true,
        },
    ]);
    console.log("Selected Date:", response.date);
}
selectDate();
