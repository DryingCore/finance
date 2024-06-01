// logical/verify.js
import { eD } from "../interface/prompt.js";
import { ctab } from "../table/ctab.js";

// vS => verify selected
export async function vS(response: string) {
	if (response.toLowerCase() === "show table") {
		console.log("Showing table...");
		ctab();
	}

	if (response.toLowerCase() === "add entry") {
		console.log("add entry...");
		eD();
	}

	if (response.toLowerCase() === "create table") {
		console.log("creating table...");
	}
}
