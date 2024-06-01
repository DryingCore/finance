// Defina a interface para o tema personalizado
export interface CustomTheme {
	prefix: string;
	spinner: {
		interval: number;
		frames: string[];
	};
	style: {
		answer: (text: string) => string;
		message: (text: string) => string;
		error: (text: string) => string;
		help: (text: string) => string;
		highlight: (text: string) => string;
	};
	icon: {
		cursor: string;
	};
	helpMode: "always" | "never" | "auto";
}
