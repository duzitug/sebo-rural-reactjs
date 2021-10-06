import axios from "axios";
import { useEffect, useState } from "react";

function useGetResource(resourceUrl) {
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
}

export default useGetResource;
