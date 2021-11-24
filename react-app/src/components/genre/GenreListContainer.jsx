import React from "react";
import genreService from "../../services/genreService";
import MediaCardListGrid from "../common/MediaCardListGrid";
import MiniDrawer from "../common/MiniDrawer";

// TODO add local cache
function GenreListContainer() {
  const [genres, setGenres] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    genreService
      .getAllGenres()
      .then((response) => setGenres(response.data))
      .then(() => setLoading(false));
  }, []);

  return (
    <>
      <MiniDrawer>
        <MediaCardListGrid elements={genres} />
      </MiniDrawer>
    </>
  );
}

export default GenreListContainer;
