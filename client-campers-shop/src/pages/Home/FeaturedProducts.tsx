
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useGetProductsQuery } from '../../redux/baseApi';
import DefaultContainer from '../../components/DefaultContainer';
import { TProduct } from '../../interfaces';



const FeaturedProducts = () => {

  const {data} = useGetProductsQuery(undefined);

  console.log(data?.data);

  const settings = {
    dots: true,
    infinite: true,
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
    <section className="py-12 bg-gray-200">
    <DefaultContainer>
    <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Best Selling / Recommended Products</h2>
        <Slider {...settings}>
          {data?.data?.map((product:TProduct) => (
            <div key={product._id} className="p-2">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
          

                    <img src={product?.images[0]} alt={product.name} className="w-full h-64 object-cover" />
                  
                
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-700 mb-2">{product.description}</p>
                  <p className="text-gray-800 font-bold mb-2">{product.price}</p>
                  <Link to={`/product/${product._id}`} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 inline-block">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="text-center mt-8">
          <Link to="/product" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 inline-block">View More</Link>
        </div>
      </div>
    </DefaultContainer>
    </section>
  );
};

export default FeaturedProducts;
