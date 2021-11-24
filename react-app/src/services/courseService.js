import axios from "axios";
import API_URL from "../config/environment";

const courseService = {
  getAllCourses: (token) =>
    axios.get(API_URL + "courses.json", {
      headers: { Authorization: `Bearer ${token}` }
    })
};

export default courseService;
