import "./App.css";
import React, { Fragment } from "react";
import Botao from "./components/Botao";
import ExibirArray from "./components/ExibirArray";
import RegisterForm from "./components/RegisterForm";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Fragment>
      <Container maxWidth="sm">
        <h1> Olá, mundo!</h1>
        <ExibirArray />
        <Botao texto={"Filtrar"} />
        <Botao texto={"Teste"} />
        <RegisterForm />
      </Container>
    </Fragment>
  );
}

export default App;
