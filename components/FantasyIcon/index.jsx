import Image from 'next/image'
import React from 'react'

export default function FantasyIcon() {
  return (
      <div className="w-[298px] h-[220.15px] flex flex-col justify-center items-center gap-[2.5rem]">
          <Image alt='fantasy icon' unoptimized width={100} height={100} src={"/fantasyIcon.png"} />
          <div className=" text-blue-950 text-[22px] font-semibold leading-7 min-w-max">Results of Quiz</div>
          <div className="w-[143.78px] h-[151.11px] left-[77px] top-0 absolute">
          </div>
      </div>
  )
}
