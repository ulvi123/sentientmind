/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ellipse from "../../public/explosion.jpg";
import corp from "../../public/corp.jpg";

// Product Card Component
const ProductCard = ({ image, title, description, features, linkTo }) => (
  <motion.div 
    className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl shadow-2xl mb-8"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/2">
        <img src={image} alt={title} className="rounded-xl w-full h-[400px] object-cover" />
      </div>
      <div className="lg:w-1/2 space-y-6">
        <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{title}</h3>
        <p className="text-lg text-gray-300">{description}</p>
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-white">Key Features:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <span className="mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <Link 
          to={linkTo}
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
        >
          Learn More
        </Link>
      </div>
    </div>
  </motion.div>
);

// Main Products Component
const Products = () => (
  <div className="bg-black text-white min-h-screen">
    {/* Hero Section */}
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full py-32 px-6 text-center bg-gradient-to-b from-blue-900/20 to-black"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Future-Ready AI Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Discover our suite of advanced AI products designed to transform industries and push the boundaries of what's possible with artificial intelligence.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Link to="/demo" className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
            Request Demo
          </Link>
          <Link to="/pricing" className="bg-transparent text-white font-semibold py-3 px-8 border-2 border-white rounded-full hover:bg-white hover:text-black transition duration-300">
            View Pricing
          </Link>
        </motion.div>
      </div>
    </motion.section>

    {/* Products Section */}
    <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
      <ProductCard
        image={ellipse}
        title="sentient v1"
        description="Our flagship AI model pushing the boundaries of artificial intelligence with unprecedented capabilities in natural language processing and problem-solving."
        features={[
          "Advanced language understanding and generation",
          "Real-time data processing and analysis",
          "Multi-modal learning capabilities",
          "Enterprise-grade security and scalability",
          "Customizable for specific industry needs"
        ]}
        linkTo="/products/aimodel"
      />
      
      <ProductCard
        image={corp}
        title="Valkyrie"
        description="An intelligent coding companion that revolutionizes the way developers learn and write code, powered by state-of-the-art Large Language Models."
        features={[
          "Real-time code suggestions and completion",
          "Multi-language support",
          "Advanced error detection and debugging",
          "Interactive learning environment",
          "Integration with popular IDEs"
        ]}
        linkTo="/products/codewhisperer"
      />
    </section>

    {/* Call to Action Section */}
    <section className="py-20 px-6 bg-gradient-to-t from-blue-900/20 to-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Join leading organizations already leveraging our AI solutions to drive innovation and growth.
        </p>
        <Link 
          to="/contact"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-10 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
        >
          Schedule a Consultation
        </Link>
      </div>
    </section>
  </div>
);

export default Products;