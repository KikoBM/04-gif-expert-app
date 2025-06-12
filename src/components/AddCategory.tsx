import { useState } from "react"

type AddCategoryProps = {
  onNewCategory: (value:string) => void
}

export const AddCategory = ({ onNewCategory }: AddCategoryProps) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({ target }: any) => {
    setInputValue(target.value)
  }

  const onSubmit = (event: any) => {
    event.preventDefault()

    if (inputValue.trim().length <= 1) return

    onNewCategory(inputValue.trim())
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}

