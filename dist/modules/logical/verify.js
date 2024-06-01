// logical/verify.js
import { eD } from "../interface/prompt.js";
import { ctab } from "../table/ctab.js";
// vS => verify selected
export async function vS(response) {
    if (response.toLowerCase() === "show table") {
        console.log("Showing table...");
        ctab();
    }
    if (response.toLowerCase() === "new income") {
        eD();
    }
    if (response.toLowerCase() === "new expense") {
        console.log("creating table...");
    }
}
