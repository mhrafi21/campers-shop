import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Premium Camping Tent',
    price: '$249.99',
    image: '/images/tent.jpg',
    description: 'High-quality tent for all weather conditions.',
  },
  {
    id: 2,
    name: 'Insulated Sleeping Bag',
    price: '$129.99',
    image: '/images/sleeping-bag.jpg',
    description: 'Keep warm and comfortable during cold nights.',
  },
  {
    id: 3,
    name: 'Portable Camping Stove',
    price: '$79.99',
    image: '/images/stove.jpg',
    description: 'Compact stove for cooking outdoors.',
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-12 bg-gray-200">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-2">{product.description}</p>
                <p className="text-gray-800 font-bold mb-2">{product.price}</p>
                <Link to={`/product/${product.id}`} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 inline-block">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
