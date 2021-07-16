import React, { useState, useCallback } from "react"
import PropTypes from "prop-types"

const AddCategory = ({ setcategories }) => {
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value)
  }, [])

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      setcategories(inputValue)
      setInputValue("")
    },
    [inputValue, setcategories]
  )

  const shouldButtonBeDisabled = useCallback((text) => {
    return text === ""
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button disabled={shouldButtonBeDisabled(inputValue)} type="submit">
        Agregar
      </button>
    </form>
  )
}

AddCategory.propTypes = {
  setcategories: PropTypes.func.isRequired,
}

export default AddCategory
