import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
import DefaultContainer from '../DefaultContainer';
import { useGetAllCartsQuery } from '../../redux/baseApi';
import { TProduct } from '../../interfaces';

type TSum = {
  id: number,
  product: TProduct,
  quantity: number,
}


const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ ,setIsScrolled] = useState(false);
  const [navHeight, setNavHeight] = useState(80); // Default height
  const {data} = useGetAllCartsQuery(undefined);
 
  const sumQuantity = () => {
    return data?.data.reduce((total : number, item : TSum) => total + item.quantity,0)

  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 20) {
        setIsScrolled(true);
        setNavHeight(60); // Adjusted height when scrolled
      } else {
        setIsScrolled(false);
        setNavHeight(80); // Default height when not scrolled
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-gray-800 text-white py-4 px-0.5 md:p-4 h-${navHeight}`}>
        <DefaultContainer>
        <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">Campers shop</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about-us" className="hover:text-gray-400">About Us</Link>
          <Link to="/product" className="hover:text-gray-400">Products Page</Link>
          <Link to="/product-management" className="hover:text-gray-400">Product Management</Link>
         <div className='block relative'>
         <Link to="/cart" className="hover:text-gray-400">
            <FaShoppingCart className="mr-1 text-2xl" />
            <span  className=" absolute border text-gray-500 bg-white h-6 w-6 -top-3 -right-2 text-center  rounded-full">{sumQuantity()}</span>
          </Link>
         </div>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      <CSSTransition in={isOpen} timeout={300} classNames="menu" unmountOnExit>
        <div className="md:hidden mt-2 space-y-2">
          <Link to="/" className="block hover:text-gray-400">Home</Link>
          <Link to="/about-us" className="block hover:text-gray-400">About Us</Link>
          <Link to="/product" className="block hover:text-gray-400">Products Page</Link>
          <Link to="/product-management" className="block hover:text-gray-400">Product Management</Link>
      
          <Link to="/cart" className="hover:text-gray-400 flex items-center relative">
            <FaShoppingCart className="mr-1 text-2xl" />
            <span  className=" absolute border text-gray-500 bg-white h-6 w-6 -top-3 left-3 text-center  rounded-full">{sumQuantity()}</span>
          </Link>
        </div>
      </CSSTransition>
        </DefaultContainer>
    </nav>
  );
};

export default NavBar;
