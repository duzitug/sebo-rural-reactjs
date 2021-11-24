import axios from "axios";
import React from "react";

function usePostResource(resourceUrl, body) {
  const [resource, setResource] = React.useState({});

  React.useEffect(function () {
    axios.post(resourceUrl, body).then(function (response) {
      setResource(response.data);
    });
  }, []);

  return resource;
}

export default usePostResource;
