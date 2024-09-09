import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle blur state
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <header className="bg-black shadow-md relative z-50">
        <nav className="container mx-auto px-4 py-5 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white">SentientMind</Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 relative">
            <Link to="/research" className="text-gray-300 hover:text-white transition duration-200">Research</Link>
            <Link to="/products" className="text-gray-300 hover:text-white transition duration-200">Products</Link>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/company" className="text-gray-300 hover:text-white transition duration-200">Company</Link>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-48 bg-black shadow-lg rounded-lg z-50"
                  >
                    <Link to="/company/news" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200">News</Link>
                    <Link to="/company/careers" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200">Careers</Link>
                    <Link to="/company/security" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200">Security & Privacy</Link>
                    <Link to="/company/about" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200">About Us</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-black py-2 z-50"
            >
              <Link to="/research" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200">Research</Link>
              <Link to="/products" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200">Products</Link>
              <div className="relative group">
                <button className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>Company</button>
                {isDropdownOpen && (
                  <div className="bg-black shadow-lg rounded-lg mt-2">
                    <Link to="/company/news" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200">News</Link>
                    <Link to="/company/careers" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200">Careers</Link>
                    <Link to="/company/security" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200">Security & Privacy</Link>
                    <Link to="/company/about" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200">About Us</Link>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content with Blur Effect */}
      <div className={`transition-all duration-300 ${isDropdownOpen ? 'blur-sm' : ''}`}>
        {/* Your main content goes here */}
      </div>
    </>
  );
};

export default Header;
