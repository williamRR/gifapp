import axios from "axios"

export const getGifs = (category) => {
  return axios
    .get(`${process.env.REACT_APP_SEARCH_URL}${category}`)
    .then((res) => {
      let {
        data: { data },
      } = res
      return parseData(data)
    })
    .catch((err) => {
      console.log(err)
    })
}

export const parseData = (array) => {
  let newArray = array.map(
    ({
      id,
      title,
      images: {
        fixed_width_downsampled: { url },
      },
    }) => {
      return {
        id: id,
        title: title,
        url: url,
      }
    }
  )

  return newArray
}
