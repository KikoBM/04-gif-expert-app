import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

interface Gif {
    id: string,
    title: string,
    url: string
}

export const useFetchGifs = (category: string ) => {

    const [images, setImages] = useState<Gif[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages)
        setIsLoading(false)
    }

    useEffect(() => {
        getImages()
    }, []) // dependencias, si está vacio solo se lanza el efect al crearse el componente



    return{
        images,
        isLoading
    }
}

