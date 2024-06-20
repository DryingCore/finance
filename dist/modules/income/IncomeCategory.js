import { checkbox } from "@inquirer/prompts";
// dIC => define income category
export async function defCategory() {
    const category = await checkbox({
        message: "What's the income category?",
        choices: [
            { name: "Payment", value: "Payment" },
            { name: "Freelance", value: "Freelance" },
            { name: "Occasional income", value: "Occasional income" },
        ],
    });
}
