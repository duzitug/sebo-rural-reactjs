import React, { useEffect, useState } from "react";
import MediaCardListGrid from "../common/MediaCardListGrid";
import MiniDrawer from "../common/MiniDrawer";
import useResource from "../../utils/useResource";

import axios from "axios";

const BookListContainer = () => {
  const books = useResource(
    "https://sebo-rural-rest-api-cakephp.herokuapp.com/api/v1/books.json"
  );

  useEffect(() => {
    axios
      .post(
        "https://sebo-rural-rest-api-cakephp.herokuapp.com/api/v1/users/login.json",
        { email: "merciofilho@gmail.com", password: "123" }
      )
      .then(function (resposta) {
        return console.log(resposta.data.token);
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
