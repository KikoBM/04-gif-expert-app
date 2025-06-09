import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball'])

    const onAddCategory = (newCategory: string) => {

        if (categories.includes(newCategory)) return

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>Gif Finder App</h1>

            <AddCategory
                onNewCategory={(value: string) => onAddCategory(value)}
            />

            {
                categories.map(category => (
                    <GifGrid key={category} category={category} />

                ))
            }

        </>
    )
}

