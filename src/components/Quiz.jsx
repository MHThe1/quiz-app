import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import QuestionTimer from "./QuestionTImer";
import ContentBox from "./ContentBox";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);


    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelecteAnswer = useCallback(function handleSelecteAnswer(selectedAnswer) {
        setUserAnswers((prevAnswers) => {
            return [...prevAnswers, selectedAnswer]
        });
    }, [])

    const handleSkipAnswer = useCallback(() => handleSelecteAnswer(null), [handleSelecteAnswer]);

    if (quizIsComplete) {
        return (
            <ContentBox>
                <div className="text-center text-stone-50 text-3xl">Quiz is complete!</div>
            </ContentBox>
        )
    }


    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <ContentBox>
            <h2 className="mb-3 text-2xl">
                {QUESTIONS[activeQuestionIndex].text}
            </h2>

            <ul id="answers">
                {shuffledAnswers.map(answer => (
                    <li key={answer}>
                        <button className="w-3/4 sm:w-2/3 lg:w-[35rem] xl:w-[35rem] 2xl:w-[35rem] py-2 px-4 my-1 
                                         bg-sky-300 dark:bg-purple-500 text-stone-950 dark:text-stone-50 rounded-md 
                                         hover:bg-sky-400 dark:hover:bg-purple-300 hover:text-purple-900 
                                        hover:scale-110 hover:animate-pulse transition-all"
                            onClick={() => handleSelecteAnswer(answer)}>
                            {answer}
                        </button>
                    </li>
                ))}
            </ul>
            <QuestionTimer
                key={activeQuestionIndex}
                timeout={10000}
                onTimeout={handleSkipAnswer} />
        </ContentBox>

    )
}