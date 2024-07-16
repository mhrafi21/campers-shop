import React from "react";
import { TProduct } from "../interfaces"; 
import { Link } from "react-router-dom";

const ProductsList: React.FC<{ product: TProduct }> = ({ product }) => {
  return (
    <div className=" rounded overflow-hidden shadow-lg bg-white">
      {/* Product Image */}
      <img
        className="w-full h-64 object-cover object-center"
        src={product.images[0]}
        alt={product.name}
      />
      <div className="px-6 py-4">
        {/* Product Name */}
        <div className="font-bold text-xl mb-2 text-gray-800">
          {product.name}
        </div>
        {/* Product Category */}
        <p className="text-gray-600 text-base mb-2">{product.category}</p>

        {/* Product Price */}
        <p className="text-gray-700 text-lg mb-2">${product.price}</p>

        {/* Product Details Button */}
        <Link to={`/product/${product._id}`}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
            Product Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductsList;
