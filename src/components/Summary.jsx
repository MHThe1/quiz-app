import React, { useState, useContext } from 'react';
import ContentBox from "./ContentBox.jsx";
import QUESTIONS from "../questions.js";
import Slider from "react-slick";
import { CategoryContext } from "../contexts/CategoryContext.jsx";
import Categories from './Categories.jsx';
import html2canvas from 'html2canvas';
import ScreenshotSummary from './ScreenshotSummary.jsx';

export default function Summary({ userAnswers }) {
    const { selectedCategory } = useContext(CategoryContext);

    const [scoreShareState, setScoreShareState] = useState('');

    let skippedAnswerCount = 0;
    let correctAnswerCount = 0;
    let incorrectAnswerCount = 0;

    QUESTIONS[selectedCategory].forEach((obj, index) => {
        if (obj.answers[0] === userAnswers[index]) {
            correctAnswerCount += 1;
        } else if (userAnswers[index] === null) {
            skippedAnswerCount += 1;
        } else {
            incorrectAnswerCount += 1;
        }
    });

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const categoryValue = Categories[selectedCategory];

    const handleTakeScreenshot = () => {
        document.getElementById("screenshot-container").classList.remove("hidden");

        const element = document.getElementById("screenshot-container");
        if (!element) {
            return;
        }
        html2canvas(element).then((canvas) => {
            let image = canvas.toDataURL("image/jpeg");
            const a = document.createElement("a");
            a.href = image;
            a.download = "QuizResult.jpeg";
            a.click();

            document.getElementById("screenshot-container").classList.add("hidden");
            setScoreShareState('downloaded');

        }).catch(err => {
            console.error("Couldn't take the screenshot!")
        });
    }

    function handleShareClick(goal) {
        if (scoreShareState === '') {
            setScoreShareState('downloaded');
            handleTakeScreenshot();
        } else if (scoreShareState === 'downloaded' && goal === 'copyLink') {
            const link = window.location.href;

            if (navigator.clipboard && window.isSecureContext) {
                // Approach with clipboard API
                navigator.clipboard.writeText(link).then(() => {
                    alert("Link copied to clipboard!");
                }).catch(err => {
                    console.error("Failed to copy link: ", err);
                });
            } else {
                // Fallback for iOS devices and older browsers
                const textArea = document.createElement("textarea");
                textArea.value = link;
                // hiding textarea visibility
                textArea.style.position = "fixed";
                textArea.style.opacity = "0";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                try {
                    document.execCommand('copy');
                    alert("Link copied to clipboard!");
                } catch (err) {
                    console.error("Failed to copy link: ", err);
                }
                document.body.removeChild(textArea);
            }
        } else if (scoreShareState === 'downloaded' && goal === 'shareToInsta') {
            const instaUrl = 'instagram://camera';
            window.location.href = instaUrl;
        }
    }



    return (
        <ContentBox>
            <div className="container text-center dark:text-stone-50 text-stone-950 text-3xl m-2">Quiz Completed!</div>
            {categoryValue && categoryValue.images && (
                <Slider {...sliderSettings}>
                    {categoryValue.images.map((image, i) => (
                        <div key={i} className='w-full h-full border-2 border-white rounded-lg'>
                            <img
                                className="h-[15rem] sm:h-[18rem] w-full object-cover rounded-lg"
                                src={image} alt={categoryValue.alt} />
                        </div>
                    ))}
                </Slider>
            )}
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

            <div className="flex justify-center space-x-4">
                <button
                    onClick={handleTakeScreenshot}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md transition-colors duration-300"
                >
                    Download Score
                </button>
                {scoreShareState === 'downloaded' && (
                    <>
                        <button
                            onClick={() => handleShareClick('copyLink')}
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-md transition-colors duration-300"
                        >
                            Copy Link
                        </button>
                        <button
                            onClick={() => handleShareClick('shareToInsta')}
                            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded shadow-md transition-colors duration-300"
                        >
                            Share to Insta
                        </button>
                    </>
                )}
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
                    );
                })}
            </ol>
            <ScreenshotSummary
                skippedAnswerCount={skippedAnswerCount}
                correctAnswerCount={correctAnswerCount}
                incorrectAnswerCount={incorrectAnswerCount}
            />
        </ContentBox>
    );
}
