import { shuffle, upperFirst } from "es-toolkit";

/**
 *
 * @param options Additional options
 * @param options.mangleBias How often should words be mangled.
 * @param words Array of words.
 * @returns Shuffled + mangled  text.
 */
export const shuffleText = (
	{ mangleBias = 0.5 }: { mangleBias?: number },
	...words: string[]
): string =>
	shuffle(
		shuffle(words)
			.reduce(
				(text, word) =>
					`${text} ${
						Math.random() <= mangleBias
							? word.toLocaleLowerCase()
							: shuffle(word.split("")).join("")
					}`,
			)
			.split("\n")
			.map(upperFirst),
	).join("\n");

/**
 *
 * @param text String to shuffle and mangle.
 * @returns Mangled + shuffled text.
 */
export const shuffled = (text: TemplateStringsArray): string =>
	shuffleText({}, ...text[0].split(" "));
