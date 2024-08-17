import React, { useContext } from 'react';
import { CategoryContext } from "../contexts/CategoryContext.jsx";
import Categories from './Categories.jsx';
import ContentBox from "./ContentBox.jsx";

export default function ScreenshotSummary({ skippedAnswerCount, correctAnswerCount, incorrectAnswerCount }) {
    const { selectedCategory } = useContext(CategoryContext);



    const categoryValue = Categories[selectedCategory];

    return (
        <div id="screenshot-container" className="hidden w-[432px] h-[932px] bg-neutral-100 dark:bg-neutral-900">
            <div className='font-friends text-xl font-semibold dark:text-white text-center pt-40 mb-2 md:mb-0'>
                The Quizzer
            </div>
            <div className="font-quicksand text-2xl text-blue-600 mb-2 pb-10 md:mb-0 text-center">
                {selectedCategory}
            </div>
            <ContentBox>
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
            </ContentBox>
        </div>
    );
}
