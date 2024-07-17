import React, { useCallback, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TProduct } from "../../interfaces";
import {
  useCreateCartProductMutation,
  useGetAllCartsQuery,
} from "../../redux/baseApi";
import toast from "react-hot-toast";

const ProductDetail: React.FC<{ product: TProduct }> = ({ product }) => {
  const { data, isLoading } = useGetAllCartsQuery(undefined);
  console.log(data?.data);

  const cartProduct = data?.data.find((item: TProduct) => item);

  const [addToCart] = useCreateCartProductMutation(undefined);

  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
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

  const handleThumbnailClick = useCallback((index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  }, []);

  // add to cart

  const handleAddToCart = async (id: string) => {
    // TODO: Implement adding product to cart logic

    const res = await addToCart({ product: id, quantity: 1 }).unwrap();
    if (res?.success === true) {
      toast.success("Add to cart successfully added!");
    }
  };

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          <div className="flex mt-4 space-x-2 overflow-x-auto">
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
            <span className="text-gray-600 mr-2">Stock:</span>
            {product.stockQuantity > 0 ? (
              <span className="text-green-600">
                In Stock({product.stockQuantity})
              </span>
            ) : (
              <span className="text-red-700">Out Of Stock</span>
            )}
          </div>
          <div className="flex mb-4">
            <span className="text-gray-600 mr-2">Ratings:</span>
            {product.ratings + "/5"}
          </div>
          <p className="mb-4">Category: {product.category}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className=" mb-6">
            <span className="text-2xl font-semibold text-gray-900 mr-4">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <div className="">
            {(product && product?.stockQuantity === 0) ||
            product.stockQuantity === cartProduct?.quantity ? (
              <button className="bg-gray-500 cursor-not-allowed text-white px-4 py-2 rounded-md">
                Add To cart
              </button>
            ) : (
              <button
                onClick={() => handleAddToCart(product._id as string)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                {isLoading ? <div>Loading...</div> : "Add to Cart"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
