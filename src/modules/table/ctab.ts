// table/tab.js
import Table from "cli-table";

// ctab => create table
export function ctab() {
	const table = new Table({
		head: ["Date", "Account Money", "Category", "Value", "Type"],
		colWidths: [20, 20, 20, 20, 20],
	});

	// table is an Array, so you can `push`, `unshift`, `splice` and friends
	table.push(["First value", "Second value"], ["First value", "Second value"]);
	console.log(table.toString());
}
