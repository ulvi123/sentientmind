import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => (
  <footer className="bg-black text-white py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-4 text-2xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Featured</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/products/sentient-v1" className="hover:underline transition duration-300">Sentient V1</Link>
            </li>
            <li>
              <Link to="/products" className="hover:underline transition duration-300">API</Link>
            </li>
            <li>
              <Link to="/products" className="hover:underline transition duration-300">Enterprise</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-2xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/company" className="hover:underline transition duration-300">About</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:underline transition duration-300">Blog</Link>
            </li>
            <li>
              <Link to="company/careers" className="hover:underline transition duration-300">Careers</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-2xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/support" className="hover:underline transition duration-300">Help Center</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline transition duration-300">Contact Us</Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:underline transition duration-300">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-2xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <i className="fab fa-twitter fa-2x" />
              </motion.a>
            </li>
            <li>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <i className="fab fa-linkedin fa-2x" />
              </motion.a>
            </li>
            <li>
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <i className="fab fa-github fa-2x" />
              </motion.a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="bg-gray-800 py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Sentient Mind. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;