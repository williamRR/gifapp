import React from "react"
import GifItem from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

const GifGrid = ({ category }) => {
  const { data: gifs, loading } = useFetchGifs(category)

  return (
    <>
      <h3>Resultados para: "{category}"</h3>
      <hr />

      {loading && (
        <p className="animate__animated animate__pulse">"Cargando"</p>
      )}

      <div className="gif-container">
        {gifs.map((gif) => {
          return <GifItem key={gif.id} {...gif} />
        })}
      </div>
      <hr />
    </>
  )
}

export default GifGrid
