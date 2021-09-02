import React, {useEffect, useState} from "react";
import bookService from "../../services/bookService";
import MiniDrawer from "../common/MiniDrawer";

function BookDetailsContainer() {

    const [book, setBook] = useState({});

    useEffect(() => {
        bookService.getBookById(1).then(response => setBook(response.data));
    }, []);


    return (
        <>
            <MiniDrawer>

                <h2>{book.id ? null : 'Carregando...'}</h2>


                <p>{book.titulo}</p>
                <p>{book.descricao}</p>
                <p>{book.autor}</p>
                <p>{book.preco}</p>
                <p>{book.curso}</p>

                <h1>BookDetails works!</h1>

            </MiniDrawer>

        </>
    );

}


export default BookDetailsContainer;