/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import getGifts from "../helpers/GetGitfs"


export const GifGrid = ({ category, key }) => {

    const [images, setImages] = useState([])


    const getImages = async () => {

        const newImages = await getGifts(category)
        setImages(newImages)
    }

    useEffect(() => {

        getImages()
    }, [])





    return (

        <>
            <h3>{category}</h3>
            <ol>
                {
                    images.map(({id,title,url}) => (

                    
                        <li key={ id }>{ title }</li>
                        

                    ))
                }
            </ol>
        </>
    )
}