import checkPainting from "../helpers/checkPainting";

type BoardProps = {
	rows: string[];
	currentRow: number;
	userAnswer: string;
	answer: string
}

const Board = ({ rows, currentRow, userAnswer, answer }: BoardProps) => {
	return (
		<div className="grid grid-flow-row gap-4">
		{Array.from({length: 6}).map((_, rowIndex) => (
			<div className="grid grid-flow-col gap-4" key={rowIndex}>
				{Array.from({length: 5}).map((_, colIndex) => (
					<div className={`w-8 h-8 xxs:w-12 xxs:h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 relative bg-[#121212] border-[2px] lg:border-[4px] border-[#AAAAAA] rounded-lg uppercase text-white flex justify-center items-center text-[16px] xxs:text-[20px] sm:text-[24px] md:text-[36px] lg:text-[48px] font-bold
					${rows[rowIndex] && checkPainting(rows, answer, rowIndex, colIndex)}
					${rowIndex === currentRow && 'border-[#DDDDDD] shadow-md shadow-[#555555]'}
					transition-all duration-200 ease-in-out
					`}
					key={colIndex}>
						{rows[rowIndex] ?
							<span className={`cursor-default`}>{rows[rowIndex][colIndex]}</span>
							:
							currentRow === rowIndex && <span className="cursor-default">{userAnswer[colIndex]}</span>
						}
					</div>
				))}
			</div>
			)
		)}
	</div>
	)
}

export default Board