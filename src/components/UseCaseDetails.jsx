/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';

// Icon Component
const Icon = ({ icon, title }) => (
  <div className="flex items-center space-x-3 mb-4">
    <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full">
      <i className={`fas fa-${icon} text-white`}></i>
    </div>
    <span className="text-xl font-medium text-white">{title}</span>
  </div>
);

// Statistic Component
const Statistic = ({ value, label }) => (
  <div className="text-center mb-8">
    <h3 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
      {value}
    </h3>
    <p className="text-gray-300">{label}</p>
  </div>
);

// Testimonial Component
const Testimonial = ({ quote, author, role }) => (
  <div className="p-8 bg-gray-900 rounded-xl shadow-lg mb-8">
    <p className="text-2xl italic font-light text-gray-200 mb-4">&ldquo;{quote}&rdquo;</p>
    <p className="text-gray-400">— {author}, {role}</p>
  </div>
);

// Redesigned UseCaseDetails Component
const UseCaseDetails = ({ title, image, introduction, benefits, features, statistics, testimonials }) => {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-4">
            {title}
          </h1>
          <p className="text-lg text-gray-300">{introduction}</p>
        </motion.div>

        {/* Image Section */}
        <div className="mb-16">
          <motion.img
            src={image}
            alt={`${title} image`}
            className="w-full h-[500px] object-cover rounded-lg shadow-xl transition-transform duration-500 transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {benefits.map((benefit, index) => (
              <Icon key={index} icon={benefit.icon} title={benefit.title} />
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Highlighted Features</h2>
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Impact in Numbers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <Statistic key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">What Our Clients Are Saying</h2>
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} quote={testimonial.quote} author={testimonial.author} role={testimonial.role} />
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-2xl transition-transform duration-300"
          >
            Contact Us for More Information
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default UseCaseDetails;
