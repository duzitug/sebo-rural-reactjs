function Botao({dado, setDado, texto}) {

    const gerenciarOClique = () => {

        setDado(dado.filter( el => el.status));

    }

    return (
        <button onClick={gerenciarOClique}> { texto } </button>
    );
}


export default Botao;