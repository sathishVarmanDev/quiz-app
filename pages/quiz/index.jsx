import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Quiz.module.css";
import { useRouter } from "next/router";
import { fetchQuizData } from "@/api";
import { useStore } from "../store";
import ExitQuiz from "@/components/common/ExitQuiz";
import Header from "@/components/Header/index.jsx";
import ProgressBar from "@/components/ProgressBar";
import ProgressBarMedium from "@/components/ProgressBarMedium";
import ContinueButtonMedium from "@/components/ContinueButtonMedium";
import Question from "@/components/Question";
import Options from "@/components/Options";
import Gap from "@/components/Gap";
import ContinueButton from "@/components/ContinueButton";

export default function Quiz() {
    // Letters
    const letters = ["A", "B", "C", "D"];

    const quiz = useStore((store) => store.quiz);
    const setQuiz = useStore((store) => store.setQuiz);

    let apiCalled = false

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

    const loading = useStore((store) => store.loading);
    const setLoading = useStore((store) => store.setLoading);

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
        if (apiCalled === false) {
            fetchData();
        }
    }, []);

    const fetchData = async () => {
        apiCalled = true
        try {
            const data = await fetchQuizData();
            if (data.length) {
                let options = [data[0].correct_answer, ...data[0].incorrect_answers]
                options = shuffleArray(options)
                setShuffledOptions(options)
                setQuiz(data);
                setLoading(false); // set loading to false after the data has been loaded
            }
        } catch (e) {
            console.log("Error fetching data >>> ", e);
            apiCalled = false
        }

    };

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
        <div className={`${styles.quizContainer}`}>

            {/* Header */}
            <Header />

            {/* Exit Quiz Modal */}
            {open && <ExitQuiz />}

            {/* Progress Bar */}
            <ProgressBar />

            {/* Question */}
            <Question />

            {/* Options */}
            <Options />

            {/* Dummy Container */}
            <Gap />

            {/* Continue Button */}
            <ContinueButton />

            {/* Footer >md screen */}
            <div className={`${styles.footerContainer}`}>
                <ProgressBarMedium />
                <ContinueButtonMedium />
            </div>
        </div>
    );
}
