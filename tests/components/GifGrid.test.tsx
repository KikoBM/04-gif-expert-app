import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')
const mockedUseFetchGifs = useFetchGifs as jest.Mock;


describe('Pruebas en <GifGrid/>', () => {

    const category = 'One Punch'

    test('Debe mostrar el loading constantemente ', () => {

        mockedUseFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />)
        screen.debug()
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
    })

    test('Debe de mostrar item cuando se cargan las imafes de useFetchGifs', () => {
        const gifsList = [
            {
                id: 'ABC',
                title: 'Saitma',
                url: 'localhost'
            }
        ]

        mockedUseFetchGifs.mockReturnValue({
            images: gifsList,
            isLoading: false
        })

        render(<GifGrid category={category} />)
        expect(screen.getAllByRole('img').length).toBe(1)
    })


})
