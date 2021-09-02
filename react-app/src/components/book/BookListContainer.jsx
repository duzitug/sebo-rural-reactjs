import React, {useEffect, useState} from 'react';
import bookService from "../../services/bookService";
import MediaCardListGrid from "../common/MediaCardListGrid";
import MiniDrawer from "../common/MiniDrawer";

const BookListContainer = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        bookService.getAllBooks().then(response => {
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
