/* eslint-disable no-unused-vars */
import { useState } from "react"

import { AddCategory } from "./components/AddCaregoria"
import { GifGrid } from "./components/GifGrid"

export const GiftExpertApp = () => {


    const [categories, setCategories] = useState([])


    const onAddCategorie = (newCategory) => {

        if (categories.includes(newCategory.toLocaleUpperCase())) return;

        setCategories([newCategory.toLocaleUpperCase(), ...categories])
    }

    return (

        <>

            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}


            <AddCategory
                onNewCategory={onAddCategorie}

            />
            {/** Listatado de Gifs */}

            {
                categories.map(category =>
                (
                    <GifGrid
                        key={category}
                        category={category}
                    />

                )

                )
            }




            {/* Gif Item */}




        </>
    )
}