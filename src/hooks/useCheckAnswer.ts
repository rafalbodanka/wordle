type userAnswerCheckProps = {
	answer: string,
	userAnswer: string,
	isOver: boolean,
	guesses: string[],
	solutions: string[],
	rows: string[],
	currentRow: number,
	setIsOver: React.Dispatch<React.SetStateAction<boolean>>;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setModalMessage: React.Dispatch<React.SetStateAction<string>>;
	setCurrentRow: React.Dispatch<React.SetStateAction<number>>;
	setUserAnswer: React.Dispatch<React.SetStateAction<string>>;
	Input: React.RefObject<HTMLInputElement>;
	setRows: React.Dispatch<React.SetStateAction<string[]>>;
}

const useAnswerCheck = ({
	answer,
	userAnswer,
	isOver,
	guesses,
	solutions,
	rows,
	currentRow,
	setIsOver,
	setIsModalOpen,
	setModalMessage,
	setCurrentRow,
	setUserAnswer,
	Input,
	setRows,
}: userAnswerCheckProps) => {
	const checkAnswer = () => {
		if (userAnswer.length < 5) return
		if (isOver) return
		if (!guesses.includes(userAnswer) && !solutions.includes(userAnswer)) return
		if (rows.includes(userAnswer)) return
		if (answer === userAnswer) {
			Input.current?.blur()
			setIsOver(true)
			setIsModalOpen(true)
			setModalMessage("YOU WON!")
		} else {
			if (currentRow >= 5) {
				Input.current?.blur()
				setIsOver(true)
				setIsModalOpen(true)
				setModalMessage("YOU LOST!")
			}
			setCurrentRow(current => current += 1)
			setUserAnswer('')
			Input.current!.value = ''
		}
		setRows(curRows => [...curRows, userAnswer]);
	}
	return checkAnswer
}

export default useAnswerCheck