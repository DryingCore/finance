import input from "@inquirer/input";

// dI => define income
export async function dI() {
    console.log("New income!")
	const incomeDate = await input({ message: "Income date:" });
}
