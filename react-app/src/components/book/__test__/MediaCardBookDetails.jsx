import { render, screen, fireEvent } from '@testing-library/react';
import MediaCardBookDetails from "../BookDetailsMediaCard";


it('should display book properties', () => {

    render( <MediaCardBookDetails titulo='titulo' descricao='descricao'
                                  preco='preco' autor='autor' /> );

    screen.getByText('titulo');
    screen.getByText('descricao');
    screen.getByText('preco');
    screen.getByText('autor');

});

it('should display only courses name', () => {

        render( <MediaCardBookDetails titulo='titulo' descricao='descricao'
                                      preco='preco' autor='autor' curso={'nomeDoCurso'}  genero={null}/> );

        screen.getByText('titulo');
        screen.getByText('descricao');
        screen.getByText('preco');
        screen.getByText('autor');
        screen.getByText('nomeDoCurso');

});

it('should display only genre name', () => {

    render( <MediaCardBookDetails titulo='titulo' descricao='descricao'
                                  preco='preco' autor='autor' curso={null} genero={'nomeDoGenero'} /> );

    screen.getByText('titulo');
    screen.getByText('descricao');
    screen.getByText('preco');
    screen.getByText('autor');
    screen.getByText('nomeDoGenero');



});

it('should display all properties', () => {

    render( <MediaCardBookDetails titulo='titulo' descricao='descricao'
                                  preco='preco' autor='autor'  curso={'nomeDoCurso'} genero={'nomeDoGenero'} /> );

    screen.getByText('titulo');
    screen.getByText('descricao');
    screen.getByText('preco');
    screen.getByText('autor');
    screen.getByText('nomeDoCurso');
    screen.getByText('nomeDoGenero');

});