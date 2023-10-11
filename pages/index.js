import React from 'react'
import styles from "@/styles/Home.module.css"
import Image from 'next/image'

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
        <div className={`${styles.statisticsContainer}`}>
          <Image alt='statistics' unoptimized width={100} height={100} src={`/statistics.png`} className={`${styles.statisticsImage}`} />
        </div>
        <div className={`${styles.resultsContainer}`}>
          <Image alt='results' unoptimized width={100} height={100} src={`/resultsTwo.png`} className={`${styles.resultsImage}`} />
      </div>
      {/* <Image alt='right-banner' unoptimized width={100} height={100} src={`/rightBanner.png`} className={`${styles.rightBanner}`} /> */}
      <Image alt='results-right' unoptimized width={100} height={100} src={`/resultsRight.png`} className={`${styles.resultsRightImage}`} />
    </div>
  )
}
