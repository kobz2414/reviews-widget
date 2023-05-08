import ProductImage from "./product/ProductImage";
import ProductDescription from "./product/ProductDescription";
import ProductName from "./product/ProductName";
import ProductPrice from "./product/ProductPrice";
import ProductRating from "./product/ProductRating";
import ProductSpecification from "./product/ProductSpecification"
import ProductReviewList from "./product/ProductReviewList"
import AddProductReview from "./product/AddProductReview"
import { useEffect, useState } from "react";
import { getRating } from "../api/review";
import { getReviews } from "../api/product";

const Product = () => {
    const [productRating, setProductRating] = useState([])
    const [productReviews, setProductReviews] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    // const [refresh, setRefresh] = useState(false)

    useEffect(() => {
      fetchData();
    }, [])
  
    const fetchData = async () =>{
        //Set productID 123123 since data is fixed
      try{
          const rating = await getRating(123123)
          const reviews = await getReviews(123123)
          setProductRating(rating.data)
          setProductReviews(reviews.data)
      }catch(error){
          console.log(error.message)
      }
    }

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    // const isRefreshData = () => {
    //     setRefresh(!refresh);
    // }

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="my-10 px-2 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row">
            {/* Left colum*/}
            <div className="flex-shrink-0 sm:w-1/2 items-center flex justify-center">
              <ProductImage />
            </div>

            {/* Right column*/}
            <div className="flex flex-col sm:w-1/2 sm:ml-6 m-2 justify-center">
              <div className="my-4">
                <ProductName />
                <ProductRating rating = {productRating?.ratings} refresh = {fetchData}/>
              </div>
              <ProductPrice />
              <ProductDescription />
              <div className="flex justify-start my-5">
                <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 w-36 h-10 rounded-full">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-5xl font-bold mb-2 mx-5">Specifications</h2>
        <ProductSpecification />

        <div className="my-10">
            <span className="flex flex-col sm:flex-row sm:items-center mx-5">
                <h2 className="text-5xl font-bold mb-2">Reviews</h2>
                <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 w-36 h-10 rounded-full sm:mx-5" onClick={() => handleOpenModal()}>
                    Add review
                </button>
                {isModalOpen && <AddProductReview onClose = { handleCloseModal } refresh = { fetchData }/>}
            </span>
            <div className="flex justify-center items-center m-auto p-5">
                <div className="w-full">
                    {/* Left Col*/}
                    <ProductReviewList reviews = { productReviews } refresh = { fetchData }/>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Product
