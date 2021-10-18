import React, { useEffect, useState } from "react";
import courseService from "../../services/courseService";
import MediaCardListGrid from "../common/MediaCardListGrid";
import MiniDrawer from "../common/MiniDrawer";

function CourseListContainer() {
  const [courses, setCourses] = useState([]);
  const [token, setToken] = useState();

  useEffect(function () {
    courseService.login().then((response) => console.log(response.data.token));
  }, []);

  useEffect(function () {
    courseService.getAllCourses().then((res) => setCourses(res.data));
  }, []);

  return (
    <>
      <MiniDrawer>
        <MediaCardListGrid elements={courses} />
      </MiniDrawer>
    </>
  );
}

export default CourseListContainer;
