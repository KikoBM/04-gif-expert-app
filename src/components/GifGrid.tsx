
import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"


interface GifGridProps {
    category: string
}

export const GifGrid = ({ category }: GifGridProps) => {

    const { images, isLoading } = useFetchGifs(category)
    console.log(images, isLoading)


    return (
        <div className="category-container">
            <h3> {category} </h3>

            <div className="card-grid">
                {
                    images.map(img => (
                        <GifItem
                            key={img.id}
                            { ...img }
                        />
                    ))
                }
            </div>
        </div>
    )
}
