/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import simulation from "../../public/onb3.png";
import devops from "../../public/ci-cd.png";
import cliImg from "../../public/cli.png";

// Enhanced components...
const KeyFeature = ({ title, description, icon }) => (
  <motion.div
    className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700/50"
    whileHover={{ scale: 1.03, y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex flex-col h-full">
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const Step = ({ step, image, title, description }) => (
  <motion.div
    className="flex flex-col md:flex-row items-center gap-12 mb-24"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="flex-1">
      <div className="flex items-center mb-4">
        <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{step}</span>
        <div className="w-12 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 ml-4"></div>
      </div>
      <h3 className="text-3xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-xl text-gray-300 leading-relaxed">{description}</p>
    </div>
    <motion.div 
      className="flex-1"
      whileHover={{ scale: 1.05 }}
    >
      <img src={image} alt={title} className="rounded-2xl shadow-2xl border border-gray-700/50" />
    </motion.div>
  </motion.div>
);

const CodeWhisperer = () => (
  <div className="bg-black text-white min-h-screen">
    {/* Hero Section */}
    <section className="relative py-32 px-6 bg-gradient-to-b from-blue-900/20 to-black">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl font-bold mb-6">
            Code Smarter with <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Valkyrie</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Your AI-powered coding companion that helps you write better code faster.
            From smart suggestions to automated reviews, we've got you covered.
          </p>
        </motion.div>
        <div className="flex justify-center gap-6">
          <Link to="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-full hover:opacity-90 transition">
            Try Demo
          </Link>
          <Link to="/company/pricing" className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-black transition">
            View Pricing
          </Link>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Key Features
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <KeyFeature
          title="AI Code Suggestions"
          description="Get intelligent code completions and suggestions in real-time."
          icon={<i className="fas fa-robot text-3xl" />}
        />
        <KeyFeature
          title="Smart Debugging"
          description="Identify and fix bugs faster with AI-powered analysis."
          icon={<i className="fas fa-bug text-3xl" />}
        />
        <KeyFeature
          title="Team Collaboration"
          description="Built-in tools for seamless team collaboration."
          icon={<i className="fas fa-users text-3xl" />}
        />
      </div>
    </section>

    {/* Steps Section */}
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <Step
        step="01"
        image={cliImg}
        title="Unified Development Environment"
        description="Seamlessly integrate with your existing workflow and get intelligent assistance right where you need it."
      />
      <Step
        step="02"
        image={simulation}
        title="Real-Time AI Assistance"
        description="Experience intelligent code suggestions and documentation as you type."
      />
      <Step
        step="03"
        image={devops}
        title="Automated DevOps"
        description="Streamline your deployment process with AI-powered automation."
      />
    </section>

    {/* Testimonials Section */}
    <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Loved by Developers
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50"
            whileHover={{ scale: 1.03 }}
          >
            <p className="text-xl text-gray-300 mb-6">
              "Valkyrie has transformed our development process. The AI suggestions are incredibly accurate."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-4"></div>
              <div>
                <p className="font-semibold text-white">Sarah Chen</p>
                <p className="text-gray-400">Senior Developer</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50"
            whileHover={{ scale: 1.03 }}
          >
            <p className="text-xl text-gray-300 mb-6">
              "It's like having an extra senior developer on the team. Invaluable for maintaining code quality."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-4"></div>
              <div>
                <p className="font-semibold text-white">Marcus Rodriguez</p>
                <p className="text-gray-400">Tech Lead</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-24 px-6 bg-gradient-to-t from-blue-900/20 to-black text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Join thousands of developers who are already coding smarter, not harder.
        </p>
        <Link 
          to="/pricing"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-12 py-4 rounded-full text-white font-semibold hover:opacity-90 transition"
        >
          Get Started Now
        </Link>
      </div>
    </section>
  </div>
);

export default CodeWhisperer;