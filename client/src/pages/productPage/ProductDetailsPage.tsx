import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../redux/baseApi";
import ProductDetail from "./ProductDetail";
import DefaultContainer from "../../components/DefaultContainer";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductByIdQuery(id);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <DefaultContainer>
      <div>
        {data?.data &&
          data?.data?.map((product) => (
            <ProductDetail key={product._id} product={product} />
          ))}
      </div>
    </DefaultContainer>
  );
};

export default ProductDetailsPage;
