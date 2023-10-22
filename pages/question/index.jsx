import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Question.module.css";
import { useRouter } from "next/router";
import { fetchQuizData } from "@/api";
import { useStore } from "../store";
import ExitQuiz from "@/components/common/ExitQuiz";
import Header from "@/components/Header/index.jsx";
import ProgressBar from "@/components/ProgressBar";
import ProgressBarMedium from "@/components/ProgressBarMedium";

export default function Question() {
    // Letters
    const letters = ["A", "B", "C", "D"];

    const quiz = useStore((store) => store.quiz);
    const setQuiz = useStore((store) => store.setQuiz);

    const currentQuestion = useStore((store) => store.currentQuestion);
    const setCurrentQuestion = useStore((store) => store.setCurrentQuestion);

    // const progressBarWidth = (currentQuestion / quiz.length) * 100;

    const correctAnswerCount = useStore((store) => store.correctAnswerCount);
    const setCorrectAnswerCount = useStore(
        (store) => store.setCorrectAnswerCount
    );

    const shuffledOptions = useStore((store) => store.shuffledOptions);
    const setShuffledOptions = useStore((store) => store.setShuffledOptions);

    const selectedOption = useStore((store) => store.selectedOption);
    const setSelectedOption = useStore((store) => store.setSelectedOption);

    const open = useStore((store) => store.open);
    const setOpen = useStore((store) => store.setOpen);

    const [loading, setLoading] = useState(true);

    // Router
    const router = useRouter();

    // Shuffle function using Fisher-Yates algorithm
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const handleAnswerSelected = (selectedOption) => {
        if (selectedOption === quiz[currentQuestion - 1].correct_answer) {
            setCorrectAnswerCount();
        }
    };

    const handleLoading = () => {
        return <div>Loading ...</div>;
    };

    // fetch quiz
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchQuizData();

            if (data.length) {
                let options = [data[0].correct_answer, ...data[0].incorrect_answers]
                options = shuffleArray(options)
                setShuffledOptions(options)
                setQuiz(data);
                setLoading(false); // set loading to false after the data has been loaded
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (quiz.length && quiz[currentQuestion - 1]) {
            console.log(
                "correct answer > ",
                quiz[currentQuestion - 1].correct_answer
            );
            let options = [
                quiz[currentQuestion - 1].correct_answer,
                ...quiz[currentQuestion - 1].incorrect_answers,
            ];
            options = shuffleArray(options);
            setShuffledOptions(options);
        }
    }, [currentQuestion]);

    useEffect(() => {
        console.log("correctAnswerCount updated: ", correctAnswerCount);
    }, [correctAnswerCount]);

    return loading ? (
        handleLoading()
    ) : (
        <div className={`${styles.questionContainer}`}>

            {/* Header */}
            <Header />

            {/* Exit Quiz Modal */}
            {open && <ExitQuiz />}

            {/* Progress Bar */}
            {/* <div className={`${styles.progressBarContainer}`}>
                <div className="left-[312px] top-0 absolute text-neutral-500 text-sm font-semibold leading-tight min-w-max">
                    {" "}
                    {currentQuestion}/ {quiz.length}
                </div>
                <div className="w-[300px] h-3 left-0 top-[4px] absolute">
                    <div className="w-[300px] h-3 left-0 top-0 absolute bg-zinc-100 rounded-2xl" />
                    <div
                        className="w-[60px] h-3 left-0 top-0 absolute bg-green-500 rounded-2xl"
                        style={{ width: `${progressBarWidth}%` }}
                    />
                </div>
            </div> */}
                <ProgressBar />

            {/* Question */}
            <div className="w-[335px] min-h-max text-blue-950 text-[22px] font-semibold leading-[30px] mx-auto mt-[2.75rem]">
                {!loading &&
                    quiz.length > 0 &&
                    quiz[currentQuestion - 1] &&
                    quiz[currentQuestion - 1].question}
            </div>

            {/* Options */}
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
                        >
                            {/* {options[index].split(" ")[0]} */}
                            {option}
                        </div>
                    </div>
                ))}
            </div>

            {/* Dummy Container */}
            <div className={`${styles.dummyContainer}`}></div>

            {/* Continue Button */}
            <div
                className={`${selectedOption
                    ? styles.continueButtonEnabled
                    : styles.continueButtonDisabled
                    }`}
                onClick={() => {
                    if (selectedOption) {
                        console.log("currentQuestion > ", currentQuestion);
                        console.log("quiz.length > ", quiz.length);
                        handleAnswerSelected(selectedOption);
                        if (currentQuestion < quiz.length) {
                            // setCurrentQuestion((prevcurrentQuestion) => prevcurrentQuestion + 1)
                            setCurrentQuestion();
                            setSelectedOption(null);
                        } else {
                            router.push(`/results`);
                        }
                    }
                }}
            >
                <div className="left-[124px] top-[20px] absolute text-stone-200 text-base font-semibold leading-tight">
                    CONTINUE
                </div>
            </div>

                {/* Footer >md screen */}
                <ProgressBarMedium />
        </div>
    );
}
