import ContentBox from "./ContentBox.jsx";
import QUESTIONS from "../questions.js";

import { useContext } from "react";

import { CategoryContext } from "../contexts/CategoryContext.jsx";

export default function Summary({ userAnswers }) {
    const { selectedCategory } = useContext(CategoryContext);

    let skippedAnswerCount = 0;
    let correctAnswerCount = 0;
    let incorrectAnswerCount = 0;

    QUESTIONS[selectedCategory].map((obj, index) => {
        console.log(obj.answers)
        if (obj.answers[0] === userAnswers[index]) {
            correctAnswerCount += 1;
        } else if (userAnswers[index] === null) {
            skippedAnswerCount += 1;
        } else {
            incorrectAnswerCount += 1;
        }
    })

    return (
        <ContentBox>
            <div className="container text-center dark:text-stone-50 text-stone-950 text-3xl">Quiz Completed!</div>
            <div>
                <div className="flex justify-center items-center font-handjet text-xl my-4">
                    <p className="flex flex-col justify-center items-center border-r border-gray-300 pr-4 flex-1">
                        <span className="text-2xl mb-2">{skippedAnswerCount}</span>
                        <span>skipped</span>
                    </p>
                    <p className="flex flex-col justify-center items-center border-r border-gray-300 pr-4 flex-1">
                        <span className="text-2xl mb-2">{correctAnswerCount}</span>
                        <span>correct</span>
                    </p>
                    <p className="flex flex-col justify-center items-center flex-1">
                        <span className="text-2xl mb-2">{incorrectAnswerCount}</span>
                        <span>incorrect</span>
                    </p>
                </div>

                <ol className="list-inside mt-4 space-y-4">
                    {userAnswers.map((answer, index) => {
                        const isCorrect = QUESTIONS[selectedCategory][index].answers[0] === answer;
                        const isSkipped = answer === null;

                        return (
                        <li key={index} className="bg-sky-400 dark:bg-purple-600 p-4 rounded-lg shadow-md">
                            <div className="flex justify-center mb-2">
                                <h3 className="flex items-center justify-center text-xl font-bold bg-sky-200 dark:bg-purple-400 rounded-full size-8">
                                    {index + 1}
                                </h3>
                            </div>
                            
                            <p className="text-lg mb-2">{QUESTIONS[selectedCategory][index].text}</p>
                            <p className={`text-lg rounded-md p-1 ${isSkipped ? 'bg-gray-700 text-white' : isCorrect ? 'bg-green-400' : 'bg-red-500'}`}>
                                {answer ?? 'Skipped'}
                            </p>
                            {!isCorrect && <p className="text-lg mt-2 rounded-md p-1 bg-green-400">
                                Correct answer: {QUESTIONS[selectedCategory][index].answers[0]}
                            </p>}
                        </li>
                    )})}
                </ol>



            </div>
        </ContentBox>
    );
}
