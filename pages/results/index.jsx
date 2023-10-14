import React from 'react'
import styles from "@/styles/Results.module.css";
import Image from 'next/image';

export default function Results() {
  return (
    <div className={`${styles.resultsContainer}`}>
      <div className="w-[298px] h-[220.15px] flex flex-col justify-center items-center gap-[2.5rem]">
        <Image alt='fantasy icon' unoptimized width={100} height={100} src={"/fantasyIcon.png"} />
        <div className=" text-blue-950 text-[22px] font-semibold leading-7 min-w-max">Results of Fantasy Quiz #156</div>
        <div className="w-[143.78px] h-[151.11px] left-[77px] top-0 absolute">
        </div>
      </div>

      <div className="grow">
      <div className="mt-[3.6rem] w-[335px] h-36 bg-zinc-100 flex flex-col">
        <div className="h-[4.5rem] flex items-center justify-between">
          <div className='ml-[1rem] flex justify-center items-center gap-[1rem]'>
            <Image alt='score icon' unoptimized width={25} height={25} src={"/scoreIcon.png"} />
            <div className="text-gray-950 text-base font-normal leading-tight min-w-max">SCORE GAINED</div>
          </div>
          <div className=" text-gray-950 text-base font-semibold leading-tight mr-[1rem]">120</div>
        </div>
        <div className="h-[4.5rem] flex items-center justify-between">
          <div className='ml-[1rem] flex justify-center items-center gap-[1rem]'>
            <Image alt='score icon' unoptimized width={25} height={25} src={"/scoreIcon.png"} />
            <div className="text-gray-950 text-base font-normal leading-tight min-w-max">CORRECT PREDICTIONS</div>
          </div>
          <div className=" text-gray-950 text-base font-semibold leading-tight mr-[1rem]">54</div>
        </div>
      </div>
      </div>

      <div className="flex justify-center items-center bottom-[50%] w-[335px] h-[60px] bg-green-500 rounded-lg text-zinc-100 text-base font-semibold leading-tight hover:cursor-pointer">
        <div>
          OKAY
        </div>
      </div>

    </div>
  )
}
