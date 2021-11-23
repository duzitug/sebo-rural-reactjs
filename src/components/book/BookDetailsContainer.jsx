import React from "react";
import bookService from "../../services/bookService";
import MiniDrawer from "../common/MiniDrawer";
import MediaCardBookDetails from "./BookDetailsMediaCard";
import generateLinkForThumbnail from "../../utils/generateLinkForThumbnail";

// TODO add material-ui card for book data presentation
function BookDetailsContainer({ match }) {
  const [book, setBook] = React.useState({});

  React.useEffect(() => {
    bookService
      .getBookById(match.params.id)
      .then((response) => setBook(response.data));
  }, []);

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
