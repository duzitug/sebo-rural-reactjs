import React from "react";
import courseService from "../../services/courseService";
import userService from "../../services/userService";
import MediaCardListGrid from "../common/MediaCardListGrid";
import MiniDrawer from "../common/MiniDrawer";

function CourseListContainer() {
  const [courses, setCourses] = React.useState([]);
  const [token, setToken] = React.useState(null);

  React.useEffect(function getToken() {
    userService.login().then((response) => setToken(response.data.token));
  }, []);

  React.useEffect(
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
