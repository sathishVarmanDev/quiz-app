import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Quiz.module.css";
import { useRouter } from "next/router";
import { fetchQuizData } from "@/api";
import { useStore } from '@/store/store.js'
import ExitQuiz from "@/components/common/ExitQuiz";
import Header from "@/components/Header/index.jsx";
import ProgressBar from "@/components/ProgressBar";
import ProgressBarMedium from "@/components/ProgressBarMedium";
import ContinueButtonMedium from "@/components/ContinueButtonMedium";
import Question from "@/components/Question";
import Options from "@/components/Options";
import Gap from "@/components/Gap";
import ContinueButton from "@/components/ContinueButton";
import Loading from "@/components/Loading";
import ApiError from "@/components/ApiError";

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

    // const [loading, setLoading] = useState(true)
    const loading = useStore((store) => store.loading);
    const setLoading = useStore((store) => store.setLoading);

    const [apiError, setApiError] = useState(false);
    const [fetchSuccess, setFetchSuccess] = useState(false);

    const numberOfQuestions = useStore((store) => store.numberOfQuestions)
    const category = useStore((store) => store.category)
    const difficulty = useStore((store) => store.difficulty)


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
        // return <div>Loading ...</div>;
        return <Loading />;
    };

    const handleApiError = () => {
        return <ApiError />
    }

    // const handleQuestionRender = () => {
    //     return <Question />
    // }

    const fetchData = async (numberOfQuestions, category, difficulty) => {
        try {
            const data = await fetchQuizData(numberOfQuestions, category, difficulty);
            if (data.length) {
                console.log("data.length executed")
                let options = [data[0].correct_answer, ...data[0].incorrect_answers]
                options = shuffleArray(options)
                setShuffledOptions(options)
                setQuiz(data);
                setApiError(false)
                setFetchSuccess(true)
                setLoading(false);
                
            }
        } catch (e) {
            console.log(e)
            setLoading(false);
            apiCalled = false
            setApiError(true)
            setQuiz(null)
        }

    };

    // fetch quiz
    useEffect(() => {
        console.log(numberOfQuestions, category, difficulty);
        fetchData(numberOfQuestions, category, difficulty);
    }, []);


    useEffect(() => {
        if (quiz && quiz.length && quiz[currentQuestion - 1]) {
            let options = [
                quiz[currentQuestion - 1].correct_answer,
                ...quiz[currentQuestion - 1].incorrect_answers,
            ];
            options = shuffleArray(options);
            setShuffledOptions(options);
        }
    }, [currentQuestion]);

    return (

        <>
            {
                apiError ? handleApiError() :
                    loading ? handleLoading() :
                        fetchSuccess ? (
                            <div className={`${styles.quizContainer}`}>

                                {/* Header */}
                                <Header />

                                {/* Exit Quiz Modal */}
                                {open && <ExitQuiz />}

                                {/* Progress Bar */}
                                <ProgressBar />

                                {/* Question */}
                                <Question
                                    // question={quiz[currentQuestion - 1].question}
                                />

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
                        ) : null}
        </>
    )
}
