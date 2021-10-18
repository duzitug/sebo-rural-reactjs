import axios from "axios";
import API_URL from "../config/environment";

const genreService = {
  getAllGenres: () => axios.get(API_URL + "genres.json"),
  addGenre: (genre) => axios.post(`${API_URL}genres.json`, genre)
};

export default genreService;
