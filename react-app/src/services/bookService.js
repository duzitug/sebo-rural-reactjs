import axios from "axios";

const API_URL = 'http://localhost:8080/api/v1/';
const RESPONSE_TYPE = '.json';

const bookService = { getAllBooks: () =>  axios.get(API_URL + 'books' + RESPONSE_TYPE),
                      getBookById: (id) => axios.get(API_URL + `books/${id}` + RESPONSE_TYPE ),
                      addBook: '',
                      updateBook: '',
                      deleteBook: ''
                    };

export default bookService;