import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault(); // no simula el refresh de la pagina
        //console.log(inputValue);
        //inputValue.trim().length < 2 ? alert('Ingrese un valor valida') : setCategories(cat => [...cat, inputValue])
        inputValue.trim().length < 2
            ? alert('Ingrese un valor valida')
            : onNewCategory(inputValue.trim())

        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
