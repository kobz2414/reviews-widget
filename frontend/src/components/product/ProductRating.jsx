/* eslint-disable react/prop-types */
const ProductRating = ({ rating }) => {
  const max_stars = 5
  const filled_stars = Math.floor(rating)

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
      <span className="rating-value ml-2">{rating}</span>
    </div>
  )
}

export default ProductRating
