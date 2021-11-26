import React from "react";
import HomePage from "../components/pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GenreListContainer from "../components/genre/GenreListContainer";
import CourseListContainer from "../components/course/CourseListContainer";
import BookDetailsContainer from "../components/book/BookDetailsContainer";
import BookAddForm from "../components/book/BookAddForm";
import { NewBookAddForm } from "../components/book/NewBookAddForm";
import GenreAddForm from "../components/genre/GenreAddForm";

function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route path={"/books/:id"} component={BookDetailsContainer} />
          <Route path={"/genres"} component={GenreListContainer} />
          <Route path={"/courses"} component={CourseListContainer} />
          <Route path={"/addBook"} component={BookAddForm} />
          <Route path={"/newAddBook"} component={NewBookAddForm} />
          <Route path={"/addGenre"} component={GenreAddForm} />
          <Route path={"/"} component={HomePage} />
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
