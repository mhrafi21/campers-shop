import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import heroImage from '../../assets/images/hero.jpg';

const HeroSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };

  const bgImages = [
    { backgroundImage: `url(${heroImage})`},
    { backgroundImage: `url(${heroImage})` },
    { backgroundImage: `url(${heroImage})` }
  ];

  return (
    <section className="relative">
      <Slider {...settings}>
        {bgImages.map((bgImage, index) => (
          <div key={index} className="relative h-[75vh] md:h-[85vh]" style={bgImage}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container mx-auto px-6 lg:px-8 h-full flex items-center justify-center">
              <div className="text-center text-white z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Campers Shop</h1>
                <p className="text-lg md:text-2xl mb-8">Your one-stop shop for all camping needs</p>
                <Link to="/product" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300">Shop Now</Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
