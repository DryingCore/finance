// logical/verify.js
import { DefineIncome } from "../ui/DefineIncome.js";
import { RenderTable } from "../ui/RenderTable.js";
// vS => verify selected
export async function VerifyResponse(response) {
    if (response.toLowerCase() === "show table") {
        console.log("Showing table...");
        RenderTable();
    }
    if (response.toLowerCase() === "new income") {
        DefineIncome();
    }
    if (response.toLowerCase() === "new expense") {
        console.log("creating table...");
    }
}
