import { render, screen, fireEvent } from '@testing-library/react';
import { debug } from 'console';
import BookAddForm from '../BookAddForm'


it.only('should display title form input', () => {

   const { getByPlaceholderText } = render( <BookAddForm/> );

    getByPlaceholderText('titulo'); 
    getByPlaceholderText('autor'); 
    getByPlaceholderText('descricao');
     
    
    
});