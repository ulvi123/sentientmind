/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import abstract from "../../public/abstract.jpg";

// Hero Section with Title and Description
const ResearchHero = () => (
  <section className="relative flex flex-col md:flex-row items-center justify-between py-16 lg:py-32 bg-black text-white">
    <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row md:items-center md:justify-between max-w-7xl">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 mb-8 md:mb-0"
      >
        <h1 className="text-5xl font-bold mb-4">Pioneering AI Research</h1>
        <p className="text-xl text-gray-400 max-w-md">
          Advancing the state-of-the-art in AI through innovative research and development.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 flex justify-center"
      >
        <img
          src={abstract}
          alt="AI Research"
          className="w-full max-w-lg rounded-md shadow-md hover:shadow-2xl transition-shadow duration-300 bg-gray-800"
        />
      </motion.div>
    </div>
  </section>
);

// Individual Research Card Component
const ResearchCard = ({ title, content }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
  >
    <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
    <p className="text-gray-400">{content}</p>
  </motion.div>
);

// Main Research Component
const Research = () => (
  <div className="bg-black text-white">
    {/* Hero Section */}
    <ResearchHero />

    {/* Research Topics Section */}
    <div className="py-16 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        <ResearchCard 
          title="Sentient1: Pushing the Boundaries of Language Models"
          content="Our flagship research project, Sentient1, represents a leap forward in language model capabilities. By integrating advanced neural architectures with novel training paradigms, Sentient1 exhibits unprecedented language understanding and generation abilities."
        />
        
        <ResearchCard 
          title="Ethical AI Development"
          content="We're committed to developing AI responsibly. Our research includes robust frameworks for bias detection and mitigation, ensuring that our models, including Sentient1, are fair and equitable in their operations."
        />
        
        <ResearchCard 
          title="Multimodal Learning"
          content="Expanding beyond text, our research explores the integration of visual and auditory inputs with language models. This work aims to create more comprehensive AI systems capable of understanding and interacting with the world in ways similar to human cognition."
        />
        
        <ResearchCard 
          title="Efficient Training Techniques"
          content="Our researchers are pioneering new methods to train large language models more efficiently. These innovations allow us to develop powerful models like Sentient1 with reduced computational resources and environmental impact."
        />
      </div>
    </div>

    {/* Publications Section */}
    <div className="py-16 px-6 lg:px-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-white">Recent Publications</h2>
      <ul className="space-y-8">
        <li>
          <h3 className="text-2xl font-semibold text-white mb-2">Sentient1: A New Paradigm in Language Understanding</h3>
          <p className="text-gray-400">Smith, J., et al. (2024). Proceedings of the International Conference on Machine Learning.</p>
        </li>
        <li>
          <h3 className="text-2xl font-semibold text-white mb-2">Ethical Considerations in the Development of Advanced Language Models</h3>
          <p className="text-gray-400">Johnson, A., & Williams, B. (2023). AI Ethics Journal, 15(2), 112-128.</p>
        </li>
        <li>
          <h3 className="text-2xl font-semibold text-white mb-2">Efficient Training of Large Language Models: The Sentient1 Approach</h3>
          <p className="text-gray-400">Lee, C., et al. (2024). arXiv preprint arXiv:2404.12345.</p>
        </li>
      </ul>
    </div>
  </div>
);

export default Research;
