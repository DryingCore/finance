import { defCategory } from "../modules/income/IncomeCategory.js";

/**
 * This function is responsible for defining a new income.
 * It prompts the user for the income date and then calls the defCategory function.
 *
 * @return {Promise<void>} This function doesn't return anything.
 */
export async function DefineIncome() {
	// Log a message to indicate that a new income is being defined
	console.log("New income!");

	// Call the defDate function and wait for its promise to resolve
	// The defDate function prompts the user for the income date and returns a promise that resolves to the user's input
	defDate().then(defCategory);
	// Once the promise is resolved, the defCategory function is called with the resolved value
	// The defCategory function is responsible for defining the income category based on the user's input
}

import { input } from "@inquirer/prompts";
/**
 * This function is used to define the date of an income.
 * It prompts the user for the date using the @inquirer/prompts package.
 * The user is asked to input the date in the format "mm/dd/yyyy".
 * The function returns a promise that resolves to the user's input.
 *
 * @return {Promise<string>} A promise that resolves to the user's input date.
 */
export async function defDate() {
	// Prompt the user for the income date
	const incomeDate = await input({ message: "Income date:" });

	// Return the user's input date
	return incomeDate;
}
