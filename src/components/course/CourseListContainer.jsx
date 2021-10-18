import React, { useEffect, useState } from "react";
import courseService from "../../services/courseService";
import MediaCardListGrid from "../common/MediaCardListGrid";
import MiniDrawer from "../common/MiniDrawer";

function CourseListContainer() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
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
