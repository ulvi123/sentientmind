/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Contact Form Component
const ContactForm = () => (
  <form className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-2xl mx-auto mb-12">
    <div className="mb-6">
      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
        placeholder="Your Name"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
        placeholder="Your Email"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
      <textarea
        id="message"
        name="message"
        rows="6"
        className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
        placeholder="Your Message"
      ></textarea>
    </div>
    <button
      type="submit"
      className="w-full py-3 px-6 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition duration-300"
    >
      Send Message
    </button>
  </form>
);

// Main Contact Page Component
const ContactPage = () => (
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
          Get in Touch with Us
        </motion.h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Whether you have questions about our research, products, or collaboration opportunities, we are here to help. Reach out to us using the form below.
        </p>
      </div>
    </section>

    {/* Contact Form Section */}
    <section className="py-12 px-6">
      <ContactForm />
    </section>

    {/* Additional Contact Information */}
    <section className="py-12 px-6 lg:px-12 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
      <p className="text-lg text-gray-300 mb-4">Feel free to reach out to us through any of the following channels:</p>
      <div className="text-lg text-gray-400 space-y-2">
        <p>Email: <a href="mailto:info@sentientmind.ai" className="text-white hover:underline">info@sentientmind.ai</a></p>
        <p>Phone: <a href="tel:+1234567890" className="text-white hover:underline">+1 234 567 890</a></p>
        <p>Address: 123 AI Research Blvd, Innovation City, CA 94016</p>
      </div>
    </section>

    {/* Call to Action Section */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="py-20 text-center bg-gray-900"
    >
      <h2 className="text-4xl font-bold mb-6">Looking for More Information?</h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
        We are eager to collaborate, answer your questions, and discuss the future of AI. Let’s connect and innovate together.
      </p>
      <button className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
        <Link to="/research">Learn More About Our Research</Link>
      </button>
    </motion.div>
  </div>
);

export default ContactPage;
