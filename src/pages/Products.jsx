/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';

const ProductCard = ({ title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="border border-gray-200 p-6 rounded-lg shadow-lg mb-8"
  >
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-lg">{description}</p>
  </motion.div>
);

const Products = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-5xl font-bold mb-12">Our AI Solutions</h1>
    
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Flagship Product: Sentient1</h2>
      <p className="text-xl mb-8">
        Sentient1 is our state-of-the-art language model, designed to revolutionize how businesses interact with AI. 
        With its advanced natural language processing capabilities, Sentient1 offers unparalleled performance in a wide range of applications.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <ProductCard 
          title="Sentient1 for Customer Service"
          description="Enhance your customer support with AI-powered chatbots and virtual assistants that understand and respond to customer queries with human-like precision."
        />
        <ProductCard 
          title="Sentient1 for Content Creation"
          description="Streamline your content production process with AI-assisted writing, from generating ideas to producing full articles tailored to your brand voice."
        />
        <ProductCard 
          title="Sentient1 for Data Analysis"
          description="Harness the power of natural language processing to extract insights from unstructured data, making your business intelligence more accessible and actionable."
        />
        <ProductCard 
          title="Sentient1 for Code Generation"
          description="Accelerate your software development cycle with AI-powered code suggestions and automated documentation generation."
        />
      </div>
    </div>
    
    <div>
      <h2 className="text-3xl font-bold mb-6">Enterprise Solutions</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Custom AI Integration</h3>
          <p className="text-lg">
            We work closely with your team to develop tailored AI solutions that integrate seamlessly with your existing systems and workflows. 
            Our experts will help you leverage the full potential of Sentient1 and our other AI technologies to drive innovation and efficiency in your organization.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">AI Consulting Services</h3>
          <p className="text-lg">
            Our team of AI specialists provides comprehensive consulting services to help you navigate the complex landscape of artificial intelligence. 
            From strategy development to implementation and beyond, we're here to ensure your AI initiatives deliver measurable business value.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Sentient1 API</h3>
          <p className="text-lg">
            Access the power of Sentient1 through our robust API, allowing you to integrate advanced language understanding and generation capabilities into your applications with ease. 
            Our flexible pricing plans cater to businesses of all sizes, from startups to large enterprises.
          </p>
        </div>
      </div>
    </div>
    
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="mt-16 text-center"
    >
      <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
      <button className="bg-primary text-secondary font-semibold py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300">
        Contact Sales
      </button>
    </motion.div>
  </div>
);

export default Products;