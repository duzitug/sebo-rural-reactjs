import axios from "axios";
import { useEffect, useState } from "react";

function usePostResource(resourceUrl, body) {
  const [resource, setResource] = useState({});

  useEffect(
    function () {
      axios.post(resourceUrl, body).then(function (response) {
        setResource(response.data);
      });
    },
    [resourceUrl, body]
  );

  return resource;
}

export default usePostResource;
