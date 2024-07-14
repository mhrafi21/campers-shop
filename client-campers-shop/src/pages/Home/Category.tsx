import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DefaultContainer from "../../components/DefaultContainer";

interface Category {
  id: number;
  name: string;
  icon: React.ReactNode;
  link: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Tents",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M12 2L2 22h20L12 2z" />
      </svg>
    ),
    link: "/category/tents",
  },
  {
    id: 2,
    name: "Backpacks",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M4 2h16v20H4V2zm8 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 12H8v2h8v-2zm0-4H8v2h8v-2z" />
      </svg>
    ),
    link: "/category/backpacks",
  },
  {
    id: 3,
    name: "Cookware",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M6 19c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-8H6v8zm14-12h-4l-4-4H8c-.55 0-1 .45-1 1v6h14V8c0-.55-.45-1-1-1zm-6 8h2v2h-2v-2z" />
      </svg>
    ),
    link: "/category/cookware",
  },
  {
    id: 4,
    name: "Sleeping Bags",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M7 2c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H7zm2 2h6v6H9V4zm0 8h6v8H9v-8z" />
      </svg>
    ),
    link: "/category/sleeping-bags",
  },
  {
    id: 5,
    name: "Outdoor Clothing",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M16.24 7l-1.88-4.29c-.17-.37-.51-.63-.91-.71C13.04 2 12.52 2.29 12.24 2.7L10 6.73V4h4v5h-1V7h-1v7.27c1.2-.57 2-1.83 2-3.27v-1c0-1.65 1.35-3 3-3s3 1.35 3 3v1c0 1.44-.8 2.7-2 3.27V20h2v-3c.56-.3 1-.88 1-1.57v-1.86c0-1.21-.39-2.31-1.07-3.21C19.21 8.16 18.08 7 16.24 7z" />
      </svg>
    ),
    link: "/category/outdoor-clothing",
  },
];

const Category: React.FC = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
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
      <div className=" mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Explore Categories
        </h2>
        <Slider {...settings}>
          {categories.map((category) => (
          <div className="">
              <Link
              key={category.id}
              to={category.link}
              className="group mx-4 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 p-4 flex flex-col items-center text-center"
            >
              <div className="mb-4 flex items-center justify-center mx-auto w-16 h-16">
                {category.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{category.name}</h3>
                <p className="text-gray-700">Explore {category.name}</p>
              </div>
            </Link>
          </div>
          ))}
        </Slider>
      </div>
      </DefaultContainer>
    </section>
  );
};

export default Category;
