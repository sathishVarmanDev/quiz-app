import axios from 'axios';

export async function fetchQuizData() {
    let response = await axios.get(`https://opentdb.com/api.php?amount=2`)
    return response.data.results
}

