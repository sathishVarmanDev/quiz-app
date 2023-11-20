import React from 'react'
import styles from "./Question.module.css"
import { useStore } from '@/store/store.js'

export default function Question() {

    const loading = useStore((store) => store.loading);
    const quiz = useStore((store) => store.quiz);
    const currentQuestion = useStore((store) => store.currentQuestion)

    // console.log("Question rendered");
    // console.log("loading", loading);
    // console.log("question", question);

    return (
        <div
            className={styles.questionContainer}
        >
            <div dangerouslySetInnerHTML={{
                __html: `${!loading &&
                    quiz.length > 0 &&
                    quiz[currentQuestion - 1] ?
                    quiz[currentQuestion - 1].question :
                    " "
                    }`
                // __html: `${question}`
            }} />
        </div>
    )
}
