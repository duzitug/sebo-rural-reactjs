import MediaCardListGrid from "../common/MediaCardListGrid";
import MiniDrawer from "../common/MiniDrawer";
import useGetResource from "../../utils/useGetResource";
import usePostResource from "../../utils/usePostResource";
import axios from "axios";
import React from "react";
import bookService from "../../services/bookService";
import { userService } from "../../services/userService";

//TODO add custom hook for post?
function BookListContainer() {
  const [books, setBooks] = React.useState([]);
  const [token, setToken] = React.useState("");

  console.log("BookListContainer renderizado!");

  React.useEffect(function getAllBooks() {
    bookService.getAllBooks().then((res) => setBooks(res.data));
  }, []);

  React.useEffect(function userLogin() {
    userService.login().then((res) => setToken(res.data.token));
  }, []);

  /* React.useEffect(() => {
    axios
      .post(
        "https://sebo-rural-rest-api-cakephp.herokuapp.com/api/v1/users/login.json",
        { email: "merciofilho@gmail.com", password: "123" }
      )
      .then(function (resposta) {
        return console.log(resposta.data.token);
      });
  }, []); */

  return (
    <MiniDrawer>
      <MediaCardListGrid elements={books} />
    </MiniDrawer>
  );
}

export default BookListContainer;
