import { create } from "zustand";
const store = (set) => (
    {
        correctAnswerCount: 0,
        setCorrectAnswerCount: (resetCorrectAnswerCount) => set((store) => (
            {
                correctAnswerCount: resetCorrectAnswerCount === undefined ? store.correctAnswerCount + 1 : resetCorrectAnswerCount
            }
        )),

        quiz: [],
        setQuiz: (quizData) => set((store) => (
            {
                quiz: quizData,
            }
        )),

        currentQuestion: 1,
        setCurrentQuestion: (resetCurrentQuestion) => set((store) => (
            {
                currentQuestion: resetCurrentQuestion === undefined ?
                    store.currentQuestion + 1 :
                    resetCurrentQuestion
            }
        )),

        shuffledOptions: [],
        setShuffledOptions: (options) => set((store) => (
            {
                shuffledOptions: options
            }
        )),

        selectedOption: null,
        setSelectedOption: (optionsState) => set((store) => (
            {
                selectedOption: optionsState
            }
        )),

        open: false,
        setOpen: () => set((store) => (
            {
                open: !store.open
            }
        )),

        loading: true,
        setLoading: (isLoading) => {
            console.log("jello");
            set((store) => (
                {
                    loading: isLoading
                }
            ))
        },
    }
)

export const useStore = create(store);