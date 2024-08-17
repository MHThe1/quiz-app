import { useRef } from "react";

export default function Answers({ answers, selectedAnswer, answerState, onSelect }) {
    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }

    console.log(answerState)

    return (
        <ul className="flex flex-col items-center w-full px-4">
            {shuffledAnswers.current.map((answer) => {
                let onDemandClasses = 'bg-sky-300 dark:bg-purple-500 hover:bg-sky-400 dark:hover:bg-purple-300 hover:text-purple-900';
                const isSelected = selectedAnswer === answer;

                if (answerState === 'answered' && isSelected) {
                    onDemandClasses = "bg-black text-white animate-flash";
                }

                if ((answerState === 'correctAnswer' || answerState === 'wrongAnswer') && isSelected) {
                    if (answerState === 'correctAnswer') {
                        onDemandClasses = "bg-green-500 scale-125 animate-bounce";
                    } else {
                        onDemandClasses = "bg-red-500 scale-110 animate-spin";
                    }
                }

                return (
                    <li key={answer} className="w-full max-w-lg">
                        <button
                            className={`w-full py-2 px-4 my-1 rounded-md text-stone-950 dark:text-stone-50
                                ${onDemandClasses} hover:scale-110 hover:animate-pulse transition-all`}
                            onClick={() => onSelect(answer)} disabled={answerState !== 'unanswered'}
                            >
                            {answer}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}
