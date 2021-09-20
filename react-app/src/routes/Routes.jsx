import React from "react";
import HomePage from "../components/pages/HomePage";
import {BrowserRouter as Router, Route} from "react-router-dom";
import GenreListContainer from "../components/genre/GenreListContainer";
import CourseListContainer from "../components/course/CourseListContainer";
import BookDetailsContainer from "../components/book/BookDetailsContainer";
import BookAddForm from "../components/book/BookAddForm";
import GenreAddForm from "../components/genre/GenreAddForm";


function Routes() {
    return(
        <>
            <Router>
                <Route path={'/'} component={HomePage} exact/>
                <Route path={'/courses'} component={CourseListContainer}/>
                <Route path={'/genres'} component={GenreListContainer}/>
                <Route path={'/addBook'} component={BookAddForm}/>
                <Route path={'/addGenre'} component={GenreAddForm}/>
                <Route path={'/books/:id'} component={BookDetailsContainer}/>
            </Router>

        </>
    );
}

export default Routes;