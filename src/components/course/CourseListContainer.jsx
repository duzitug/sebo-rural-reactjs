import React, { useEffect, useState } from "react";
import courseService from "../../services/courseService";
import MediaCardListGrid from "../common/MediaCardListGrid";
import MiniDrawer from "../common/MiniDrawer";

//TODO guardar o token no localStorage

function CourseListContainer() {
  const [courses, setCourses] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(function () {
    courseService.login().then((response) => setToken(response.data.token));
  }, []);

  useEffect(
    function () {
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
