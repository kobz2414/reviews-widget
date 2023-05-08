/* eslint-disable react/prop-types */
import ProductReviewRating from "./ProductReviewRating";

const ProductReview = ({ review, onVote }) => {
    // Get the correct rating of review votes
    const votes = review.upvotes - review.downvotes

  const handleVote = (id, type) => {
    // Call the parent onVote function to handle the vote
    onVote(id, type);
  };

  return (
    <>
      <div className="border p-4 my-4 flex items-center">
        <div className="flex flex-col items-center">
          <button onClick={() => handleVote(review._id, "upvote")}>
            <img src="TriangleUp.png" alt="Up" className="h-4 flex-1 my-1" />
          </button>
          <span className="text-xl font-bold flex-1">{votes}</span>
          <button onClick={() => handleVote(review._id, "downvote")}>
            <img
              src="TriangleDown.png"
              alt="Down"
              className="h-4 flex-1 my-1"
            />
          </button>
        </div>
        <div className="ml-4">
          <div className="mb-3">
            <h2 className="text-lg font-bold">
              {review.title}
              <span className="text-sm text-gray-500 ml-2">
                <ProductReviewRating rating={review.rating} />
              </span>
            </h2>
          </div>
          <p className="text-gray-700 mb-4">{review.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductReview;
