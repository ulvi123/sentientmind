/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';
import numbers from "../../public/numbers.jpg"
import ellipse from "../../public/explosion.jpg"
import walls from "../../public/walls.jpg"
import corp from "../../public/corp.jpg"

import { Link } from 'react-router-dom';


// Vertical Feature Section Component
const FeatureSection = ({ image, title, description }) => (
  <div className="flex flex-col items-center text-center mb-16">
    <div className="mb-6">
      <h3 className="text-3xl font-semibold mb-4">{title}</h3>
      <p className="text-lg text-gray-300">{description}</p>
    </div>
    <img src={image} alt={title} className="w-full max-w-2xl h-auto rounded-lg shadow-lg" />
  </div>
);

// Main Products Component
const Products = () => (
  <div className="bg-black text-white min-h-screen">
    {/* Hero Section */}
    <section className="w-full py-20 px-6 text-center bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb-4"
        >
          Advancing AI with Cutting-Edge Research
        </motion.h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          At SentientMind AI Research Lab, we are pioneering the future of artificial intelligence with our flagship model, Sentient v1, designed to solve complex problems across industries.
        </p>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <button className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">
            <Link to="/research">Explore Our Research</Link>
          </button>
          <button className="text-white font-semibold py-2 px-6 border border-white rounded-full hover:bg-white hover:text-black transition duration-300">
            <Link to="/contact">Contact Us</Link>
          </button>
        </motion.div>
      </div>
    </section>

    {/* Vertical Stacked Feature Sections */}
    <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
      <FeatureSection
        image={ellipse}
        title="Introducing Sentient v1: Our Flagship AI Model"
        description="Sentient v1 is a groundbreaking AI model capable of advanced language understanding, complex problem-solving, and real-time data processing. It's built to empower researchers and developers to explore new frontiers in AI."
      />
      <FeatureSection
        image={numbers}
        title="Voxpal-The LLM language speaking model powered by Sentient v1"
        description="Our research lab is at the forefront of AI innovation, focusing on the development of scalable AI models, ethical AI practices, and breakthrough technologies that push the boundaries of what AI can achieve."
      />
      <FeatureSection
        image={walls}
        title="Pagernode - Sentient v1 powered solution for Product teams to streamline their workflows within their organizations"
        description="From healthcare to finance, our custom AI solutions are tailored to solve specific challenges in various industries, leveraging the power of Sentient v1 to deliver unparalleled results."
      />
      <FeatureSection
        image={corp}
        title="CodeWhisperer"
        description="CodeWhisperer is a cutting-edge coding solution designed to help individuals learn programming through the power of Large Language Models (LLMs)"
      />
    </section>
  </div>
);

export default Products;
