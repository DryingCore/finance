import input from "@inquirer/input";
import { dIC } from "./checkbox.js";
// dI => define income
export async function dI() {
    console.log("New income!");
    const incomeDate = await input({ message: "Income date:" });
    dIC();
}
