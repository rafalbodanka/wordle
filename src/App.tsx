import {useState, useRef } from "react";
import useLoadSolutions from "./hooks/useLoadSolutions";
import Modal from "./components/Modal";
import Message from "./components/Message";
import InvisibleInput from "./components/InvisibleInput";
import Board from "./components/Board";
import useAnswerCheck from "./hooks/useCheckAnswer";

const App = () => {
  const [isOver, setIsOver] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [modalMessage, setModalMessage] = useState<string>("")
  const [currentRow, setCurrentRow] = useState(0)
  const [rows, setRows] = useState<string[]>([])
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [play, setPlay] = useState<boolean>(false)
  const {solutions, answer, guesses} = useLoadSolutions({play})

  const Input = useRef<HTMLInputElement>(null);

  const handleUserAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (userAnswer.length >= 5) return
    setUserAnswer(event.target.value.toLowerCase());
  };

  const handleAnswerCheck = useAnswerCheck({
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
  });

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter")
    {
      handleAnswerCheck()
    }
    if (event.key === "Backspace") {
      setUserAnswer(userAnswer.slice(0, -1));
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const restartGame = () => {
    setRows([])
    setCurrentRow(0)
    setIsOver(false)
    setUserAnswer('')
    setPlay(prev => !prev)
    closeModal()
    Input.current!.value = ''
  }

  return (
    <div className="bg-[#121212] w-screen h-screen flex justify-center items-center font-Roboto" onClick={() => Input.current?.focus()} onKeyDown={(event) => handleKeyDown(event)}>
      <div className="relative">
        <div className="flex justify-center items-center">
          <Board rows={rows} currentRow={currentRow} userAnswer={userAnswer} answer={answer}/>
          <div>
            <InvisibleInput inputRef={Input} handleUserAnswer={handleUserAnswer}/>
          </div>
        </div>
        {!isModalOpen && isOver &&
          <Message answer={answer} restartGame={restartGame}/>
        }
      </div>
      {isModalOpen &&
        <Modal answer={answer} modalMessage={modalMessage} closeModal={closeModal} restartGame={restartGame}/>
      }
    </div>
  );
}

export default App;
