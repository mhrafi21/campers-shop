import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../redux/baseApi";
import ProductDetail from "./ProductDetail";
import DefaultContainer from "../../components/DefaultContainer";
import { TProduct } from "../../interfaces";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetProductByIdQuery(id);

  return (
    <DefaultContainer>
      {isLoading && <div>Loading...</div>}
      <div>
        {data?.data &&
          data?.data?.map((product: TProduct) => (
            <ProductDetail key={product._id} product={product}/>
          ))}
      </div>
    </DefaultContainer>
  );
};

export default ProductDetailsPage;
