// src/components/HighlightedFeatures.js


import { motion } from "framer-motion";

// Highlighted Features Component
const HighlightedFeatures = () => {
  const features = [
    {
      title: "Custom AI Models",
      description:
        "Develop advanced AI models tailored to your specific needs, empowering businesses to innovate.",
    },
    {
      title: "Data Privacy",
      description:
        "Ensuring maximum security and privacy with enterprise-grade solutions for data protection.",
    },
    {
      title: "Integration Ready",
      description:
        "Seamless integration with existing systems to maximize productivity and reduce downtime.",
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        Highlighted Features
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-8 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HighlightedFeatures;
