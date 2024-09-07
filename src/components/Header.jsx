import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-secondary shadow-md">
      <nav className="container mx-auto px-4 py-5 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">AIEnterprise</Link>
        <div className="hidden md:flex space-x-8">
          <Link to="/research" className="text-primary hover:underline">Research</Link>
          <Link to="/products" className="text-primary hover:underline">Products</Link>
          <Link to="/company" className="text-primary hover:underline">Company</Link>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-secondary py-2"
        >
          <Link to="/research" className="block px-4 py-2 text-primary hover:bg-gray-100">Research</Link>
          <Link to="/products" className="block px-4 py-2 text-primary hover:bg-gray-100">Products</Link>
          <Link to="/company" className="block px-4 py-2 text-primary hover:bg-gray-100">Company</Link>
        </motion.div>
      )}
    </header>
  );
};

export default Header;