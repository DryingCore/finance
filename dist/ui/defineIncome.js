import { dIC } from "./checkbox.js";
// dI => define income
export async function dI() {
    console.log("New income!");
    defDate().then(dIC);
}
import { input } from "@inquirer/prompts";
// defDate => define date
export async function defDate() {
    const incomeDate = await input({ message: "Income date:" });
    return incomeDate;
}
