/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

// Section Component for Consistent Layout
const Section = ({ title, children }) => (
  <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold mb-6 text-gray-200"
    >
      {title}
    </motion.h2>
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">{children}</div>
  </section>
);

// Main Company Component
const Company = () => (
  <div className="bg-gray-900 text-white min-h-screen">
    {/* News Section */}
    <Section title="News">
      <p className="text-lg text-gray-300 mb-6">
        Stay updated with our latest news, announcements, and industry insights.
      </p>
      <ul className="space-y-6">
        <li className="border-b border-gray-700 pb-4">
          <h3 className="text-xl font-semibold text-gray-100">New AI Model Launched</h3>
          <p className="text-gray-400">August 1, 2024 — We are excited to announce the launch of our new AI model, Sentient1, with groundbreaking capabilities.</p>
        </li>
        <li className="border-b border-gray-700 pb-4">
          <h3 className="text-xl font-semibold text-gray-100">Partnership with XYZ Corp</h3>
          <p className="text-gray-400">July 15, 2024 — We are partnering with XYZ Corp to advance AI technology in healthcare and education sectors.</p>
        </li>
        <li>
          <h3 className="text-xl font-semibold text-gray-100">AI Ethics Initiative</h3>
          <p className="text-gray-400">June 20, 2024 — Launching our new AI Ethics Initiative to ensure fairness and transparency in AI development.</p>
        </li>
      </ul>
    </Section>

    {/* Careers Section */}
    <Section title="Careers">
      <p className="text-lg text-gray-300 mb-6">
        Join our team of innovators and help shape the future of artificial intelligence.
      </p>
      <button className="bg-blue-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300">
        Explore Open Positions
      </button>
    </Section>

    {/* Security and Privacy Section */}
    <Section title="Security and Privacy">
      <p className="text-lg text-gray-300 mb-6">
        We prioritize the security and privacy of our users. Learn more about our practices.
      </p>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-100">Data Protection</h3>
          <p className="text-gray-400">
            Our data protection policies are designed to safeguard your information.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-100">Compliance</h3>
          <p className="text-gray-400">
            We adhere to global privacy laws and regulations to ensure transparency and trust.
          </p>
        </div>
      </div>
    </Section>

    {/* About Us Section */}
    <Section title="About Us">
      <p className="text-lg text-gray-300 mb-6">
        Learn about our mission, vision, and the team behind our innovative AI solutions.
      </p>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold text-gray-100">Our Mission</h3>
          <p className="text-gray-400">
            Our mission is to advance AI technology to make it accessible, beneficial, and ethical for everyone.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-100">Our Team</h3>
          <p className="text-gray-400">
            A diverse group of experts passionate about innovation and the future of AI.
          </p>
        </div>
      </div>
    </Section>
  </div>
);

export default Company;
