import axios from "axios";
import React from "react";

function useGetResource(resourceUrl) {
  const [resource, setResource] = React.useState([]);

  React.useEffect(
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
