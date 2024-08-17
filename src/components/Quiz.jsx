import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import ContentBox from "./ContentBox";
import Question from "./Question";
import Summary from "./Summary.jsx";

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
            <Summary userAnswers={userAnswers} />
        )
    }


    return (
        <Question
            key={activeQuestionIndex}
            index={activeQuestionIndex}
            onSelect={handleSelecteAnswer}
            onTimeout={handleSkipAnswer}
        />

    )
}