/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import deploymentImg from "../../public/deploymentImg.png";
import monitorImg from "../../public/monitorImg.png";
import developerImg from "../../public/developerImg.png";

// Key Feature Component
const KeyFeature = ({ title, description }) => (
  <motion.div
    className="bg-gray-800 p-6 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

// How It Works Step Component
const Step = ({ image, step, title, description }) => (
  <motion.div
    className="flex flex-col md:flex-row items-center justify-between mb-16"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="flex-1 text-center md:text-left md:max-w-lg mb-6 md:mb-0">
      <h3 className="text-2xl font-semibold mb-2 text-white">{step}. {title}</h3>
      <p className="text-lg text-gray-300">{description}</p>
    </div>
    <div className="flex-1">
      <img src={image} alt={title} classname="w-full max-w-md mx-auto rounded-lg shadow-lg" />
    </div>
  </motion.div>
);

// main codewhisperer component
const CodeWhisperer = () => (
  <div className="bg-black text-white min-h-screen">
    {/* hero section */}
    <section className="w-full py-20 px-6 text-center bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb-4"
        >
          Hugo: Your own personal "Senior Software Engineer" 
        </motion.h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Whether you're a beginner or an experienced developer, Hugo is your next-gen AI code assistant, guiding you from writing your first line of code to deploying scalable applications effortlessly.
        </p>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <button className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">
            <Link to="/products">Explore Products</Link>
          </button>
          <button className="text-white font-semibold py-2 px-6 border border-white rounded-full hover:bg-white hover:text-black transition duration-300">
            <Link to="/contact">Request a Demo</Link>
          </button>
        </motion.div>
      </div>
    </section>

    {/* Expanded Key Features Section */}
    <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        <KeyFeature
          title="AI Code Suggestions"
          description="Receive real-time AI-driven code suggestions to speed up your coding process, whether you're writing simple scripts or complex algorithms."
        />
        <KeyFeature
          title="Personalized Learning Paths"
          description="Tailor-made learning paths based on your experience level, helping you master new programming languages and frameworks with interactive lessons."
        />
        <KeyFeature
          title="AI-Powered Code Reviews"
          description="Instantly receive AI-powered feedback on your code quality, best practices, and optimizations, helping you write more efficient and clean code."
        />
        <KeyFeature
          title="Real-Time Collaboration"
          description="Collaborate with team members in real-time, using CodeWhisperer’s integrated coding environment for pair programming and collaborative debugging."
        />
        <KeyFeature
          title="Gamified Challenges"
          description="Practice coding by completing gamified challenges designed to help you learn through fun, competition, and real-world problem-solving scenarios."
        />
        <KeyFeature
          title="Deployment Made Easy"
          description="Seamlessly deploy your code with integrated tools that simplify testing, optimization, and deployment workflows."
        />
      </div>
    </section>

    {/* How It Works Section */}
    <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
      <Step
        step="1"
        image={developerImg}
        title="Write & Learn"
        description="CodeWhisperer provides intelligent code suggestions, enabling you to write better code faster. Whether you're learning or refining your skills, CodeWhisperer helps you along the way."
      />
      <Step
        step="2"
        image={monitorImg}
        title="Monitor & Debug"
        description="Track your code’s behavior in real-time. Identify bugs, receive AI-driven recommendations for fixes, and maintain code quality throughout your development process."
      />
      <Step
        step="3"
        image={deploymentImg}
        title="Deploy & Scale"
        description="With integrated deployment tools, you can effortlessly take your project from code to production, ensuring that your application is optimized and scalable."
      />
    </section>

    {/* Testimonials Section */}
    <section className="py-20 px-6 bg-gray-900 text-center">
      <h2 className="text-4xl font-bold mb-12 text-white">What Developers Are Saying</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          className="p-8 bg-gray-800 shadow-lg rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-xl text-gray-300 mb-4">
            "Hugo has completely transformed my coding workflow. The AI suggestions are spot on, and the real-time monitoring is a game changer!"
          </p>
          <p className="text-gray-500">— Jane Doe, Full-stack Developer</p>
        </motion.div>
        <motion.div
          className="p-8 bg-gray-800 shadow-lg rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-xl text-gray-300 mb-4">
            "From learning new programming languages to deploying code in real-time, CodeWhisperer has become an indispensable tool in my toolkit."
          </p>
          <p className="text-gray-500">— John Smith, AI Researcher</p>
        </motion.div>
      </div>
    </section>

    {/* Call to Action Section */}
    <section className="py-20 bg-black text-center">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-6 text-white"
      >
        Ready to start coding with AI?
      </motion.h2>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-black font-semibold py-3 px-8 rounded-full transition-transform duration-300"
      >
        <Link to="/contact">Get Started</Link>
      </motion.button>
    </section>
  </div>
);

export default CodeWhisperer;
