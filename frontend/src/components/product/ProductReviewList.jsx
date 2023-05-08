/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import ProductReview from "./ProductReview"
import { upvoteReview, downvoteReview } from "../../api/product";

function ProductReviewList({ reviews, refresh }){
    const [response, setResponse] = useState([])

    useEffect(() => {
        fetchData();
    }, [reviews])

    const fetchData = async () =>{
      setResponse(reviews)
    }

  const handleVote = async (id, type) => {
    if(type === 'upvote'){
        await upvoteReview(id)
        refresh()
    }

    if(type === 'downvote'){
        await downvoteReview(id)
        refresh()
    }
  }

  return (
    <>
      <div>
        {response.map((review) => (
            <ProductReview key={review._id} review={review} onVote={handleVote}/>
        ))}
      </div>
    </>
  )
}

export default ProductReviewList;
