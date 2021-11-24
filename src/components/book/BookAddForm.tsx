// TODO add formulário de adição de novo livro

// TODO listar cursos em select

// TODO pra que serve mesmo o id antigo? pra salvar as associaçõe antigas?

import React from "react";
import { ChangeEvent, FormEvent } from "react";

import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import bookService from "../../services/bookService";
import { userService } from "../../services/userService";
import { Book } from "../../models/Book";
import { InputLabel, MenuItem, Select } from "@material-ui/core";
import courseService from "../../services/courseService";
import { Course } from "../../models/Course";

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

  const [state, setState] = React.useState<Book>({
    titulo: "",
    autor: "",
    descricao: "",
    preco: 0,
    course_id: 0,
    url_foto: "",
    student_id: 57
  });

  const [courses, setCourses] = React.useState<Course[]>();
  const [token, setToken] = React.useState(null);

  // adicionar o token no cabeçalho da requisição dos cursos

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

  function handleSubmit(event: any) {
    event.preventDefault();
    bookService.addBook(state).then((response) => console.log(response));
  }

  function handleChange(event: any) {
    if (
      event.target.type === "text" ||
      event.target.type === "textarea" ||
      event.target.type === "number"
    ) {
      setState({ ...state, [event.target.name]: event.target.value });
    } else if (event.target?.type === "file") {
      setState({ ...state, [event.target.name]: event.target.files[0] });
    } else if (event.target.name === "course_id") {
      setState({ ...state, [event.target.name]: event.target.value });
    }
  }

  function handleFile(event: any) {
    debugger;
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", "skzrnf97");

    axios
      .post("https://api.cloudinary.com/v1_1/dxxxwkv7t/image/upload", formData)
      .then((result) => {
        console.log(result);
        setState({ ...state, url_foto: result.data.secure_url });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Container maxWidth="sm">
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
            onChange={handleChange}
          />
          <br />
          <TextField
            name="autor"
            type="text"
            label="autor"
            onChange={handleChange}
          />
          <br />
          <TextField
            name="descricao"
            label="descricao"
            multiline
            rows={4}
            onChange={handleChange}
          />
          <br />
          <TextField
            name="preco"
            type="number"
            label="preço"
            onChange={handleChange}
          />
          <br />
          <TextField
            name="course_id"
            type="text"
            label="curso"
            onChange={handleChange}
          />

          <InputLabel id="demo-simple-select-label">Curso</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            name="course_id"
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
            onChange={handleFile}
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
