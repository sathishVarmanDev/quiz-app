import React from 'react'
import Image from 'next/image'
import styles from "./HomeContent.module.css"
import { useRouter } from 'next/router';
import { useStore } from '@/store/store.js'

export default function HomeContent() {

    const quizCriteria = useStore((store) => store.quizCriteria)
    const setQuizCriteria = useStore((store) => store.setQuizCriteria);
    const router = useRouter()

    const handleQuizCriteria = () => setQuizCriteria(true)
  return (
      <div className={`${styles.homeContainer}`}>
          <div className={`${styles.heroContainer}`}>
              <div className={`${styles.headerContainer}`}>
                  <div className={`${styles.quizContainer}`}>Quiz</div> Flow
              </div>
              <div className={`${styles.divider}`} />
              <button
                  className={`${styles.startButton}`}
                  onClick={() => handleQuizCriteria()}>
                  Start Quiz
              </button>
          </div>
          <div className={`${styles.statisticsContainer}`}>
              <Image alt='statistics' unoptimized width={100} height={100} src={`/statistics.png`} className={`${styles.statisticsImage}`} />
          </div>
          <Image alt='results' unoptimized width={100} height={100} src={`/resultsTwo.png`} className={`${styles.resultsImage}`} />
          <Image alt='results-right' unoptimized width={100} height={100} src={`/resultsRight.png`} className={`${styles.resultsRightImage}`} />
          <Image alt='right-banner' unoptimized width={100} height={100} src={`/rightBanner.png`} className={`${styles.rightBanner}`} priority />
      </div>
  )
}
