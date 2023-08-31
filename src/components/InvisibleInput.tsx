type InvisibleInputProps = {
	handleUserAnswer: React.ChangeEventHandler<HTMLInputElement>
	inputRef: React.RefObject<HTMLInputElement>;
}

const InvisibleInput = ({ handleUserAnswer, inputRef }: InvisibleInputProps) => {
	return (
		<input ref={inputRef} type="text" className="w-0" 
		autoFocus
		maxLength={5}
		onChange={handleUserAnswer}
		></input>
	)
}

export default InvisibleInput