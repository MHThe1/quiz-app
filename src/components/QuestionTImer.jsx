import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    let dummy;

    useEffect(() => {
        console.log("SETTING TIMEOUT");
        const timerId = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timerId);
        }
    }, [timeout, onTimeout])
    

    useEffect(() => {
        console.log("SETTING INTERVAL");
        const intervalId = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 10);
        }, 10)

        return () => {
            clearInterval(intervalId);
        }
    }, [])
    

    const progress = (remainingTime / timeout) * 100;
    const remainingTimeInSeconds = Math.round(remainingTime/1000)

    return (

        <div className="w-full mt-2 bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" 
                style={{ width: `${progress}%` }}> {remainingTimeInSeconds}s</div>
        </div>

    )
}