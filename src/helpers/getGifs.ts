export const getGifs = async(category: string) => {

    const url =`https://api.giphy.com/v1/gifs/search?api_key=9AdCGfsTeC42bj8YftAZDOQiBHco83AR&q=${category}&limit=5`
    const resp = await fetch(url)
    const { data } = await resp.json()

    console.log(data)

    const gifs = data.map( (img: { id: any; title: string; images: { downsized_medium: { url: string; }; }; }) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs
}