import React from 'react'
import styles from "./ContinueButton.module.css"
import { useStore } from '@/store/store.js'
import { useRouter } from 'next/router';

export default function ContinueButton() {

    const selectedOption = useStore((store) => store.selectedOption)
    const setSelectedOption = useStore((store) => store.setSelectedOption)
    const currentQuestion = useStore((store) => store.currentQuestion)
    const quiz = useStore((store) => store.quiz)
    const setCurrentQuestion = useStore((store) => store.setCurrentQuestion)
    const setCorrectAnswerCount = useStore((store) => store.setCorrectAnswerCount)
    const router = useRouter()
    
    const handleAnswerSelected = (selectedOption) => {
        if (selectedOption === quiz[currentQuestion - 1].correct_answer) {
            setCorrectAnswerCount();
        }
    };
    
    return (
        <div
            className={`${selectedOption
                ? styles.continueButtonEnabled
                : styles.continueButtonDisabled
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
            <div className="left-[124px] top-[20px] absolute text-stone-200 text-base font-semibold leading-tight">
                {currentQuestion < quiz.length ? "CONTINUE" : "FINISH"}
            </div>
        </div>
    )
}
