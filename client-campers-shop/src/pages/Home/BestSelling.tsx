import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useGetProductsQuery } from '../../redux/baseApi';
import DefaultContainer from '../../components/DefaultContainer';
import { TProduct } from '../../interfaces';
import Title from '../../components/Title';

const BestSelling = () => {
  const { data } = useGetProductsQuery(undefined);

  console.log(data?.data);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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
        <div className="text-center mb-8">
            <Title>Best Selling Products</Title>
        </div>
        <Slider {...settings} >
          {data?.data?.slice(0, 20).map((product: TProduct) => (
            <div key={product._id} className='px-2
            '>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <img
                  src={product?.images[0]}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-700 mb-2">{product.description}</p>
                  <p className="text-gray-800 font-bold mb-2">{product.price}</p>
                  <Link
                    to={`/product/${product._id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 inline-block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
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
      </DefaultContainer>
    </section>
  );
};

export default BestSelling;
