type ModalProps = {
    answer: string;
    modalMessage: string;
    closeModal: React.MouseEventHandler<HTMLDivElement>;
    restartGame: React.MouseEventHandler<HTMLButtonElement>;
}

const Modal = ({ answer, modalMessage, closeModal, restartGame }: ModalProps) => {

	return (
		<div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 flex justify-center items-center">
			<div className="bg-white p-8 pt-4 text-center font-bold text-md lg:text-lg text-[#121212] rounded-lg modal-enter-active">
				<div className="flex justify-end cursor-pointer" onClick={closeModal}>
					X
				</div>
				<p>
					{modalMessage}
				</p>
				<p>
					Correct answer: <span>{answer.toUpperCase()}</span>
				</p>
					<button className="py-2 px-4 rounded-lg mt-4 text-center bg-purple-800 text-white" onClick={restartGame}>Try again</button>
				</div>
		</div>
	)
}

export default Modal