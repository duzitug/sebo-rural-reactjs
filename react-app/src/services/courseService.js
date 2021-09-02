import axios from "axios";

const API_URL = 'http://localhost:8080/api/v1/';

const courseService = { getAllCourses: () => axios.get(API_URL + 'courses.json') };

export  default courseService;

