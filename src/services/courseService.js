import axios from "axios";
import API_URL from "../config/environment";

const courseService = {
  getAllCourses: () => axios.get(API_URL + "courses.json")
};

export default courseService;
