import React, { useEffect, useState } from "react";
import courseService from "../../services/courseService";
import userService from "../../services/userService";
import usePostResource from "../../utils/usePostResource";
import MediaCardListGrid from "../common/MediaCardListGrid";
import MiniDrawer from "../common/MiniDrawer";

//TODO guardar o token no localStorage

function CourseListContainer() {
  const [courses, setCourses] = useState([]);
  const [token, setToken] = useState(null);

  // useEffect(function getToken() {
  //   userService.login().then((response) => setToken(response.data.token));
  // }, []);

  setToken(
    usePostResource(
      "https://sebo-rural-rest-api-cakephp.herokuapp.com/api/v1/users/login.json",
      { email: "merciofilho@gmail.com", password: "123" }
    )
  );

  useEffect(
    function getAllCourses() {
      if (token)
        courseService.getAllCourses(token).then((res) => setCourses(res.data));
    },
    [token]
  );

  return (
    <>
      <MiniDrawer>
        <MediaCardListGrid elements={courses} />
      </MiniDrawer>
    </>
  );
}

export default CourseListContainer;
