type InvisibleInputProps = {
	handleUserAnswer: React.ChangeEventHandler<HTMLInputElement>
	inputRef: React.RefObject<HTMLInputElement>;
}

const InvisibleInput = ({ handleUserAnswer, inputRef }: InvisibleInputProps) => {

	// Allow only a-zA-Z characters, backspace and enter
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const keyCode = e.keyCode
		if (keyCode === 8 || keyCode === 13) {
			return;
		}
		if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 122)) {
			e.preventDefault();
		}
	}
	return (
		<input ref={inputRef} type="text" className="w-0" 
		autoFocus
		maxLength={5}
		onChange={handleUserAnswer}
		onKeyDown={handleKeyDown}
		></input>
	)
}

export default InvisibleInput