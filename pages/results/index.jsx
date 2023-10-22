import React from 'react'
import styles from "@/styles/Results.module.css";
import ResultsTable from '@/components/resultsTable';
import FinishQuiz from '@/components/FinishQuiz';
import FantasyIcon from '@/components/FantasyIcon';

export default function Results() {

  return (
    <div className={`${styles.resultsContainer}`}>
      {/* Fantasy Icon */}
      <FantasyIcon />

      {/* Results Table */}
      <ResultsTable />

      {/* Finish Quiz Button */}
      <FinishQuiz />

    </div>
  )
}
