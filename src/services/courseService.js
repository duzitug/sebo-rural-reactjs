import axios from "axios";
import API_URL from "../config/environment";

const courseService = {
  getAllCourses: (token) =>
    axios.get(API_URL + "courses.json", {
      headers: { Authorization: `Bearer ${token}` }
    }),
  login: () =>
    axios.post(
      "https://sebo-rural-rest-api-cakephp.herokuapp.com/api/v1/users/login.json",
      { email: "merciofilho@gmail.com", password: "123" }
    )
};

export default courseService;
