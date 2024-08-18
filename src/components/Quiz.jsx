import { useState, useCallback, useContext } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary.jsx";

import { CategoryContext } from "../contexts/CategoryContext.jsx";

export default function Quiz() {
    const { selectedCategory } = useContext(CategoryContext);

    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS[selectedCategory].length;


    const handleSelecteAnswer = useCallback(function handleSelecteAnswer(selectedAnswer) {
        setUserAnswers((prevAnswers) => {
            return [...prevAnswers, selectedAnswer]
        });

    }, [])

    const handleSkipAnswer = useCallback(() => handleSelecteAnswer(null), [handleSelecteAnswer]);

    const handleSkipAll = useCallback(() => {
        const remainingQuestions = QUESTIONS[selectedCategory].length - userAnswers.length;
        setUserAnswers((prevAnswers) => [
            ...prevAnswers,
            ...Array(remainingQuestions).fill(null)
        ]);
    }, [userAnswers, selectedCategory]);

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
            onSkipAll={handleSkipAll}
        />

    )
}