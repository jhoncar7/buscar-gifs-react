import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Vegueta']);

    const onAddCategory = (newCategory) => { // esto es un ejemplo de como funciona
        //setCategories(cat => [...cat, 'New Category Jhon'])
        //setCategories([...categories, 'New Category'])
        //console.log(newCategory);
        categories.includes(newCategory)
            ? alert('Ya existe la categoria')
            : setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                //setCategories={setCategories}
                onNewCategory={onAddCategory}
            />

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    )
}
