import React from 'react'
import styles from "./Options.module.css"
import { useStore } from '@/pages/store';

export default function Options() {
    const letters = ["A", "B", "C", "D"];
    const shuffledOptions = ["Option A", "Option B", "Option C", "Option D"];
    const setSelectedOption = useStore((store) => store.setSelectedOption);
    const selectedOption = useStore((store) => store.selectedOption);


  return (
      <div className={`${styles.optionsContainer}`}>
          {shuffledOptions.map((option, index) => (
              <div
                  key={index}
                  className={`w-[335px] h-[60px] flex justify-start items-center gap-[0.75rem] pl-[1rem] ${selectedOption === option ? styles.selectedOption : `bg-stone-200`
                      } rounded-lg cursor-pointer`}
                  onClick={() => setSelectedOption(option)}
              >
                  <div className="w-9 h-9 bg-zinc-100 rounded-full flex justify-center items-center">
                      <div className="text-gray-950 text-base font-semibold ">
                          {letters[index]}
                      </div>
                  </div>
                  <div
                      className={`left-[88px] top-[20px] text-base font-semibold  leading-tight ${selectedOption === option
                          ? styles.selectedOption
                          : `text-gray-950`
                          }`}
                      dangerouslySetInnerHTML={{
                          __html: option
                      }}
                  >
                  </div>
              </div>
          ))}
      </div>
  )
}
