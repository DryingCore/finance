import { defDate } from "./input.js";
import { dIC } from "./checkbox.js";

// dI => define income
export async function dI() {
	console.log("New income!");
	defDate();
	dIC();
}
