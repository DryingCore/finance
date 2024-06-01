// logical/verify.js
import { ctab } from "../table/ctab.js";
// vS => verify selected
export async function vS(response) {
    if (response.toLowerCase() === "show table") {
        console.log("Showing table...");
        ctab();
    }
    if (response.toLowerCase() === "add entry") {
        console.log("add entry...");
    }
    if (response.toLowerCase() === "create table") {
        console.log("creating table...");
    }
}
