import axios from "axios";

import API_URL from "../config/environment";

const headers = { "Content-Type": "application/json" };

const body = {
  email: "merciofilho@gmail.com",
  password: "13423"
};

const studentService = {
  getAllStudents: () => axios.get(API_URL + "students.json"),
  login: () => axios.post(API_URL + "users/login.json")
};

export default studentService;
