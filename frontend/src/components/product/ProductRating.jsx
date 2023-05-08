/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"

const ProductRating = ({ rating = 0, refresh}) => {
  const [productRating, setProductRating] = useState(0)
  
  const max_stars = 5
  const filled_stars = Math.floor(rating)

  useEffect(() => {
    renderStars()
    setProductRating(rating)
  }, [refresh])

  const renderStars = () => {
    const stars = []

    for (let i = 0; i < filled_stars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400 text-2xl">
          &#9733;
        </span>
      );
    }

    const remaining_stars = max_stars - filled_stars

    for (let i = 0; i < remaining_stars; i++) {
      stars.push(
        <span key={filled_stars + i} className="text-gray-300 text-2xl">
          &#9734;
        </span>
      )
    }

    return stars
  };

  return (
    <div className="rating-stars flex items-center">
      {renderStars()}
      <span className="rating-value ml-2">{productRating}</span>
    </div>
  )
}

export default ProductRating
