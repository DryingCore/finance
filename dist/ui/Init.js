import select from "@inquirer/select";
// Define your custom theme
const customtheme = {
    prefix: "",
    spinner: { interval: 100, frames: ["-", "\\", "|", "/"] },
    style: {
        answer: (text) => `\u001b[32m${text}\u001b[0m`, // Style for the answer
        message: (text) => `\u001b[36m${text}\u001b[0m`, // Style for the message
        error: (text) => `\u001b[31m${text}\u001b[0m`, // Style for error
        help: (text) => `\u001b[33m${text}\u001b[0m`, // Style for help
        highlight: (text) => `\u001b[35m${text}\u001b[0m`, // Style for highlight
    },
    icon: { cursor: "->" },
    helpMode: "never", // Help display mode
};
export async function Init() {
    const answer = await select({
        message: "Please select a option",
        choices: [
            { name: "Show table", value: "Show table", description: "Show a graphical table at terminal." },
            { name: "New Income", value: "New Income", description: "Register a new income." },
            { name: "New Expense", value: "New Expense", description: "Register a new expense." },
            { name: "Create new table", value: "Create new table", description: "Create a new table." },
        ],
        theme: customtheme, // Using the custom theme
    });
    return answer;
}
