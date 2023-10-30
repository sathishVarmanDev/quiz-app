import React from 'react'
import styles from "./Question.module.css"
import { useStore } from '@/pages/store';

export default function Question({loading,question}) {

    // const loading = useStore((store) => store.loading);
    // const quiz = useStore((store) => store.quiz);
    // const currentQuestion = useStore((store) => store.currentQuestion)

    console.log("Question rendered");

    return (
        <div
            className={styles.questionContainer}
        >
            <div dangerouslySetInnerHTML={{
                // __html: `${!loading &&
                //     quiz.length > 0 &&
                //     quiz[currentQuestion - 1] ?
                //     quiz[currentQuestion - 1].question :
                //     " "
                //     }`
                __html: `${question}`
            }} />
        </div>
    )
}
