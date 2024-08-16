import { useState } from "react";
import QUESTIONS from "../questions";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    function handleSelecteAnswer(selectedAnswer) {
        setUserAnswers((prevAnswers) => {
            return [...prevAnswers, selectedAnswer]
        })
    }

    return (
        <div id="quiz" className="px-10 text-center">
            <div id="questions">
                <h2 className="w-5/6 sm:w-3/4 lg:w-[45rem] xl:w-[50rem] 2xl:w-[50rem] bg-sky-200 dark:bg-slate-700
                 text-stone-950 dark:text-stone-50 font-quicksand font-bold p-4 m-2 mx-auto rounded-lg">
                    {QUESTIONS[activeQuestionIndex].text}
                </h2>

                <ul id="answers">
                    {QUESTIONS[activeQuestionIndex].answers.map(answer => (
                        <li key={answer}>
                            <button className="w-3/4 sm:w-2/3 lg:w-[35rem] xl:w-[35rem] 2xl:w-[35rem] bg-sky-300 dark:bg-slate-600 text-stone-950 dark:text-stone-50 
                                            py-2 px-4 my-1 rounded-md hover:bg-sky-400 dark:hover:bg-slate-500 transition-all"
                                onClick={() => handleSelecteAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}