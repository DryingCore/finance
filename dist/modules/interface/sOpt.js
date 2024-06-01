import select from "@inquirer/select";
// Define your custom theme
const customtheme = {
    prefix: "",
    spinner: {
        interval: 100,
        frames: ["-", "\\", "|", "/"],
    },
    style: {
        answer: (text) => `\u001b[32m${text}\u001b[0m`,
        message: (text) => `\u001b[36m${text}\u001b[0m`,
        error: (text) => `\u001b[31m${text}\u001b[0m`,
        help: (text) => `\u001b[33m${text}\u001b[0m`,
        highlight: (text) => `\u001b[35m${text}\u001b[0m`, // Style for highlight
    },
    icon: {
        cursor: "->",
    },
    helpMode: "never", // Help display mode
};
// sOpt => Select Option
export async function sOpt() {
    const answer = await select({
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
                name: "Create table",
                value: "Create table",
                description: "Create a new table",
            },
        ],
        theme: customtheme, // Using the custom theme
    });
    return answer;
}
