type MessageProps = {
    answer: string;
    restartGame: React.MouseEventHandler<HTMLButtonElement>
}

const Message = ({ answer, restartGame }: MessageProps) => {

	return (
		<div className="absolute top-100 left-0 right-0 transition enter-bottom">
			<p className=" text-white text-md sm:text-lg md:text-xl lg:text-2xl mt-8 font-bold flex justify-center">
				Correct answer:&nbsp;<span>{answer.toUpperCase()}</span>
			</p>
			<div className="flex justify-center mt-4">
			<button className="py-2 px-4 text-sm sm:text-md lg:text-lg rounded-lg mt-4 text-center bg-purple-800 text-white font-bold animate-pulse" onClick={restartGame}>Try again</button>
			</div>
		</div>
	)
}

export default Message