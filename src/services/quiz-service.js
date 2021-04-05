const BASE_URL = "http://localhost:4000/api"

export const findAllQuizzes = () => {
    return (fetch(`${BASE_URL}/quizzes`)
        .then(response => response.json()))
}

const api = {
    findAllQuizzes
}

export default api

