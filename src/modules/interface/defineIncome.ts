import { dIC } from "./checkbox.js";
import { defDate } from "./input.js";

// dI => define income
export async function dI() {
	console.log("New income!");
	defDate();
	dIC();
}