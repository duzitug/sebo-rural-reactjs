import { useState } from "react";
import genreService from "../../services/genreService";

function GenreAddForm() {

    const [state, setState] = useState({ nome: ''});

    function handleChange (event) {
        setState( { ...state, [event.target.name]: event.target.value } );
    } 

    function handleSubmit(event) {
        event.preventDefault();
        genreService.addGenre(state).then(response => console.log(response));
    }


    return (

        <>
            <form onSubmit={handleSubmit}>

                <input name="nome" type="text" placeholder="nome" onChange={handleChange}/>

                <button type="submit"> Submeter </button>

            </form>

        </>
    );



}

export default GenreAddForm;