import React from 'react'
import styles from "./ProgressBarMedium.module.css"
import { useStore } from '@/pages/store';


export default function ProgressBarMedium() {
    const currentQuestion = useStore((store) => store.currentQuestion);
    const quiz = useStore((store) => store.quiz);
    const progressBarWidth = (currentQuestion / quiz.length) * 100;
    const selectedOption = useStore((store) => store.selectedOption);

    return (
        <div className={`${styles.footerContainer}`}>
            <div className={`${styles.progressBarContainerMediumScreenContainer}`}>
                <div className={`${styles.progressBarContainerMediumScreen}`}>
                    <div className="left-[312px] top-0 absolute text-neutral-500 text-sm font-semibold leading-tight">
                        {" "}
                        {currentQuestion}/5
                    </div>
                    <div className="w-[300px] h-3 left-0 top-[4px] absolute">
                        <div className="w-[300px] h-3 left-0 top-0 absolute bg-white rounded-2xl" />
                        <div
                            className="w-[60px] h-3 left-0 top-0 absolute bg-green-500 rounded-2xl"
                            style={{ width: `${progressBarWidth}%` }}
                        />
                    </div>
                </div>
            </div>
            <div
                className={`${selectedOption
                    ? styles.continueButtonMediumScreenEnabled
                    : styles.continueButtonMediumScreenDisabled
                    }`}
                onClick={() => {
                    if (selectedOption) {
                        console.log("currentQuestion > ", currentQuestion);
                        console.log("quiz.length > ", quiz.length);
                        handleAnswerSelected(selectedOption);
                        if (currentQuestion < quiz.length) {
                            // setCurrentQuestion((prevcurrentQuestion) => prevcurrentQuestion + 1)
                            setCurrentQuestion();
                            setSelectedOption(null);
                        } else {
                            router.push(`/results`);
                        }
                    }
                }}
            >
                <div>CONTINUE</div>
            </div>
        </div>
    )
}
