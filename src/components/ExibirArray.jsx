import axios from "axios";
import { useEffect } from "react";
import {Fragment, useState} from "react";
import Botao from "./Botao";

function ExibirArray() {

    const dados = [
        { id: 1, nome: 'Mércio', status: false },
        { id: 2, nome: 'Mônica', status: true },
        { id: 3, nome: 'Ingrid', status: true },
        { id: 4, nome: 'Célia', status: true },
        { id: 5, nome: 'Neide', status: true },
    ];

    const [dado, setDado] = useState(dados);

    const [generos, setGeneros] = useState([]);
    
    
    useEffect( () => {  axios.get('http://localhost:8080/api/v1/genres.json').then(res => setGeneros(res.data) );  }, []


     );

     useEffect( () => {  axios.get('http://localhost:8080/api/v1/courses.json').then(res => console.log(res.data));  }, []


     );

     
        


     const gerenciarOClique = (parametro) => {
        console.log('botao clicado!');
         console.log(parametro)

        //setDado(dado.filter( el => el.status));
    }

    return (
        <Fragment>
            <ul>
                { dado.map( el => <li key={ el.id } > { el.nome } </li> ) }
            </ul>
            <p> {generos.map( g => g.nome )} </p>
            <Botao  onClick={gerenciarOClique} texto={'FILTRAR'} dado={dado} setDado={setDado}/>
            <button onClick={gerenciarOClique} > Agora sim </button>
        </Fragment>

    );

}

export default ExibirArray;
