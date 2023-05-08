import ProductImage from "./product/ProductImage";
import ProductDescription from "./product/ProductDescription";
import ProductName from "./product/ProductName";
import ProductPrice from "./product/ProductPrice";
import ProductRating from "./product/ProductRating";
import ProductSpecification from "./product/ProductSpecification"
import ProductReview from "./product/ProductReview"

const Product = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="my-10 px-2 sm:px-6 lg:px-8 outline-dashed">
          <div className="flex flex-col sm:flex-row">
            {/* Left colum*/}
            <div className="flex-shrink-0 sm:w-1/2 items-center outline-dashed flex justify-center">
              <ProductImage />
            </div>

            {/* Right column*/}
            <div className="flex flex-col sm:w-1/2 sm:ml-6 m-2 outline-dashed justify-center">
              <div className="my-4">
                <ProductName />
                <ProductRating />
              </div>
              <ProductPrice />
              <ProductDescription />
              <div className="flex justify-center my-5 outline-dashed">
                <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 w-36 h-10 rounded-full">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-5xl font-bold mb-2 mx-4">Specifications</h2>
        <ProductSpecification />

        <div className="my-10">
            <h2 className="text-5xl font-bold mb-2 mx-4">Reviews</h2>
            <ProductReview />
        </div>
      </div>
    </>
  );
};

export default Product
