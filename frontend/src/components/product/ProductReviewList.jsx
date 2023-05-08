/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ProductReview from "./ProductReview"
import { getReviews } from "../../api/product";

function ProductReviewList(){
    const [response, setResponse] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () =>{
        try{
            const res = await getReviews()
            setResponse(res.data)
        }catch(error){
            console.log(error.message)
        }
    }

  const handleVote = (id, type) => {
    
  }

  return (
    <>
      <div>
        {response.map((review) => (
            <ProductReview key={review._id} review={review} onVote={handleVote}/>
        ))}
      </div>
    </>
  );
};

export default ProductReviewList;
