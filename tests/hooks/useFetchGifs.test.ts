import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"



describe('Pruebas en useFetchGifs', () => {
    test('Debe devolver el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'))
        const { images, isLoading } = result.current

        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
    })

    test('Debe devolver un array de img e isLoading en false', async() => {
        const { result } = renderHook(() => useFetchGifs('One Punch'))
        

        await waitFor(
            ()=> expect(result.current.images.length).toBeGreaterThan(0) //de esta forma tenemos una manera de saber cuando el estado del hook ha cambiado
        ) 

        const { images, isLoading } = result.current

        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
    })

})
