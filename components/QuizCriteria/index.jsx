import React, { useState } from 'react'
import { useFormik, Formik, Form, ErrorMessage, Field } from "formik"
import * as Yup from 'yup'
import styles from './QuizCriteria.module.css'
import Image from 'next/image'
import { useStore } from '@/store/store.js'
import { useRouter } from 'next/router'

export default function QuizCriteria() {

  const numberOfQuestions = useStore((store) => store.numberOfQuestions)
  const setNumberOfQuestions = useStore((store) => store.setNumberOfQuestions);
  const category = useStore((store) => store.category)
  const setCategory = useStore((store) => store.setCategory);
  const difficulty = useStore((store) => store.difficulty)
  const setDifficulty = useStore((store) => store.setDifficulty);
  const quizCriteria = useStore((store) => store.quizCriteria)
  const setQuizCriteria = useStore((store) => store.setQuizCriteria);

  const router = useRouter()
  
  const initialValues = {
    numberOfQuestions: "",
    category: "",
    difficulty: "",
  }

  const handleFormSubmit = (values) => {
    setNumberOfQuestions(values.numberOfQuestions)
    setCategory(values.category)
    setDifficulty(values.difficulty.toLowerCase())
    router.push("/quiz")
  }

  const validationSchema = Yup.object({
    numberOfQuestions: Yup.number().typeError("Input a number").max(10, "Maximum 10 is allowed").required("Number of questions is required"),
    category: Yup.string().required("Category is required"),
    difficulty: Yup.string().required("Difficulty is required"),
  })

  const handleQuizCriteria = () => setQuizCriteria(false)

  return (
    <div className={styles.root}>
      <div className={styles.formModal}>
        <Image
          className={`${styles.exit}`}
          alt="exit"
          unoptimized
          width={100}
          height={100}
          src={"/exit.svg"}
          onClick={() => handleQuizCriteria()}
        />
        <h1 className={styles.header}>Choose Your Quiz Criteria</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => handleFormSubmit(values)}
          validationSchema={validationSchema}
        >
          {() => (
            <Form
              className={styles.form}
            >

              {/* Number of Questions */}
              <div className='flex flex-col mt-6'>
                <label htmlFor="numberOfQuestions"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                  Number Of Questions
                </label>

                <div className="relative">
                  <div className="absolute flex border border-transparent left-0 top-0 h-full w-10">
                    <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
                      <Image className={styles.icon} alt='question' unoptimized width={100} height={100} src={"/number.svg"} />
                    </div>
                  </div>

                  <Field id="numberOfQuestions"
                    name="numberOfQuestions"
                    placeholder="Number Of Questions"
                    className="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12" />
                </div>
                <ErrorMessage
                  className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'
                  name="numberOfQuestions"
                  component="span"
                />
              </div>

                {/* Category */}
              <div className="w-full px-0 mt-6">
                <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600" htmlFor="category">
                    Category
                  </label>
                  <div className="relative">
                    <Field
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray text-[.6rem] md:text-[0.875rem]  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      as="select"
                      name="category"
                    >
                      <option value="">Select a category</option>
                      <option value="9">General Knowledge</option>
                      <option value="10">Entertainment: Books</option>
                      <option value="11">Entertainment: Film</option>
                      <option value="12">Entertainment: Music</option>
                      <option value="13">Entertainment: Musicals & Theatres</option>
                      <option value="14">Entertainment: Television</option>
                      <option value="15">Entertainment: Video Games</option>
                      <option value="16">Entertainment: Board Games</option>
                      <option value="17">Science & Nature</option>
                      <option value="18">Science: Computers</option>
                      <option value="19">Science: Mathematics</option>
                      <option value="20">Mythology</option>
                      <option value="21">Sports</option>
                      <option value="22">Geography</option>
                      <option value="23">History</option>
                      <option value="24">Politics</option>
                      <option value="25">Art</option>
                      <option value="26">Celebrities</option>
                      <option value="27">Animals</option>
                      <option value="28">Vehicles</option>
                      <option value="29">Entertainment: Comics</option>
                      <option value="30">Science: Gadgets</option>
                      <option value="31">Entertainment: Japanese Anime & Manga</option>
                      <option value="32">Entertainment: Cartoon & Animations</option>
                    </Field>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                  <ErrorMessage
                    className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'
                    name="category"
                    component="span"
                  />
              </div>
              
              {/* Difficulty */}
              <div className="w-full px-0 mt-6">
                <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600" htmlFor="difficulty">
                  Difficulty
                </label>
                <div className="relative">
                  <Field
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray text-[.6rem] md:text-[0.875rem] py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    as="select"
                    name="difficulty"
                  >
                    <option value="">Select Difficulty</option>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </Field>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
                <ErrorMessage
                  className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'
                  name="difficulty"
                  component="span"
                />
              </div>
              <button className="group relative min-w-max py-[.5rem] px-[2rem] overflow-hidden rounded-lg bg-white text-sm shadow mt-6" type='submit'>
                <div className="absolute inset-0 w-3 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">Start Quiz</span>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
