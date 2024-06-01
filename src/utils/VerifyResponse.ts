// logical/verify.js
import { dI } from "../ui/defineIncome.js";
import { ctab } from "../ui/RenderTable.js";

// vS => verify selected
export async function vS(response: string) {
	if (response.toLowerCase() === "show table") {
		console.log("Showing table...");
		ctab();
	}

	if (response.toLowerCase() === "new income") {
		dI();
	}

	if (response.toLowerCase() === "new expense") {
		console.log("creating table...");
	}
}
