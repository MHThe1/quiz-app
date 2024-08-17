import QuestionTimer from "./QuestionTImer";
import ContentBox from "./ContentBox";
import Answers from "./Answers";
import { useState, useContext } from "react";
import QUESTIONS from '../questions.js';

import { CategoryContext } from "../contexts/CategoryContext.jsx";

export default function Question({
    index,
    onSelect,
    onTimeout,
    onSkipAll
}) {
    const { selectedCategory } = useContext(CategoryContext);

    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    let timer = 10000;

    if (answer.selectedAnswer) {
        timer = 1000;
    }

    if (answer.isCorrect !== null) {
        timer = 2000;
    }

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[selectedCategory][index].answers[0] === answer
            })

            setTimeout(() => {
                onSelect(answer);

            }, 2000);
        }, 1000);
    }

    function handleSkipAnswer() {
        setAnswer({
            selectedAnswer: null,
            isCorrect: null
        });

        onTimeout();
    }

    function handleSkipAll() {
        onSkipAll();
    }

    let answerState = 'unanswered';

    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correctAnswer' : 'wrongAnswer';
    } else if (answer.selectedAnswer) {
        answerState = 'answered';
    }

    const buttonsDisabled = answer.selectedAnswer !== '';

    return (
        <ContentBox>
            <div className="flex items-center justify-center mb-2 space-x-2">
                <h3 className="flex items-center justify-center text-xl font-bold bg-sky-300 dark:bg-purple-400 rounded-full w-8 h-8">
                    {index + 1}
                </h3>
                <span className="text-xl">of</span>
                <h3 className="flex items-center justify-center text-xl font-bold bg-sky-300 dark:bg-purple-400 rounded-full w-8 h-8">
                    20
                </h3>
            </div>

            <h2 className="mb-3 text-2xl">
                {QUESTIONS[selectedCategory][index].text}
            </h2>

            <Answers
                answers={QUESTIONS[selectedCategory][index].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
            <QuestionTimer
                key={timer}
                timeout={timer}
                onTimeout={answer.selectedAnswer === '' ? onTimeout : null} />

            <div className="flex flex-col mt-4 items-center w-full px-4">
                <button
                    className={`py-2 px-4 m-2 ${buttonsDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-yellow-400 hover:bg-yellow-500'} text-white rounded-md`}
                    onClick={handleSkipAnswer}
                    disabled={buttonsDisabled}
                >
                    Skip Answer
                </button>
                <button
                    className={`py-2 px-4 mb-2 ${buttonsDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-400 hover:bg-red-500'} text-white rounded-md`}
                    onClick={handleSkipAll}
                    disabled={buttonsDisabled}
                >
                    Skip All
                </button>
            </div>
        </ContentBox>
    )
}