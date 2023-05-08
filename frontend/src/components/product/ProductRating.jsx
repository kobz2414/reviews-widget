/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"

const ProductRating = ({ rating = 0, refresh}) => {
  const [productRating, setProductRating] = useState(0)
  const [stars, setStars] = useState([])
  
  const max_stars = 5
  const filled_stars = Math.floor(rating)

  useEffect(() => {
    renderStars()
    setProductRating(rating)
    refresh()
  }, [rating, refresh])

  const renderStars = () => {
    const stars_array = []

    for (let i = 0; i < filled_stars; i++) {
      stars_array.push(
        <span key={i} className="text-yellow-400 text-2xl">
          &#9733;
        </span>
      );
    }

    const remaining_stars = max_stars - filled_stars

    for (let i = 0; i < remaining_stars; i++) {
      stars_array.push(
        <span key={filled_stars + i} className="text-gray-300 text-2xl">
          &#9734;
        </span>
      )
    }

    setStars(stars_array)
  }

  return (
    <div className="rating-stars flex items-center">
      {stars}
      <span className="rating-value ml-2">{productRating}</span>
    </div>
  )
}

export default ProductRating
