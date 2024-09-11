/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import aboutImage from "../../public/1.png" // Ensure you have this import if using Link for navigation

// Team Member Card Component
const TeamMemberCard = ({ name, role, image, bio }) => (
  <motion.div
    className="p-6 bg-gray-900 rounded-lg shadow-lg text-center"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
    <h3 className="text-xl font-bold text-white">{name}</h3>
    <p className="text-sm text-gray-400">{role}</p>
    <p className="text-gray-300 mt-2">{bio}</p>
  </motion.div>
);

// About Page Component
const About = () => {
  const [showMore, setShowMore] = useState(false);
  const teamMembers = [
    {
      name: 'Jane Doe',
      role: 'CEO & Founder',
      image: 'https://via.placeholder.com/150',
      bio: 'Jane is a visionary leader with 15 years of experience in AI development and a passion for ethical AI solutions.',
    },
    {
      name: 'John Smith',
      role: 'Chief Scientist',
      image: 'https://via.placeholder.com/150',
      bio: 'John leads our AI research team, specializing in machine learning and natural language processing.',
    },
    {
      name: 'John Smith',
      role: 'Chief Scientist',
      image: 'https://via.placeholder.com/150',
      bio: 'John leads our AI research team, specializing in machine learning and natural language processing.',
    },
    // Add more team members as needed
  ];

  return (
    <div className="bg-black text-white min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl font-bold mb-6">Who we are?</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            At SentientMind, we are dedicated to pioneering the future of AI by creating innovative solutions that empower enterprises to achieve their goals.
          </p>
        </motion.div>

        {/* Added Image Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-16 mx-auto px-4 sm:px-6 lg:px-8"
        >
          <img 
            src={aboutImage} // Replace with your actual image URL
            alt="SentientMind Mission"
            className="max-w-full max-h-150 max-w-200 mx-auto object-cover rounded-lg"
          />
        </motion.div>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-gray-300 mb-8"
          >
            Our mission is to revolutionize the way businesses harness AI technology by developing state-of-the-art models, tools, and services that are accessible, ethical, and impactful.
          </motion.p>
          <motion.button
            onClick={() => setShowMore(!showMore)}
            className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showMore ? 'Show Less' : 'Read More'}
          </motion.button>
          {showMore && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-6 text-lg text-gray-300"
            >
              We believe in transparency, collaboration, and pushing the boundaries of what AI can achieve. We strive to build AI systems that are not only powerful and efficient but also ethical and inclusive, benefiting everyone.
            </motion.div>
          )}
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
              />
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-300">We are constantly innovating to create AI solutions that are cutting-edge, efficient, and transformative.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">Ethics</h3>
              <p className="text-gray-300">We prioritize ethical AI development, ensuring our models are fair, transparent, and inclusive.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">Collaboration</h3>
              <p className="text-gray-300">We believe in open collaboration with partners, academia, and the AI community to advance knowledge and innovation.</p>
            </motion.div>
          </div>
        </section>

        {/* Contact Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-lg text-gray-300 mb-8">
            We are always looking for passionate and talented individuals to join our team. Check out our open positions and become a part of our mission to shape the future of AI.
          </p>
          <button className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
            <Link to="/careers">View Careers</Link>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
