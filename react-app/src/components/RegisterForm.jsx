import { Fragment, useEffect, useState } from "react";

function RegisterForm() {
  const [formState, setFormState] = useState({
    nome: "",
    senha: "",
    cidade: "",
    descricao: "",
    valido: false
  });

  useEffect(() => {
    console.log("Componente Montado!");
  }, []);

  useEffect(() => {
    console.log("Nome Alterado!");
  }, [formState.nome]);

  function gerenciarMudanca(evento) {
    setFormState({ ...formState, [evento.target.name]: evento.target.value });
  }

  function gerenciarMudancaDoCheckBox(evento) {
    setFormState({
      ...formState,
      [evento.target.name]: evento.target.checked
    });
  }

  function gerenciarSubmicao(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <Fragment>
      <h4>nome: {formState.nome}</h4>
      <form onSubmit={gerenciarSubmicao}>
        <input
          value={formState.nome}
          onChange={gerenciarMudanca}
          name="nome"
          type="text"
          placeholder="nome"
        />
        <input
          value={formState.senha}
          onChange={gerenciarMudanca}
          name="senha"
          type="text"
          placeholder="senha"
        />
        <select
          name="cidade"
          id=""
          value={formState.cidade}
          onChange={gerenciarMudanca}
        >
          <option> cidade </option>
          <option value="recife">recife</option>
          <option value="olinda">olinda</option>
          <option value="paulista">paulista</option>
        </select>
        <textarea
          name="descricao"
          value={formState.descricao}
          onChange={gerenciarMudanca}
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <input
          type="checkbox"
          name="valido"
          value={formState.valido}
          onChange={gerenciarMudancaDoCheckBox}
        />
        <fieldset>
          <legend> Escolha abaixo:</legend>
          <label htmlFor="pao"> pao </label>
          <input
            id="pao"
            type="checkbox"
            name="valido"
            value={formState.valido}
            onChange={gerenciarMudancaDoCheckBox}
          />
          <label htmlFor="valido"> batata </label>
          <input
            id="valido"
            type="checkbox"
            name="valido"
            value={formState.valido}
            onChange={gerenciarMudancaDoCheckBox}
          />
        </fieldset>

        <button type="submit"> Submeter </button>
      </form>
    </Fragment>
  );
}

export default RegisterForm;
