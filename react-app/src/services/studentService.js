import axios from "axios";

const API_URL = 'http://localhost:8080/api/v1/';

const studentService = {
    getAllStudents: () => axios.get(API_URL + 'students.json')
};

export default studentService;
