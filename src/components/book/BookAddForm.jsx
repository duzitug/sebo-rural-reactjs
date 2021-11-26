// TODO add formulário de adição de novo livro

// TODO listar cursos em select

// TODO pra que serve mesmo o id antigo? pra salvar as associaçõe antigas?

import React from "react";
import axios from "axios";

import { InputLabel, MenuItem, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import bookService from "../../services/bookService";
import { userService } from "../../services/userService";
import courseService from "../../services/courseService";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

function BookAddForm() {
  const classes = useStyles();

  // adicionar estado para tratar do carregamento da foro
  // só submeter quanto o carregamento estiver completo

  const [courses, setCourses] = React.useState([]);
  const [token, setToken] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [book, setBook] = React.useState({
    titulo: "",
    autor: "",
    descricao: "",
    preco: 0,
    course_id: 0,
    url_foto: "",
    student_id: 57
  });

  React.useEffect(function getToken() {
    // por algum motivo maluco esta retornando http 401 não autorizado
    userService.login().then((response) => setToken(response.data.token));
  }, []);

  React.useEffect(
    function getAllCourses() {
      if (token)
        courseService.getAllCourses(token).then((res) => setCourses(res.data));
    },
    [token]
  );

  function handleChange(event) {
    setBook({ ...book, [event.target.name]: event.target.value });
  }

  function handleFileUpload(event) {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", "skzrnf97");

    axios
      .post("https://api.cloudinary.com/v1_1/dxxxwkv7t/image/upload", formData)
      .then((result) => {
        setBook({ ...book, url_foto: result.data.secure_url });
      })
      .then(() => setIsLoading(false))
      .catch((error) => {
        throw new Error(error.message);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    bookService.addBook(book, token).then((response) => console.log(response));
  }

  return (
    <>
      <Container maxWidth="sm">
        <h1>{isLoading && "carregando"}</h1>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            name="titulo"
            type="text"
            label="titulo"
            value={book.titulo}
            onChange={handleChange}
          />
          <br />
          <TextField
            name="autor"
            type="text"
            label="autor"
            value={book.autor}
            onChange={handleChange}
          />
          <br />
          <TextField
            name="descricao"
            label="descricao"
            multiline
            rows={4}
            value={book.descricao}
            onChange={handleChange}
          />
          <br />
          <InputLabel id="preco-label"> Preço </InputLabel>
          <TextField
            name="preco"
            type="number"
            value={book.preco}
            onChange={handleChange}
          />
          <br />

          <InputLabel id="curso-select">Curso</InputLabel>
          <Select
            labelId="curso-select"
            name="course_id"
            value={book.course_id}
            onChange={handleChange}
          >
            {courses?.map((course) => (
              <MenuItem value={course.id}> {course.nome} </MenuItem>
            ))}
          </Select>

          <br />
          <label htmlFor="choseFile"> Foto do livro </label>
          <input
            id="choseFile"
            type="file"
            name="imagem"
            onChange={handleFileUpload}
          />
          <br />
          <Button type="submit" variant="contained">
            Submeter
          </Button>
        </form>
      </Container>
    </>
  );
}

export default BookAddForm;
