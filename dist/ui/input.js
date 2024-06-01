import { input } from "@inquirer/prompts";
// defDate => define date
export async function defDate() {
    const incomeDate = await input({ message: "Income date:" });
    return incomeDate;
}
