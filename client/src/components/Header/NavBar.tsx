import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaBars, FaTimes } from 'react-icons/fa';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">Brand</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About Us</Link>
          <Link to="/product" className="hover:text-gray-400">Products Page</Link>
          <Link to="/product-management" className="hover:text-gray-400">Product Management</Link>
          <Link to="/wishlist" className="hover:text-gray-400">Wishlist</Link>
          <Link to="/cart" className="hover:text-gray-400 flex items-center">
            <FaShoppingCart className="mr-1" />
            Cart
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link to="/" className="block hover:text-gray-400">Home</Link>
          <Link to="/about-us" className="block hover:text-gray-400">About Us</Link>
          <Link to="/product" className="block hover:text-gray-400">Products Page</Link>
          <Link to="/product-management" className="block hover:text-gray-400">Product Management</Link>
          <Link to="/wishlist" className="block hover:text-gray-400">Wishlist</Link>
          <Link to="/cart" className=" hover:text-gray-400 flex items-center">
            <FaShoppingCart className="mr-1" />
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
