/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';
import { useState } from 'react';

// Input Field Component
const FormField = ({ label, type, name, placeholder }) => (
  <motion.div 
    className="mb-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <label 
      htmlFor={name} 
      className="block text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2"
    >
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea
        id={name}
        name={name}
        rows="6"
        className="w-full p-4 border border-gray-700 rounded-lg bg-gray-800/50 text-white 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   transition-all duration-300 backdrop-blur-sm
                   hover:border-blue-500"
        placeholder={placeholder}
      />
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        className="w-full p-4 border border-gray-700 rounded-lg bg-gray-800/50 text-white 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   transition-all duration-300 backdrop-blur-sm
                   hover:border-blue-500"
        placeholder={placeholder}
      />
    )}
  </motion.div>
);

// Contact Form Component
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-xl" />
      
      <motion.form 
        onSubmit={handleSubmit}
        className="relative bg-gray-900/80 backdrop-blur-xl p-8 md:p-12 rounded-lg shadow-2xl 
                   border border-gray-700/50 max-w-2xl mx-auto mb-12"
      >
        {!submitted ? (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-400">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </motion.div>

            <FormField
              label="Name"
              type="text"
              name="name"
              placeholder="Your Name"
            />

            <FormField
              label="Email"
              type="email"
              name="email"
              placeholder="your.email@example.com"
            />

            <FormField
              label="Message"
              type="textarea"
              name="message"
              placeholder="How can we help you?"
            />

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-lg font-semibold
                         transition-all duration-300 transform
                         ${isSubmitting 
                           ? 'bg-gray-600 cursor-not-allowed' 
                           : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 hover:scale-[1.02]'
                         }`}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Sending...
                </div>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 
                          flex items-center justify-center">
              <svg 
                className="w-8 h-8 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
            <p className="text-gray-400">
              Your message has been sent successfully. We'll get back to you soon.
            </p>
            <motion.button
              onClick={() => setSubmitted(false)}
              className="mt-6 px-6 py-2 text-sm text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Another Message
            </motion.button>
          </motion.div>
        )}
      </motion.form>
    </motion.div>
  );
};

// Main Contact Page Component
const ContactPage = () => (
  <div className="bg-black text-white min-h-screen">
    {/* Hero Section */}
    <section className="relative w-full py-20 px-6 text-center">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="relative max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Let's Connect
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
        >
          Whether you have questions about our AI solutions, partnership opportunities, 
          or just want to say hello, we'd love to hear from you.
        </motion.p>
      </div>
    </section>

    {/* Contact Form Section */}
    <section className="py-12 px-6">
      <ContactForm />
    </section>

    {/* Contact Information */}
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-12 px-6 lg:px-12 max-w-4xl mx-auto text-center"
    >
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Other Ways to Reach Us
      </h2>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-gray-900/50 rounded-lg backdrop-blur-sm border border-gray-700/50"
        >
          <div className="text-blue-400 mb-4">
            <i className="fas fa-envelope text-2xl" />
          </div>
          <h3 className="font-semibold mb-2">Email</h3>
          <a href="mailto:info@sentientmind.ai" className="text-gray-400 hover:text-white transition-colors">
            info@sentientmind.io
          </a>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-gray-900/50 rounded-lg backdrop-blur-sm border border-gray-700/50"
        >
          <div className="text-blue-400 mb-4">
            <i className="fas fa-phone text-2xl" />
          </div>
          <h3 className="font-semibold mb-2">Phone</h3>
          <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
            +372 539 57627
          </a>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-gray-900/50 rounded-lg backdrop-blur-sm border border-gray-700/50"
        >
          <div className="text-blue-400 mb-4">
            <i className="fas fa-map-marker-alt text-2xl" />
          </div>
          <h3 className="font-semibold mb-2">Location</h3>
          <p className="text-gray-400">
            San Francisco,CA 94016
          </p>
        </motion.div>
      </div>
    </motion.section>
  </div>
);

export default ContactPage;
