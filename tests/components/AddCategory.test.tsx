import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory />', () => {
    test('Debe cambie el valor de la caja de texto', () => {
    
        render(<AddCategory onNewCategory={() => { }} />)

        const input = screen.getByRole('textbox') as HTMLInputElement
        
        fireEvent.input(input, { target: { value: 'Saitama' } })
        expect(input.value).toBe('Saitama')
    })

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = "Saitama"
        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory} />)

        const input = screen.getByRole('textbox') as HTMLInputElement
        const form = screen.getByRole('form') as HTMLFormElement

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)
        expect(input.value).toBe('')
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    })

    test('no debe de llamar al onNewCategory si el input está vacio', () => {
      const onNewCategory = jest.fn()

      render (<AddCategory onNewCategory={onNewCategory}/>)

      const form = screen.getByRole('form') as HTMLFormElement
      fireEvent.submit(form)

      expect(onNewCategory).toHaveBeenCalledTimes(0)
      expect(onNewCategory).not.toHaveBeenCalled()
    })
    


})
