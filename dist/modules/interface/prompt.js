import input from "@inquirer/input";
// dI => define income
export async function dI() {
    const date = await input({ message: 'Income date:' });
}
