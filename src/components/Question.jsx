import QuestionTimer from "./QuestionTImer";
import ContentBox from "./ContentBox";
import Answers from "./Answers";
import { useState } from "react";
import QUESTIONS from '../questions.js';

export default function Question({
    index,
    onSelect,
    onTimeout
}) {
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
                isCorrect: QUESTIONS[index].answers[0] === answer
            })

        setTimeout(() => {
            onSelect(answer);
            
        }, 2000);
        }, 1000);
    }

    let answerState = 'unanswered';

    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correctAnswer' : 'wrongAnswer';
    } else if (answer.selectedAnswer) {
        answerState = 'answered';
    }

    return (
        <ContentBox>
            <h2 className="mb-3 text-2xl">
                {index + 1}. {QUESTIONS[index].text}
            </h2>

            <Answers
                answers={QUESTIONS[index].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
            <QuestionTimer
                key={timer}
                timeout={timer}
                onTimeout={answer.selectedAnswer === '' ? onTimeout : null} />
        </ContentBox>
    )
}