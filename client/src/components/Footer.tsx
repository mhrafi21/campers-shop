import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0 md:w-1/4">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/product" className="hover:text-gray-400">
                Products Page
              </Link>
            </li>
            <li>
              <Link to="/product-management" className="hover:text-gray-400">
                Product Management
              </Link>
            </li>
            <li>
              <Link to="/wishlist" className="hover:text-gray-400">
                Wishlist
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-gray-400">
                Cart
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0 md:w-1/4">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>123 Camping St.</li>
            <li>Adventure City, CA 12345</li>
            <li>Email: info@campersshop.com</li>
            <li>Phone: (123) 456-7890</li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0 md:w-1/4">
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" className="hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" className="hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <div className="md:w-1/4">
          <h3 className="text-lg font-bold mb-4">Newsletter</h3>
          <p className="mb-4">
            Subscribe to our newsletter for the latest updates and offers.
          </p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              className="p-2 rounded-md bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Campers Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
