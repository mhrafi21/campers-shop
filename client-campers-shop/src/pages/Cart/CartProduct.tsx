import React, { useState } from "react";

import { TProduct } from "../../interfaces";
import {
  useDeleteCartMutation,
  useUpdateCartMutation,
} from "../../redux/baseApi";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const CartProduct: React.FC<{ cartItem: TProduct }> = ({ cartItem }) => {
  const [deleteProduct] = useDeleteCartMutation(undefined);
  const [updateQuantity, { isLoading }] = useUpdateCartMutation(undefined);

  const increaseQuantity = async (id: string) => {
   
    try {
      if (
        cartItem?.product.stockQuantity > 0 &&
        cartItem.quantity < cartItem.product.stockQuantity
      ) {
        const res = await updateQuantity({
          cartId: id,
          action: "increase",
          quantity: 1,
        });
       if(res?.error?.data?.success === false){
        toast.error("Not enough stock");
       };
      } else {
        toast.error("No more stock");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const decreaseQuantity = async (id: string) => {
    try {
      if (cartItem?.quantity > 1
        ) {
        const res = await updateQuantity({
          cartId: id,
          action: "decrease",
          quantity: 1,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   cart delete

  const handleDelete = async (id: String) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await deleteProduct(id).unwrap();
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
      }
    } catch (error) {
      Swal.fire(
        "Failed!",
        "There was a problem deleting your product.",
        "error"
      );
      console.error("Failed to delete product:", error);
    }
  };

 

  return (
    <div className="flex flex-col">
      <div className="border rounded-lg p-4 mb-4 flex flex-col md:flex-row">
        <img
          src={cartItem?.product?.images[0]}
          alt={cartItem?.product?.name}
          className="w-full md:w-32 h-32 object-cover mr-4 mb-4 md:mb-0"
        />
        <div className="flex-grow">
          <h2 className="text-xl font-bold">{cartItem?.product?.name}</h2>
          <p className="text-gray-600">{cartItem?.product?.description}</p>
          <p className="text-gray-800 font-semibold">
            <p className="text-gray-800 font-semibold">
              Stock:{" "}
              {cartItem?.product.stockQuantity > 0 ? (
                cartItem?.product.stockQuantity
              ) : (
                <span className="text-green-500">Out of stock</span>
              )}
            </p>
            Category: {cartItem?.product?.category}
          </p>
          <p className="text-gray-800 font-semibold">
            Price?: ${cartItem?.product?.price.toFixed(2)}
          </p>
          <p className="text-gray-800 font-semibold">
            Ratings: {cartItem?.product?.ratings} / 5
          </p>
          <div className="flex items-center mt-4">
            <button
              onClick={() => decreaseQuantity(cartItem._id)}
              className={`bg-gray-300 px-2 ${isLoading && "opacity-40"} py-1 rounded-l`}
            >
              -
            </button>
            <span className="px-4">{cartItem.quantity}</span>
            <button
              onClick={() => increaseQuantity(cartItem._id)}
              className={`bg-gray-300 px-2 ${isLoading && "opacity-40"} py-1 rounded-r`}
            >
              +
            </button>
          </div>
          <button
            onClick={() => handleDelete(cartItem._id)}
            className="bg-red-500 text-white px-4 py-2 mt-4 rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;