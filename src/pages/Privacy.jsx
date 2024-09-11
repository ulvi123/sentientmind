/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { useState } from 'react';

// Accordion Component
const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left bg-gray-800 text-white px-4 py-2 rounded-md shadow-md flex justify-between items-center"
      >
        <span className="text-lg font-semibold">{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ▶
        </motion.span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-900 text-gray-300 p-4 rounded-md mt-2"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

// Main Privacy and Security Page
function Privacy() {
  return (
    <div className="bg-black text-white min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold mb-6 text-center">Privacy and Security</h1>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
            At SentientMind, your privacy and security are our top priorities. We are committed to safeguarding your personal data and ensuring transparency about how we handle your information.
          </p>
        </motion.div>

        {/* Accordion Sections for Interactivity */}
        <section className="mb-16">
          <Accordion title="Our Privacy Practices">
            <p className="text-lg mb-4">We believe in transparent communication about the data we collect, why we collect it, and how we use it. Our Privacy Policy outlines our practices in detail:</p>
            <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
              <li><strong>Information Collection:</strong> We collect data that you provide directly, such as your name, email, and any other contact information you provide when interacting with us.</li>
              <li><strong>Usage Data:</strong> Our systems automatically collect information about your use of our services, such as your IP address, browser type, and usage patterns.</li>
              <li><strong>Data Security:</strong> We employ a variety of security measures to protect your personal information, including encryption and access controls.</li>
              <li><strong>Your Rights:</strong> You have the right to access, modify, or delete your personal information at any time. Contact us if you have any concerns.</li>
              <li><strong>Third-Party Sharing:</strong> We do not sell or share your personal data with third parties, except as necessary to provide our services or as required by law.</li>
            </ul>
          </Accordion>

          <Accordion title="Our Security Measures">
            <p className="text-lg mb-4">Protecting your data is a top priority at SentientMind. Our team is dedicated to implementing and maintaining security practices to ensure your data is protected as safety:</p>
            <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
              <li><strong>Data Encryption:</strong> All data is encrypted in transit and at rest using industry-standard protocols.</li>
              <li><strong>Access Controls:</strong> Strict access controls ensure that only authorized personnel have access to your information.</li>
              <li><strong>Continuous Monitoring:</strong> We continuously monitor our systems for any signs of malicious activity or unauthorized access.</li>
              <li><strong>Regular Audits:</strong> We conduct regular audits and assessments to ensure compliance with security standards.</li>
              <li><strong>Incident Response:</strong> In the event of a data breach, we have a comprehensive incident response plan to mitigate any impact and notify affected parties promptly.</li>
            </ul>
          </Accordion>

          <Accordion title="Our Commitment to Transparency">
            <p className="text-lg mb-4">We are committed to being transparent about our practices and maintaining open communication with our users:</p>
            <p className="text-lg text-gray-300 mb-4">If you have any questions about our Privacy and Security policies, please feel free to contact us at <a href="mailto:privacy@sentientmind.ai" className="text-white underline">privacy@sentientmind.ai</a>. We are here to help and ensure that your data is secure.</p>
          </Accordion>
        </section>

        {/* Interactive Data Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">Key Privacy Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-4xl font-bold text-white">99.9%</p>
              <p className="text-gray-300">Data Encryption Uptime</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-4xl font-bold text-white">100+</p>
              <p className="text-gray-300">Annual Security Audits</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-4xl font-bold text-white">0</p>
              <p className="text-gray-300">Data Breaches in the Past Year</p>
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
          <h2 className="text-4xl font-bold mb-6">Have Questions?</h2>
          <p className="text-lg text-gray-300 mb-8">
            We are here to provide you with more information, answer your questions, or help you navigate our policies.
          </p>
          <button className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
            <a href="mailto:privacy@sentientmind.ai">Contact Us</a>
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Privacy;
