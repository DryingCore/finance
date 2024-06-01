// table/tab.js
import Table from "cli-table";
// ctab => create table
export function ctab() {
    const table = new Table({
        chars: {
            top: "═",
            "top-mid": "╤",
            "top-left": "╔",
            "top-right": "╗",
            bottom: "═",
            "bottom-mid": "╧",
            "bottom-left": "╚",
            "bottom-right": "╝",
            left: "║",
            "left-mid": "╟",
            mid: "─",
            "mid-mid": "┼",
            right: "║",
            "right-mid": "╢",
            middle: "│",
        },
        head: ["Date", "Balance", "Category", "Value", "Type"],
        colWidths: [20, 20, 20, 20, 20],
    });
    // table is an Array, so you can `push`, `unshift`, `splice` and friends
    table.push(["15/06/2007", "R$ 600", "Bills", "-2.50", "Expense"], ["15/06/2007", "R$ 600", "Bills", "-2.50", "Expense"]);
    console.log(table.toString());
}
