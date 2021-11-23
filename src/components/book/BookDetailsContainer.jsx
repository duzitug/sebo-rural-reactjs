import React from "react";
import bookService from "../../services/bookService";
import courseService from "../../services/courseService";
import MiniDrawer from "../common/MiniDrawer";
import MediaCardBookDetails from "./BookDetailsMediaCard";
import generateLinkForThumbnail from "../../utils/generateLinkForThumbnail";

// TODO add material-ui card for book data presentation
// TODO add imagem do livro
function BookDetailsContainer({ match }) {
  const [book, setBook] = React.useState({});
  const [token, setToken] = React.useState(null);

  React.useEffect(function getToken() {
    courseService.login().then((response) => setToken(response.data.token));
  }, []);

  React.useEffect(
    function getBookById() {
      if (token)
        bookService
          .getBookById(match.params.id, token)
          .then((response) => setBook(response.data));
    },
    [match.params.id, token]
  );

  return (
    <>
      <MiniDrawer>
        <h2>{book.id ? null : "Carregando..."}</h2>

        <p>{book.titulo}</p>
        <p>{book.descricao}</p>
        <p>{book.autor}</p>
        <p>{book.preco}</p>
        <p>{book.course && book.course.nome}</p>

        <MediaCardBookDetails
          titulo={book.titulo}
          autor={book.autor}
          descricao={book.descricao}
          preco={book.preco}
          curso={book.course ? book.course.nome : null}
          genero={book.genre ? book.genre.nome : null}
          urlFoto={book.urlFoto ? generateLinkForThumbnail(book.urlFoto) : null}
        />
      </MiniDrawer>
    </>
  );
}

export default BookDetailsContainer;
