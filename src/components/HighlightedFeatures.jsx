import React from "react";
import { motion } from "framer-motion";
import {
  SparklesIcon,
  ShieldCheckIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";

const HighlightedFeatures = () => {
  const features = [
    {
      title: "Innovative AI Models",
      description:
        "Leverage cutting-edge AI technology customized to your business needs.",
      icon: <SparklesIcon className="h-12 w-12 text-blue-500" />,
    },
    {
      title: "Robust Data Security",
      description:
        "Protect your data with enterprise-grade security and privacy measures.",
      icon: <ShieldCheckIcon className="h-12 w-12 text-blue-500" />,
    },
    {
      title: "Seamless Integration",
      description:
        "Integrate effortlessly with your existing systems for maximum efficiency.",
      icon: <LightningBoltIcon className="h-12 w-12 text-blue-500" />,
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Highlighted Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightedFeatures;
