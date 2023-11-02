import { useStore } from '@/pages/store'
import { useRouter } from 'next/router'
import React from 'react'

export default function FinishQuiz() {
    const setQuiz = useStore((store) => store.setQuiz)
    const setCurrentQuestion = useStore((store) => store.setCurrentQuestion)
    const setSelectedOption = useStore((store) => store.setSelectedOption)
    const setCorrectAnswerCount = useStore((store) => store.setCorrectAnswerCount)
    const setLoading = useStore((store) => store.setLoading)
    const setQuizCriteria = useStore((store) => store.setQuizCriteria)

    const router = useRouter()
  return (
      <div
          className="flex justify-center items-center bottom-[50%] w-[335px] h-[60px] bg-green-500 rounded-lg text-zinc-100 text-base font-semibold leading-tight hover:cursor-pointer"
          onClick={() => {
              setCurrentQuestion(1);
              setSelectedOption(null);
              setCorrectAnswerCount(0)
              setQuiz([]);
              setLoading(true); // set loading to true at the start of the new quiz
              setQuizCriteria(false);
              console.log("final")
              router.push(`/`);
          }}
      >
          <div>
              OKAY
          </div>
      </div>
  )
}
