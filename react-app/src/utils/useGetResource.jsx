import axios from "axios";
import React from "react";

function useGetResource(resourceUrl) {
  const [resource, setResource] = React.useState([]);

  React.useEffect(
    function () {
      async function getResource() {
        let response = await axios.get(resourceUrl);
        setResource(response.data);
      }

      getResource();
    },
    [resourceUrl]
  );

  return resource;
}

export default useGetResource;
