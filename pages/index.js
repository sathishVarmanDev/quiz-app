import React from 'react'
import styles from "@/styles/Home.module.css"

export default function Home() {
  return (
    <div className={`${styles.homeContainer}`}>
      <div className={`${styles.heroContainer}`}>
        <div className={`${styles.headerContainer}`}>
          <div className={`${styles.quizContainer}`}>Quiz</div> Flow
        </div>
        <div className={`${styles.divider}`} />
        <div className={`${styles.subHeader}`}>
          For Finance
        </div>
        <div className={`${styles.startButtonContainer}`}>
          <button className={`${styles.startButton}`}>
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  )
}
