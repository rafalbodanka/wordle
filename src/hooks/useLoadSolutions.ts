import { useEffect, useState } from "react";
import validSolutions from "../data/valid_solutions.json"
import validGuesses from "../data/valid_guesses.json"

type useLoadSolutionsProps = {
    play: boolean;
}

const useLoadSolutions = ({ play }: useLoadSolutionsProps) => {
	const [answer, setAnswer] = useState<string>("");
	const [solutions, setSolutions] = useState<string[]>([])
	const [guesses, setGuesses] = useState<string[]>([]);

	useEffect(() => {
		const loadSolutions = () => {
			try {
			  const randomId = Math.floor(Math.random() * validSolutions.length);
			  setSolutions(validSolutions);
			  setAnswer(validSolutions[randomId]);
			} catch (error) {
			}
		  };
		loadSolutions();
		setGuesses(validGuesses);
	}, [play]);

	return { solutions, answer, guesses };
}

export default useLoadSolutions;