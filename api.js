import axios from 'axios';

export async function fetchQuizData(numberOfQuestions, category, difficulty) {
    console.log("axios executed")
    console.log(numberOfQuestions, category, difficulty)
    let response = await axios.get(`https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`)
    return response.data.results
}

