import prompts from "prompts";

export async function defBalance() {
	const userBalance = await prompts({
		type: "text",
		name: "balance",
		message: "What's the income value? R$",
	});
	return `R$ ${userBalance.balance}`;
}
