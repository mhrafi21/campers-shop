import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductDetail = ({ product }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const handleThumbnailClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <div className=" mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div>
          <Slider {...settings} ref={sliderRef}>
            {product.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={product.name}
                  className="rounded-lg shadow-md object-cover w-full"
                />
              </div>
            ))}
          </Slider>
          <div className="flex mt-4 space-x-2">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={product.name}
                className="rounded-lg shadow-md cursor-pointer w-20 h-20 object-cover border border-transparent hover:border-blue-500"
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
          <div className="flex mb-4">
            <span className="text-gray-600 mr-2">Ratings:</span>
            {product.ratings +  "/5"}
          </div>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="flex items-center mb-6">
            <span className="text-2xl font-semibold text-gray-900 mr-4">${product.price.toFixed(2)}</span>
            {product.stockQuantity > 0 ? (
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                Add to Cart
              </button>
            ) : (
              <span className="text-red-500 font-semibold">Out of Stock</span>
            )}
          </div>
          <p className="mb-4">Category: {product.category}</p>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
