import React, { useContext } from 'react';
import { CategoryContext } from "../contexts/CategoryContext.jsx";
import Categories from './Categories.jsx';

export default function ScreenshotSummary({ skippedAnswerCount, correctAnswerCount, incorrectAnswerCount }) {
    const { selectedCategory } = useContext(CategoryContext);

    const categoryValue = Categories[selectedCategory];
    const totalQuestions = correctAnswerCount + skippedAnswerCount + incorrectAnswerCount;
    const correctPercentage = (correctAnswerCount / totalQuestions) * 100;
    const categoryName = categoryValue.name;

    let prompt;
    if (correctPercentage === 100) {
        prompt = `Definitely in the top 0.00001% of the ${categoryName} fans!`;
    } else if (correctPercentage >= 80) {
        prompt = `Eidetic Memory or just a ${categoryName} binge master!`;
    } else if (correctPercentage >= 50) {
        prompt = `Time to binge ${categoryName} once more!`;
    } else {
        prompt = `Silly you! Forgot all about ${categoryName} already?`;
    }

    return (
        <div id="screenshot-container" className="hidden w-[432px] h-[932px] bg-neutral-100 dark:bg-neutral-900">
            <div className='font-friends text-xl font-semibold dark:text-white text-center pt-40 mb-2 md:mb-0'>
                The Quizzer
            </div>
            <div className="font-sf font-bold text-2xl dark:text-white text-black mb-2 pb-10 md:mb-0 text-center">
                {categoryName}
            </div>
            <div className="px-10 mx-4 text-center bg-sky-200 dark:bg-purple-700
                 text-stone-950 dark:text-stone-50 font-quicksand font-bold p-4 rounded-lg">
                <div className="text-center m-4">
                    <img
                        className="w-full h-full object-cover rounded-lg mb-4"
                        src={categoryValue.images[0]}
                        alt={categoryValue.alt}
                    />
                </div>
                <div className="flex justify-center items-center font-handjet text-xl mb-4">
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
                <div className="text-center mt-4 font-bold text-lg">
                    {prompt}
                </div>
            </div>
        </div>
    );
}
