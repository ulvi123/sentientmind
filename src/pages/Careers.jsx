import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import girl from "../../public/girl.jpg";
import { Link } from 'react-router-dom';

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const jobSectionRef = useRef(null); // Create a ref for the job section

  // Function to handle scrolling to the job section
  const handleViewAllJobs = () => {
    jobSectionRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section smoothly
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-between bg-black px-8 py-16 md:py-32">
        {/* Left Side: Search Section */}
        <div className="flex-1 max-w-md mx-auto md:mx-0 md:max-w-lg text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Make a Bold Move
          </motion.h1>
          {/* Search Bar */}
          <div className="relative mb-8 w-full">
            <input
              type="text"
              placeholder="Start your search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 rounded-full bg-gray-800 text-white placeholder-gray-500 outline-none"
            />
            <button className="absolute right-0 top-0 mt-3 mr-3 text-white">
              🔍
            </button>
          </div>
          {/* View All Jobs Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white text-black font-semibold py-3 px-8 rounded-full transition duration-300"
            onClick={handleViewAllJobs} // Attach scroll handler
          >
            View all jobs
          </motion.button>
        </div>

        {/* Right Side: Background Image */}
        <div className="flex-1 flex justify-center mt-8 md:mt-0 md:ml-8">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src={girl}
            alt="Join Our Team"
            className="max-w-full max-h-[400px] md:max-h-[500px] rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Open Positions Section */}
      <section
        ref={jobSectionRef} // Attach ref to this section
        className="bg-black py-16 px-8"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Current Openings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {/* Example Job Cards */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">Machine Learning Engineer</h3>
            <p className="text-gray-300 mb-4">Remote or On-site, New York</p>
            <Link to="/contact"><button className="bg-white text-black py-2 px-4 rounded-full">Apply Now</button></Link>
          </motion.div>
          {/* Additional Job Cards */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">AI Product Manager</h3>
            <p className="text-gray-300 mb-4">San Francisco, CA or Remote</p>
            <Link to="/contact"><button className="bg-white text-black py-2 px-4 rounded-full">Apply Now</button></Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">AI Researcher</h3>
            <p className="text-gray-300 mb-4">San Francisco, CA or Remote</p>
            <Link to="/contact"><button className="bg-white text-black py-2 px-4 rounded-full">Apply Now</button></Link>
          </motion.div>
          {/* Repeat for additional job cards */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-lg text-gray-300 mb-8">
            If you’re excited about the future of AI and want to make a real impact, we’d love to hear from you.
          </p>
          <button className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
            <a href="mailto:careers@sentientmind.ai">Apply Now</a>
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Careers;
