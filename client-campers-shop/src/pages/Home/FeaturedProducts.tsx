import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetProductsQuery } from "../../redux/baseApi";
import DefaultContainer from "../../components/DefaultContainer";
import { TProduct } from "../../interfaces";
import ProductsList from "../../components/ProductsList";

const FeaturedProducts = () => {
  const { data } = useGetProductsQuery(undefined);
  
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4.01,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12">
      <DefaultContainer>
        <div className="">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Products
          </h2>
          <Slider {...settings}>
            {data?.data?.products?.map((product: TProduct) => (
              <div className="pr-2">
                <ProductsList
                  key={Math.random()}
                  product={product}
                ></ProductsList>
              </div>
            ))}
          </Slider>
          <div className="text-center mt-8">
            <Link
              to="/product"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 inline-block"
            >
              View More
            </Link>
          </div>
        </div>
      </DefaultContainer>
    </section>
  );
};

export default FeaturedProducts;
