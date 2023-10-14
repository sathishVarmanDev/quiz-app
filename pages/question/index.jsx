import Image from "next/image";
import React, { useState } from "react";
import styles from "@/styles/Question.module.css";
import { useRouter } from "next/router";

export default function index() {
    const [currentQuestion, setCurrentQuestion] = useState(5);
    const progressBarWidth = (currentQuestion / 5) * 100;

    // Options
    const options = [
        "NIFTY50 ₹17,356, -0.31%",
        "NIFTYNEXT50 ₹56,226, -0.31%",
        "NIFTYBANK ₹17,356, +2.12%",
    ]
    const [selectedOption, setSelectedOption] = useState(null);

    // Letters
    const letters = ["A", "B", "C"]

    // Router
    const router = useRouter()

    return (
        <div className={`${styles.questionContainer}`}>
            <div className={`${styles.headerContainer}`}>
                <Image
                    className={`${styles.logo}`}
                    alt="logo"
                    unoptimized
                    width={100}
                    height={100}
                    src={"/logo.png"}
                />
                <header className={`${styles.header}`}>Fantasy Quiz #156</header>
                <Image
                    className={`${styles.exit}`}
                    alt="exit"
                    unoptimized
                    width={100}
                    height={100}
                    src={"/exit.svg"}
                />
            </div>

            {/* Progress Bar */}
            <div className={`${styles.progressBarContainer}`}>
                <div className="left-[312px] top-0 absolute text-neutral-500 text-sm font-semibold leading-tight">
                    {" "}
                    {currentQuestion}/5
                </div>
                <div className="w-[300px] h-3 left-0 top-[4px] absolute">
                    <div className="w-[300px] h-3 left-0 top-0 absolute bg-zinc-100 rounded-2xl" />
                    <div className="w-[60px] h-3 left-0 top-0 absolute bg-green-500 rounded-2xl"
                        style={{ width: `${progressBarWidth}%` }} />
                </div>
            </div>

            <div className="w-[335px] h-[83px] text-blue-950 text-[22px] font-semibold leading-[30px] mx-auto mt-[2.75rem]">
                PREDICT THE TOP LOSER (for tomorrow) across these indices
            </div>

            {/* Options */}
            <div className={`${styles.optionsContainer}`}>
                {
                    options.map((option, index) => (
                        <div
                            key={index}
                            className={`w-[335px] h-[60px] flex justify-start items-center gap-[0.75rem] pl-[1rem] ${selectedOption === option ? styles.selectedOption : `bg-stone-200`} rounded-lg cursor-pointer`}
                            onClick={() => setSelectedOption(option)}

                        >
                            <div className="w-9 h-9 bg-zinc-100 rounded-full flex justify-center items-center">
                                <div className="text-gray-950 text-base font-semibold ">
                                    {letters[index]}
                                </div>
                            </div>
                            <div
                                className={`left-[88px] top-[20px] text-base font-semibold  leading-tight ${selectedOption === option ? styles.selectedOption : `text-gray-950`}`}
                            >
                                {options[index].split(" ")[0]}
                            </div>
                            <div className={`left-[187px] top-[20px] text-base font-medium  leading-tight ${selectedOption === option ? styles.selectedOption : `text-gray-950`}`}>
                                {options[index].split(" ")[1]}
                            </div>
                            <div className={`left-[286px] top-[20px] text-base font-medium  leading-tight ${selectedOption === option ? styles.selectedOption : `text-red-800`}`}>
                                {options[index].split(" ")[2]}
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* Continue Button */}
            <div
                className={`${selectedOption ? styles.continueButtonEnabled : styles.continueButtonDisabled}`}
                onClick={() => selectedOption ? router.push(`/results`) : null}>
                <div className="left-[124px] top-[20px] absolute text-stone-200 text-base font-semibold leading-tight">CONTINUE</div>
            </div>

            {/* Footer >md screen */}
            <div className={`${styles.footerContainer}`}>
                <div className={`${styles.progressBarContainerMediumScreenContainer}`}>
                    <div className={`${styles.progressBarContainerMediumScreen}`}>
                        <div className="left-[312px] top-0 absolute text-neutral-500 text-sm font-semibold leading-tight">
                            {" "}
                            {currentQuestion}/5
                        </div>
                        <div className="w-[300px] h-3 left-0 top-[4px] absolute">
                            <div className="w-[300px] h-3 left-0 top-0 absolute bg-white rounded-2xl" />
                            <div className="w-[60px] h-3 left-0 top-0 absolute bg-green-500 rounded-2xl"
                                style={{ width: `${progressBarWidth}%` }} />
                        </div>
                    </div>
                </div>
                <div
                    className={`${selectedOption ? styles.continueButtonMediumScreenEnabled : styles.continueButtonMediumScreenDisabled}`}
                    onClick={() => selectedOption ? router.push(`/results`) : null}
                >
                    <div>
                        CONTINUE
                    </div>
                </div>
            </div>
        </div>
    );
}
