import React, { useCallback, useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"

export const GifExpertApp = () => {
  const [categories, setcategories] = useState([])

  const handleAddCategorie = useCallback(
    (newCat) => {
      setcategories([newCat, ...categories])
    },
    [categories]
  )

  return (
    <>
      <h1>GifExpertApp</h1>
      <hr />
      <AddCategory setcategories={handleAddCategorie} />
      <ul>
        {categories.map((cat, index) => {
          return <GifGrid key={cat} category={cat} />
        })}
      </ul>
    </>
  )
}
