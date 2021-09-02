import axios from "axios";

const API_URL = 'http://localhost:8080/api/v1/';

const genreService = {
    getAllGenres: () => axios.get(API_URL + 'genres.json')
}

export default genreService;
