import { useEffect, useState } from "react";

type useLoadSolutionsProps = {
    play: boolean;
}

const useLoadSolutions = ({ play }: useLoadSolutionsProps) => {
	const [answer, setAnswer] = useState<string>("");
	const [solutions, setSolutions] = useState<string[]>([])
	const [guesses, setGuesses] = useState<string[]>([]);

	useEffect(() => {
		const loadSolutions = async () => {
			try {
				const response = await fetch('./valid_solutions.csv');
				const data = await response.text();
				const wordsArray = data.split('\r\n');
				const filteredWords = wordsArray.filter(word => word.trim() !== '');
				const randomId = Math.floor(Math.random() * filteredWords.length);
				setSolutions(filteredWords);
				setAnswer(filteredWords[randomId]);
			} catch (error) {
			}
		};

		const loadGuesses = async () => {
			try {
				const response = await fetch('./valid_guesses.csv');
				const data = await response.text();
				const wordsArray = data.split('\r\n');
				const filteredWords = wordsArray.filter(word => word.trim() !== '');
				setGuesses(filteredWords);
			} catch (error) {
			}
		};
		loadSolutions();
		loadGuesses();
	}, [play]);

	return { solutions, answer, guesses };
}

export default useLoadSolutions;