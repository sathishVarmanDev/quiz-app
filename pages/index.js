import React from 'react'
import styles from "@/styles/Home.module.css"
import Image from 'next/image'
import { useRouter } from "next/router"
import { useStore } from '@/store/store.js'
import QuizCriteria from '@/components/QuizCriteria'
import Overlay from '@/components/Overlay'
import HomeContent from '@/components/HomeContent'

export default function Home() {

  const quizCriteria = useStore((store) => store.quizCriteria)
  const setQuizCriteria = useStore((store) => store.setQuizCriteria);
  const router = useRouter()

  const handleQuizCriteria = () => setQuizCriteria(true)

  console.log("quizCriteria", quizCriteria);

  return (
    <>
      {
        quizCriteria ? <div className='h-screen w-full'>
          <HomeContent />
          <Overlay />
          <QuizCriteria />
        </div> : (
          <HomeContent />
        )}
    </>
  )
}
