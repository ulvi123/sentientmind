/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, AlertCircle,  } from 'lucide-react';

const Card = ({ children, className, onMouseEnter, onMouseLeave }) => (
  <div 
    className={`bg-white rounded-lg shadow-md p-6 ${className}`} 
    onMouseEnter={onMouseEnter} 
    onMouseLeave={onMouseLeave}
  >
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="mb-4">
    {children}
  </div>
);

const CardTitle = ({ children, className }) => (
  <h3 className={`text-xl font-semibold ${className}`}>
    {children}
  </h3>
);

const CardContent = ({ children }) => (
  <div>
    {children}
  </div>
);

const CardDescription = ({ children }) => (
  <p className="text-gray-600">
    {children}
  </p>
);

const Accordion = ({ children, className }) => (
  <div className={`accordion ${className}`}>
    {children}
  </div>
);

const AccordionItem = ({ children, value }) => (
  <div className="accordion-item" data-value={value}>
    {children}
  </div>
);

const AccordionTrigger = ({ children }) => (
  <button className="accordion-trigger">
    {children}
  </button>
);

const AccordionContent = ({ children }) => (
  <div className="accordion-content">
    {children}
  </div>
);

const Home = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    { title: 'Custom AI Models', description: 'Tailored LLM solutions for your specific business needs', icon: <CheckCircle className="h-6 w-6 text-green-500" /> },
    { title: 'Data Security', description: 'Enterprise-grade security measures to protect your sensitive information', icon: <AlertCircle className="h-6 w-6 text-red-500" /> },
    { title: 'Scalable Infrastructure', description: 'Flexible deployment options to grow with your business', icon: <ArrowRight className="h-6 w-6 text-blue-500" /> },
  ];

  const faqs = [
    { question: 'What makes your AI solutions unique?', answer: 'Our AI solutions are tailored specifically for enterprise needs, focusing on scalability, security, and customization.' },
    { question: 'How do you ensure data privacy?', answer: 'We employ state-of-the-art encryption, access controls, and comply with industry standards like GDPR and CCPA.' },
    { question: 'Can your solutions integrate with existing systems?', answer: 'Yes, our AI models are designed to seamlessly integrate with a wide range of existing enterprise systems and workflows.' },
  ];

  return (
    <div className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6 text-center"
        >
          Empowering Enterprises with Advanced AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-12 text-center"
        >
          Cutting-edge LLM models tailored for business solutions.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="h-full cursor-pointer transition-all duration-300 hover:shadow-lg"
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {feature.icon}
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
