import React from 'react'
import styles from "./ProgressBar.module.css"
import { useStore } from '@/store/store.js'

export default function ProgressBar() {

    const currentQuestion = useStore((store) => store.currentQuestion);
    const quiz = useStore((store) => store.quiz);
    const progressBarWidth = (currentQuestion / quiz.length) * 100;

    return (
        <div className={`${styles.progressBarContainer}`}>
            <div className="left-[312px] top-0 absolute text-neutral-500 text-sm font-semibold leading-tight min-w-max">
                {" "}
                {currentQuestion}/ {quiz.length}
            </div>
            <div className="w-[300px] h-3 left-0 top-[4px] absolute">
                <div className="w-[300px] h-3 left-0 top-0 absolute bg-zinc-100 rounded-2xl" />
                <div
                    className="w-[60px] h-3 left-0 top-0 absolute bg-green-500 rounded-2xl"
                    style={{ width: `${progressBarWidth}%` }}
                />
            </div>
        </div>
    )
}
