const ProductSpecification = () => {
    const product_specifications = [
        { title: "Brand", value: "Apple" },
        { title: "Model Name", value: "Macbook Air" },
        { title: "Screen Size", value: "13.6 Inches" },
        { title: "Color", value: "Space Grey" },
        { title: "Hard Disk Size", value: "256 GB" },
        { title: "CPU Model", value: "M2" },
        { title: "RAM", value: "8 GB" },
        { title: "Operating System", value: "Mac OS" },
        { title: "Graphics Card", value: "Integrated" },
        { title: "Other", value: "Backlit Keyboard" },
      ];

    return ( <>
        <div className="flex justify-center items-center m-auto p-5 outline-dashed">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full outline-dashed">
            {product_specifications.map((spec, index) => (
              <div key={index}>
                <span className="text-base font-bold">{spec.title} </span>
                <span>{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
    </> );
}
 
export default ProductSpecification;