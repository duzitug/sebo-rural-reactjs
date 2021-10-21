import axios from "axios";
import API_URL from "../config/environment";

const genreService = {
  getAllGenres: () => axios.get(API_URL + "genres.json"),
  addGenre: (genre, token) =>
    axios.post(`${API_URL}genres.json`, genre, {
      headers: { Authorization: `Bearer ${token}` }
    })
};

export default genreService;
