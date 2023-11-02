import { useStore } from '@/pages/store'
import Image from 'next/image'
import React from 'react'

export default function ResultsTable() {
    const correctAnswerCount = useStore((store) => store.correctAnswerCount)
    const quiz = useStore((store) => store.quiz)
    const handleScore = () => {
        if (!correctAnswerCount || !quiz.length) {
            return 0;
        }
        return correctAnswerCount / quiz.length * 100
    }

    return (
        <div className="grow">
            <div className="mt-[3.6rem] w-[335px] h-36 bg-zinc-100 flex flex-col">
                <div className="h-[4.5rem] flex items-center justify-between">
                    <div className='ml-[1rem] flex justify-center items-center gap-[1rem]'>
                        <Image alt='score icon' unoptimized width={25} height={25} src={"/scoreIcon.png"} />
                        <div className="text-gray-950 text-base font-normal leading-tight min-w-max">SCORE GAINED</div>
                    </div>
                    <div className=" text-gray-950 text-base font-semibold leading-tight mr-[1rem]">{handleScore()}</div>
                </div>
                <div className="h-[4.5rem] flex items-center justify-between">
                    <div className='ml-[1rem] flex justify-center items-center gap-[1rem]'>
                        <Image alt='score icon' unoptimized width={25} height={25} src={"/tick.png"} />
                        <div className="text-gray-950 text-base font-normal leading-tight min-w-max">CORRECT PREDICTIONS</div>
                    </div>
                    <div className=" text-gray-950 text-base font-semibold leading-tight mr-[1rem]">{correctAnswerCount}</div>
                </div>
            </div>
        </div>
    )
}
