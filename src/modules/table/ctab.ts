// table/tab.js
import Table from "cli-table";

// ctab => create table
export function ctab() {
	const table = new Table({
		head: ["Date", "Balance", "Category", "Value", "Type"],
		colWidths: [20, 20, 20, 20, 20],
	});

	// table is an Array, so you can `push`, `unshift`, `splice` and friends
	table.push(["15/06/2007", "R$ 600"], ["18/02/2008", "R$ 5900"]);
	console.log(table.toString());
}
