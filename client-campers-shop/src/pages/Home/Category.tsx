import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../assets/images/hero.jpg"
interface Category {
  id: number;
  name: string;
  icon: string;
  link: string;
}

const categories: Category[] = [
  { id: 1, name: 'Tents', icon: img, link: '/category/tents' },
  { id: 2, name: 'Backpacks', icon: '/icons/backpack-icon.svg', link: '/category/backpacks' },
  { id: 3, name: 'Cookware', icon: '/icons/cookware-icon.svg', link: '/category/cookware' },
  { id: 4, name: 'Sleeping Bags', icon: '/icons/sleeping-bag-icon.svg', link: '/category/sleeping-bags' },
  { id: 5, name: 'Outdoor Clothing', icon: '/icons/clothing-icon.svg', link: '/category/outdoor-clothing' },
];

const Category: React.FC = () => {
  return (
    <section className="py-12 bg-gray-200">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map(category => (
            <Link key={category.id} to={category.link} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="p-4 flex items-center justify-center">
                <img src={category.icon} alt={category.name} className="w-12 h-12 group-hover:scale-125 transition-transform duration-300" />
              </div>
              <div className="py-2 text-center">
                <h3 className="text-lg font-bold mb-2">{category.name}</h3>
                <p className="text-gray-700">Explore {category.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
