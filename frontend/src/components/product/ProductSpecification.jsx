const ProductSpecification = () => {
    const product_specifications = [
      ];

    return ( <>
        <div className="flex justify-center items-center m-auto p-8 outline-dashed">
          <div className="grid grid-cols-2 gap-4 w-full outline-dashed">
            {product_specifications.map((spec, index) => (
              <div key={index} className="p-2">
                <span className="text-base font-bold mb-2">{spec.title} </span>
                <span className="">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
    </> );
}
 
export default ProductSpecification;