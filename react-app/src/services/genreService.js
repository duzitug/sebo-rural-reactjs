import axios from "axios";

const API_URL = 'http://localhost:8080/api/v1/';

const genreService = {
    getAllGenres: () => axios.get(API_URL + 'genres.json'),
    addGenre: ( genre ) => axios.post(`${API_URL}genres.json`, genre),
}

export default genreService;
