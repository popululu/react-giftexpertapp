import React, { useState } from 'react'
import propTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ( e ) =>  {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( inputValue.trim().length >2){
        // de esta forma no hace falta pasar el array de categorias
        // de otra forma en el setCategories recive un callback en el cual
        // el primer argumento cats es el valor del estado anterior 
        // y luego regresa el nuevo estado, un nuevo arreglo con todas las categorias + el nuevo estado inputValue
        setCategories( cats => [ inputValue, ...cats ]);
        // borra lo escrito en el input es como resetearlo para que no haya duplicados
        setInputValue('');
    }
  }

  return (
    <>
     <h1> { inputValue }</h1>
     <form onSubmit={ handleSubmit }>
        <input
            type="text"
            value={ inputValue }    
            onChange={ handleInputChange }
        />
     </form>
    </>
  )
}

AddCategory.propTypes ={
    setCategories: propTypes.func.isRequired
}