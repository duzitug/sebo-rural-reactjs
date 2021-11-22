import React from "react";
import genreService from "../../services/genreService";
import userService from "../../services/userService";

function GenreAddForm() {
  const [state, setState] = React.useState({ nome: "" });
  const [token, setToken] = React.useState(null);

  React.useEffect(function getToken() {
    userService.login().then((response) => setToken(response.data.token));
  }, []);

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    genreService
      .addGenre(state, token)
      .then((response) => console.log(response));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="nome"
          type="text"
          placeholder="nome"
          onChange={handleChange}
        />

        <button type="submit"> Submeter </button>
      </form>
    </>
  );
}

export default GenreAddForm;
