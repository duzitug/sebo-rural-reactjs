import axios from "axios";
import { Book } from "../models/Book";

import API_URL from "../config/environment";

const RESPONSE_TYPE = ".json";

const bookService = {
  getAllBooks: () => axios.get(API_URL + "books" + RESPONSE_TYPE),
  getBookById: (id, token) =>
    axios.get(API_URL + `books/${id}` + RESPONSE_TYPE, {
      headers: { Authorization: `Bearer ${token}` }
    }),
  addBook: (book, token) =>
    axios.post(API_URL + "books" + RESPONSE_TYPE, book, {
      headers: { Authorization: `Bearer ${token}` }
    }),
  updateBook: "",
  deleteBook: ""
};

export default bookService;
