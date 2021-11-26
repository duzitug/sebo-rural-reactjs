import React from "react";

export function NewBookAddForm() {
  const [book, setBook] = React.useState({
    titulo: "primeiro",
    autor: "autor teste"
  });

  function handleChange(event) {
    setBook({ ...book, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.info(book);
  }

  return (
    <>
      <h1>NewBookAddForm funciona!</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="titulo"
          placeholder="titulo"
          value={book.titulo}
          onChange={handleChange}
        />

        <input
          type="text"
          name="autor"
          placeholder="autor"
          value={book.autor}
          onChange={handleChange}
        />

        <input type="submit" value="Submeter" />
      </form>

      <h1>{book.titulo}</h1>
      <h1>{book.autor}</h1>
    </>
  );
}
