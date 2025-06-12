import { render, screen } from '@testing-library/react'
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en GifItem.tsx', () => {

    const title = 'Saitama'
    const url = "https://one-punch.com/saitama.jpg"

    test('debe hacer match con el snapshot ', () => {
        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot()
    })

    test('debe mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={title}  url={url}/>)

        const {src, alt} = screen.getByRole('img') as HTMLImageElement
        expect(src).toBe(url)
        expect(alt).toBe(title)
    })
    


})
