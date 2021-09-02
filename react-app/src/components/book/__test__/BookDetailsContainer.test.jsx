import { render, screen, fireEvent } from '@testing-library/react';
import React from "react";
import BookDetailsContainer from "../BookDetailsContainer";


it('should display book properties', () => {

    render( <BookDetailsContainer titulo='titulo' descricao='descricao'
                                  preco='preco' curso='curso' autor='autor' /> );

    screen.getByText('titulo');
    screen.getByText('descricao');
    screen.getByText('preco');
    screen.getByText('curso');

});