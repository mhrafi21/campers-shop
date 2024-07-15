import React from "react";
import DefaultContainer from "../../components/DefaultContainer";
import { useGetAllCartsQuery } from "../../redux/baseApi";
import CartProduct from "./CartProduct";
import { TCartsProps } from "../../interfaces";
import { Link } from "react-router-dom";

const CartPage: React.FC = () => {
  const { data, isLoading } = useGetAllCartsQuery(undefined);

  const calculateTotalAmount = () => {
    return Number(
      data?.data
        .reduce(
          (total: number, item: TCartsProps) =>
            total + item?.product?.price * item.quantity,
          0
        )
        .toFixed(2)
    );
  };

  const totalAmount: number = calculateTotalAmount();

  return (
    <div>
      <DefaultContainer>
        {isLoading && <div>Loading...</div>}
        <h1 className="text-4xl font-bold py-5">Cart Page</h1>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:flex-[2]">
            {data?.data &&
              data?.data?.map((cartItem: TCartsProps) => (
                <CartProduct
                  key={cartItem._id}
                  cartItem={cartItem}
                ></CartProduct>
              ))}
          </div>
          <div className=" flex-1">
            <div className="border rounded-lg p-4">
              <div>
                <span className="text-lg font-semibold">Total Amount:</span>
                <span className="text-lg font-bold block mt-2">
                  ${totalAmount}
                </span>
              </div>
              <Link to={"/checkout"}>
                {" "}
                <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </DefaultContainer>
    </div>
  );
};

export default CartPage;
