const checkValidGuesses = (answear:string, guess: string, letter: string) => {
	let count = 0;
	for (let i = 0; i < Math.min(answear.length, guess.length); i++) {
		if (guess[i] === answear[i] && answear[i] === letter) {
			count++;
		}
	}
	return count;
}

const checkPainting = (rows: string[], answer: string, row: number, col: number) => {
	const letter = rows[row][col]
	if (rows[row] && answer[col] === letter){
		return 'bg-green-600';
	} 
	const occurrences = answer.split('').reduce((count, char) => {
		if (char === letter) {
			return count + 1;
		}
		return count;
	}, 0);
	const guesses = checkValidGuesses(answer, rows[row], "d")
	const checkLimit = () => {
		const currentOrd = rows[row].split('').slice(0, col).reduce((count, char) => {
			if (char === letter) {
				return count + 1;
			}
			return count;
		}, 0);
		if (currentOrd < occurrences && guesses < occurrences && answer.includes(letter)) return 'bg-gray-600'
		return ''
	}
	return checkLimit();
}

export default checkPainting