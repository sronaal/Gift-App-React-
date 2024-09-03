/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChanged = ({ target }) => {


        setInputValue(target.value)

    }

    const onSubmit = (event) => {

        event.preventDefault() // Evita que el navegador se recargue

        if(inputValue.trim().length <= 1 ) return; // Evita que no añadan espacio en blanco en las categorias
        
        setInputValue('')  
        
       //setCategories((categories) => [inputValue, ...categories]) // envia una nueva categoria manteniendo las categorias anteriores
    
       onNewCategory( inputValue.trim())
    
    }


    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChanged}
            />
        </form>

    )
}