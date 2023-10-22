import { useStore } from '@/pages/store';
import { useRouter } from 'next/router';
import styles from "./ContinueButtonMedium.module.css"
import React from 'react'

export default function ContinueButtonMedium() {

    const quiz = useStore((store) => store.quiz);
    const currentQuestion = useStore((store) => store.currentQuestion);
    const setCurrentQuestion = useStore((store) => store.setCurrentQuestion);
    const selectedOption = useStore((store) => store.selectedOption);
    const setSelectedOption = useStore((store) => store.setSelectedOption);
    const setCorrectAnswerCount = useStore((store) => store.setCorrectAnswerCount);
    const router = useRouter();

    const handleAnswerSelected = (selectedOption) => {
        if (selectedOption === quiz[currentQuestion - 1].correct_answer) {
            setCorrectAnswerCount();
        }
    };

    return (
        <>
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
        </>
    )
}
