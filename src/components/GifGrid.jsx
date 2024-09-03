/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import GifItem from "./GifItem"
import useFetchGitf from "../hooks/useFetchGitf"


export const GifGrid = ({ category }) => {


    const { images, isLoading } = useFetchGitf(category);

    /**
     * 
     * const [images, setImages] = useState([])


    const getImages = async () => {

        const newImages = await getGifts(category)
        setImages(newImages)
    }

    useEffect(() => {

        getImages()
    }, [])

     */




    return (

        <>


            {
                isLoading && ( <h1>Cargando</h1> )
            }


            <h3>{category}</h3>

            <div className="card-grid">
                {
                    images.map((image) => (


                        <GifItem
                            key={image.id}
                            {...image}
                        />

                    ))
                }
            </div>
        </>
    )
}