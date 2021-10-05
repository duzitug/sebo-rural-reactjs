import axios from "axios";
import { useEffect, useState } from "react";

const useResource = function (resourceUrl) {
  const [resource, setResource] = useState([]);

  useEffect(
    function () {
      axios.get(resourceUrl).then(function (response) {
        setResource(response.data);
      });
    },
    [resourceUrl]
  );

  return resource;
};

export default useResource;
