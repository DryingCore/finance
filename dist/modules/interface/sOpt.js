// interface/sOpt.js
import select from "@inquirer/select";
// sOpt => Select Option
export async function sOpt() {
    const answer = await select({
        message: "Select a option to continue",
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
                name: "Create table",
                value: "Create table",
                description: "Create a new table",
            },
        ],
    });
    return answer;
}
