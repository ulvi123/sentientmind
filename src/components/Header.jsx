import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black shadow-md">
      <nav className="container mx-auto px-4 py-5 flex justify-between items-center">
        {/* Updated Logo with White Text */}
        <Link to="/" className="text-2xl font-bold text-white">SentientMind</Link>
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/research" className="text-gray-300 hover:text-white transition duration-200">Research</Link>
          <Link to="/products" className="text-gray-300 hover:text-white transition duration-200">Products</Link>
          <Link to="/company" className="text-gray-300 hover:text-white transition duration-200">Company</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black py-2"
        >
          <Link to="/research" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200">Research</Link>
          <Link to="/products" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200">Products</Link>
          <Link to="/company" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200">Company</Link>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
