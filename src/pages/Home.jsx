/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HighlightedFeatures from "../components/HighlightedFeatures"; // Adjust the path if necessary

// Components for Basic Layouts
const Container = ({ children, className }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const Divider = () => <div className="h-px bg-gray-700 my-12"></div>; // Darker divider for black background

// Hero Section
const HeroSection = () => (
  <section className="relative py-32 bg-black text-center">
    <Container>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold mb-6 leading-tight text-white"
      >
        Unleashing AI for the Future
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-xl mb-12 max-w-2xl mx-auto text-gray-400"
      >
        Discover the possibilities of artificial intelligence with
        state-of-the-art research and solutions designed for real-world impact.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-black font-semibold py-3 px-8 rounded-full transition-transform duration-300"
      >
        <Link to="/research">Explore Our Research</Link>
      </motion.button>
    </Container>
  </section>
);

// Key Features Section
const KeyFeatures = () => {
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
    <section className="py-24 bg-black">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

// Client Logos Section
const ClientsSection = () => (
  <section className="py-24 bg-black text-center">
    <Container>
      <h2 className="text-3xl font-bold mb-8 text-white">
        Trusted by Leading Organizations
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {/* Replace with actual client logos */}
        <div className="h-16 w-40 bg-gray-700 rounded-lg"></div>
        <div className="h-16 w-40 bg-gray-700 rounded-lg"></div>
        <div className="h-16 w-40 bg-gray-700 rounded-lg"></div>
        <div className="h-16 w-40 bg-gray-700 rounded-lg"></div>
        <div className="h-16 w-40 bg-gray-700 rounded-lg"></div>
      </div>
    </Container>
  </section>
);

// Use Cases Section
const UseCasesSection = () => (
  <section id="usecases" className="py-24 bg-black">
    <Container>
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Real-World Use Cases
      </h2>
      <div className="grid md:grid-cols-3 gap-12">
        {/* Education Use Case Card */}
        <Link
          to="/education"
          className="group relative block bg-gray-800 rounded-lg overflow-hidden shadow-lg"
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-10"></div>
          <img
            src="your-education-image-url.jpg"
            alt="Education Use Case"
            className="w-full h-56 object-cover transition-transform duration-300 transform group-hover:scale-105"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Education
            </h3>
            <p className="text-gray-300">
              Personalized learning, intelligent tutoring, and AI-driven
              analytics for better educational outcomes.
            </p>
          </div>
        </Link>

        {/* Software Engineering Use Case Card */}
        <Link
          to="/software-engineering"
          className="group relative block bg-gray-800 rounded-lg overflow-hidden shadow-lg"
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-10"></div>
          <img
            src="your-software-engineering-image-url.jpg"
            alt="Software Engineering Use Case"
            className="w-full h-56 object-cover transition-transform duration-300 transform group-hover:scale-105"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Making Software Engineering Accessible
            </h3>
            <p className="text-gray-300">
              AI tools that simplify coding, provide real-time feedback, and
              make learning to code more accessible.
            </p>
          </div>
        </Link>

        {/* Healthcare Use Case Card */}
        <Link
          to="/healthcare"
          className="group relative block bg-gray-800 rounded-lg overflow-hidden shadow-lg"
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-10"></div>
          <img
            src="your-healthcare-image-url.jpg"
            alt="Healthcare Use Case"
            className="w-full h-56 object-cover transition-transform duration-300 transform group-hover:scale-105"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Healthcare
            </h3>
            <p className="text-gray-300">
              AI solutions for improving diagnostics, optimizing treatment, and
              enhancing patient care.
            </p>
          </div>
        </Link>
      </div>
    </Container>
  </section>
);

// Testimonials Section
const TestimonialsSection = () => (
  <section className="py-24 bg-black text-center">
    <Container>
      <h2 className="text-3xl font-bold mb-12 text-white">
        What Our Clients Say
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Testimonial Example */}
        <div className="p-8 bg-gray-800 shadow-lg rounded-lg">
          <p className="text-xl text-gray-300 mb-4">
            This AI solution transformed our approach to data analysis, driving
            better results across the board.
          </p>
          <p className="text-gray-500">— Jane Doe, CTO of ExampleCorp</p>
        </div>
        <div className="p-8 bg-gray-800 shadow-lg rounded-lg">
          <p className="text-xl text-gray-300 mb-4">
            Innovative, reliable, and highly effective AI models that integrate
            seamlessly into our workflow.
          </p>
          <p className="text-gray-500">— John Smith, CEO of FinTechCo</p>
        </div>
      </div>
    </Container>
  </section>
);

// Call to Action Section
const CTASection = () => (
  <section className="py-24 bg-black text-center">
    <Container>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-6 text-white"
      >
        Ready to partner with us?
      </motion.h2>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-black font-semibold py-3 px-8 rounded-full transition-transform duration-300"
      >
        <Link to="/contact">Contact Us</Link>
      </motion.button>
    </Container>
  </section>
);

// Footer Section
const Footer = () => (
  <footer className="py-16 bg-black text-center">
    <Container>
      <p className="text-gray-500">
        © 2024 Your AI Research Lab. All rights reserved.
      </p>
    </Container>
  </footer>
);

// Main Home Page Component
const Home = () => (
  <div className="bg-black text-white">
    <HeroSection />
    <Divider />
    {/* Use the Key Features section */}
    <KeyFeatures />
    <Divider />
    {/* Add the Highlighted Features component here */}
    <HighlightedFeatures />
    <Divider />
    <ClientsSection />
    <Divider />
    <UseCasesSection />
    <Divider />
    <TestimonialsSection />
    <Divider />
    <CTASection />
    <Footer />
  </div>
);

export default Home;
