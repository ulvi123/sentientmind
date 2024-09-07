/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const ResearchSection = ({ title, content }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-12"
  >
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <p className="text-lg">{content}</p>
  </motion.div>
);

const Research = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-5xl font-bold mb-12">Pioneering AI Research</h1>
    
    <ResearchSection 
      title="Sentient1: Pushing the Boundaries of Language Models"
      content="Our flagship research project, Sentient1, represents a leap forward in language model capabilities. By integrating advanced neural architectures with novel training paradigms, Sentient1 exhibits unprecedented language understanding and generation abilities."
    />
    
    <ResearchSection 
      title="Ethical AI Development"
      content="We're committed to developing AI responsibly. Our research includes robust frameworks for bias detection and mitigation, ensuring that our models, including Sentient1, are fair and equitable in their operations."
    />
    
    <ResearchSection 
      title="Multimodal Learning"
      content="Expanding beyond text, our research explores the integration of visual and auditory inputs with language models. This work aims to create more comprehensive AI systems capable of understanding and interacting with the world in ways similar to human cognition."
    />
    
    <ResearchSection 
      title="Efficient Training Techniques"
      content="Our researchers are pioneering new methods to train large language models more efficiently. These innovations allow us to develop powerful models like Sentient1 with reduced computational resources and environmental impact."
    />
    
    <div className="mt-16">
      <h2 className="text-3xl font-bold mb-6">Recent Publications</h2>
      <ul className="space-y-4">
        <li className="border-b pb-4">
          <h3 className="text-xl font-semibold">Sentient1: A New Paradigm in Language Understanding</h3>
          <p className="text-gray-600">Smith, J., et al. (2024). Proceedings of the International Conference on Machine Learning.</p>
        </li>
        <li className="border-b pb-4">
          <h3 className="text-xl font-semibold">Ethical Considerations in the Development of Advanced Language Models</h3>
          <p className="text-gray-600">Johnson, A., & Williams, B. (2023). AI Ethics Journal, 15(2), 112-128.</p>
        </li>
        <li>
          <h3 className="text-xl font-semibold">Efficient Training of Large Language Models: The Sentient1 Approach</h3>
          <p className="text-gray-600">Lee, C., et al. (2024). arXiv preprint arXiv:2404.12345.</p>
        </li>
      </ul>
    </div>
  </div>
);

export default Research;