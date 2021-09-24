import React, { useEffect, useState } from "react";
import bookService from "../../services/bookService";
import studentService from "../../services/studentService";
import MediaCardListGrid from "../common/MediaCardListGrid";
import MiniDrawer from "../common/MiniDrawer";

import axios from "axios";

const BookListContainer = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .post(
        "http://sebo-rural-rest-api-cakephp.herokuapp.com/api/v1/users/login.json",
        { email: "merciofilho@gmail.com", password: "123" }
      )
      .then();
  }, []);

  useEffect(() => {
    bookService.getAllBooks().then((response) => {
      setBooks(response.data);
    });
  }, []);

  return (
    <>
      <MiniDrawer>
        <MediaCardListGrid elements={books} />
      </MiniDrawer>
    </>
  );
};

export default BookListContainer;
