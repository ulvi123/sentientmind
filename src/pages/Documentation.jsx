import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Accordion Component
const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left bg-gray-800 text-white px-6 py-4 rounded-lg shadow-lg flex justify-between items-center transition duration-300 hover:bg-gray-700"
      >
        <span className="text-lg font-semibold">{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-400"
        >
          ▶
        </motion.span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-900 text-gray-300 p-4 rounded-lg mt-2"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

// Main Documentation Page
function Documentation() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-12 text-center"
        >
          <h1 className="text-6xl font-extrabold mb-6">Documentation</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Welcome to the SentientMind documentation. Here you will find all the information you need to get started with our API and services.
          </p>
        </motion.div>

        {/* Getting Started Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-center">Getting Started</h2>
          <Accordion title="Installation">
            <p className="text-lg mb-4">To install the SentientMind SDK, use the following command:</p>
            <pre className="bg-gray-800 p-4 rounded-lg">
              <code>npm install sentientmind-sdk</code>
            </pre>
          </Accordion>
          <Accordion title="Basic Usage">
            <p className="text-lg mb-4">Here’s a simple example of how to use the SDK:</p>
            <pre className="bg-gray-800 p-4 rounded-lg">
              <code>
                {`import SentientMind from 'sentientmind-sdk';

const client = new SentientMind('YOUR_API_KEY');

client.getData().then(data => {
  console.log(data);
});`}
              </code>
            </pre>
          </Accordion>
        </section>

        {/* API Reference Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-center">API Reference</h2>
          <Accordion title="Endpoints">
            <p className="text-lg mb-4">The following endpoints are available:</p>
            <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
              <li><strong>GET /api/data:</strong> Retrieve data from the API.</li>
              <li><strong>POST /api/data:</strong> Send data to the API.</li>
              <li><strong>GET /api/status:</strong> Check the status of the API.</li>
            </ul>
          </Accordion>
          <Accordion title="Response Format">
            <p className="text-lg mb-4">All responses from the API are in JSON format:</p>
            <pre className="bg-gray-800 p-4 rounded-lg">
              <code>
                {`{
  "status": "success",
  "data": {
    "key": "value"
  }
}`}
              </code>
            </pre>
          </Accordion>
        </section>

        {/* FAQs Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <Accordion title="What is SentientMind?">
            <p className="text-lg mb-4">SentientMind is an AI platform that provides advanced data processing and analysis tools.</p>
          </Accordion>
          <Accordion title="How do I get support?">
            <p className="text-lg mb-4">You can reach out to our support team at <a href="mailto:support@sentientmind.ai" className="text-white underline">support@sentientmind.ai</a>.</p>
          </Accordion>
        </section>

        {/* Contact Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Need More Help?</h2>
          <p className="text-lg text-gray-300 mb-8">
            If you have any questions or need further assistance, feel free to contact us.
          </p>
          <button className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
            <a href="mailto:support@sentientmind.ai">Contact Support</a>
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Documentation;
