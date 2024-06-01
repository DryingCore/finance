// logical/verify.js
import { dI } from "../interface/defineIncome.js";
import { ctab } from "../table/ctab.js";
// vS => verify selected
export async function vS(response) {
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
