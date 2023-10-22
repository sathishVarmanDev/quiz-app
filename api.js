import axios from 'axios';

export function fetchQuizData() {
    return axios.get(`https://opentdb.com/api.php?amount=2`)
        .then(response => response.data.results)
        .catch(error => {
            console.log("Error fetching data >>> ", error);
            return [];
        })
}

