import QuestionTimer from "./QuestionTimer.jsx";
import ContentBox from "./ContentBox.jsx";
import Answers from "./Answers.jsx";
import { useState, useContext } from "react";
import QUESTIONS from '../questions.js';

import { CategoryContext } from "../contexts/CategoryContext.jsx";

import correctAudio from "../assets/soundeffects/correctAudio.wav";
import incorrectAudio from "../assets/soundeffects/incorrectAudio.wav";

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

    const correctAudioSe = new Audio(correctAudio);
    const incorrectAudioSe = new Audio(incorrectAudio);

    let timer = 10000;

    if (answer.selectedAnswer) {
        timer = 1000;
    }

    if (answer.isCorrect !== null) {
        timer = 2000;
    }

    function handleSelectAnswer(selectedAnswer) {
        setAnswer((prevAnswer) => {
            const isCorrect = QUESTIONS[selectedCategory][index].answers[0] === selectedAnswer;

            if (isCorrect) {
                correctAudioSe.play();
            } else {
                incorrectAudioSe.play();
            }

            return {
                selectedAnswer,
                isCorrect
            };
        });

        setTimeout(() => {
            onSelect(selectedAnswer);
        }, 2000);
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
    );
}
