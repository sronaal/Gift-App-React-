const getGifts = async  (category) => {

    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      let respuesta = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=FZYhoelBMUN8w9eusq3sD6RFqhGj3igt&q=${category}&limit=2`, requestOptions)
      const {data } = await respuesta.json()
      

      const gifs = data.map( img => ({

        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
      }))

      
      console.log(gifs)
      return gifs
}    


export default getGifts