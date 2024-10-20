import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HighlightedFeatures from "../components/HighlightedFeatures";
import {
  CodeIcon,
  LockClosedIcon,
  DeviceMobileIcon,
  TrendingUpIcon,
} from "@heroicons/react/outline";

// Components for Basic Layouts
const Container = ({ children, className }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const Divider = () => <div className="h-px bg-gray-700 my-12"></div>;

// Hero Section
const HeroSection = () => (
  <section className="relative py-32 bg-gradient-to-r  text-center">
    <Container>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold mb-6 leading-tight text-white"
      >
        Revolutionizing Industries with AI
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-xl mb-12 max-w-2xl mx-auto text-gray-300"
      >
        Experience the transformative power of our cutting-edge AI solutions, designed to drive innovation and efficiency across multiple sectors.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex justify-center space-x-4"
      >
        <Link
          to="/research"
          className="bg-white text-black font-semibold py-3 px-8 rounded-full transition-transform duration-300 hover:bg-gray-200"
        >
          Explore Our Research
        </Link>
        <Link
          to="/contact"
          className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full transition-transform duration-300 hover:bg-white hover:text-black"
        >
          Request a Demo
        </Link>
      </motion.div>
    </Container>
  </section>
);

// Highlighted Features Section


const KeyFeatures = () => {
  const features = [
    {
      title: "Custom AI Models",
      description:
        "Develop advanced AI models tailored to your specific needs, empowering businesses to innovate.",
      icon: <CodeIcon className="h-12 w-12 text-blue-500" />,
    },
    {
      title: "Data Privacy",
      description:
        "Ensuring maximum security and privacy with enterprise-grade solutions for data protection.",
      icon: <LockClosedIcon className="h-12 w-12 text-blue-500" />,
    },
    {
      title: "Integration Ready",
      description:
        "Seamless integration with existing systems to maximize productivity and reduce downtime.",
      icon: <DeviceMobileIcon className="h-12 w-12 text-blue-500" />,
    },
    {
      title: "Scalable Solutions",
      description:
        "Our AI platforms grow with your business, ensuring long-term value and adaptability.",
      icon: <TrendingUpIcon className="h-12 w-12 text-blue-500" />,
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Cutting-Edge Features
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-6 p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0">{feature.icon}</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


// Client Logos Section with Infinite Scroll
const ClientsSection = () => {
  const clients = [
    { name: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
    { name: 'Amazon', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png' },
    { name: 'Microsoft', logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31' },
    { name: 'Twitter', logo: 'https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png' },
    { name: 'Mercedes-Benz', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png' },
    { name: 'Netflix', logo: 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' },
  ];
  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-center overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-white">
          Trusted by Industry Leaders
        </h2>
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-48 h-24 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src={client.logo} 
                alt={`${client.name} Logo`} 
                className="max-h-full max-w-full object-contain" 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Use Cases Section
const UseCasesSection = () => {
  const useCases = [
    {
      title: "Education",
      description: "Personalized learning experiences and intelligent tutoring systems.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "/education"
    },
    {
      title: "Software Engineering",
      description: "AI-powered code generation and automated testing solutions.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "/software-engineering"
    },
    {
      title: "Healthcare",
      description: "Advanced diagnostics and personalized treatment recommendations.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "/healthcare"
    }
  ];

  return (
    <section id="usecases" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <Container>
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Transforming Industries
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-12">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={useCase.link}
                className="group relative block bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-10"></div>
                <img
                  src={useCase.image}
                  alt={`${useCase.title} Use Case`}
                  className="w-full h-56 object-cover transition-transform duration-300 transform group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300">
                    {useCase.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => (
  <section className="py-24 bg-gradient-to-b from-black to-gray-900 text-center">
    <Container>
      <h2 className="text-4xl font-bold mb-16 text-white">
        Client Success Stories
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        {[
          {
            quote: "This AI solution transformed our approach to data analysis, driving better results across the board.",
            author: "Jane Doe",
            position: "CTO of ExampleCorp"
          },
          {
            quote: "Innovative, reliable, and highly effective AI models that integrate seamlessly into our workflow.",
            author: "John Smith",
            position: "CEO of FinTechCo"
          }
        ].map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="p-8 bg-gray-800 shadow-lg rounded-lg"
          >
            <blockquote className="text-xl text-gray-300 mb-6 italic">
              "{testimonial.quote}"
            </blockquote>
            <cite className="text-gray-400 not-italic"/>
              <span className="font-semibold">{testimonial.author}</span>
              <br />
              {testimonial.position}
            
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);

// Call to Action Section
const CTASection = () => (
  <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-center">
    <Container>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-6 text-white"
      >
        Ready to Transform Your Business with AI?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto"
      >
        Join the AI revolution and stay ahead of the competition. Let's build the future together.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full transition-transform duration-300 hover:bg-gray-100"
      >
        <Link to="/contact">Get Started Today</Link>
      </motion.button>
    </Container>
  </section>
);

// Footer Section
const Footer = () => (
  <footer className="py-16 bg-black text-center">
    <Container>
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
            <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
            <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Connect</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">GitHub</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
          <p className="text-gray-400">info@sentimentmind.com</p>
          <p className="text-gray-400">+1 (555) 123-4567</p>
        </div>
      </div>
      <p className="text-gray-500">
        © 2024 SentimentMind. All rights reserved.
      </p>
    </Container>
  </footer>
);

// Main Home Page Component
const Home = () => (
  <div className="bg-black text-white">
    <HeroSection />
    <KeyFeatures />
    <HighlightedFeatures />
    {/* <ClientsSection /> */}
    <UseCasesSection />
    <TestimonialsSection />
    <CTASection />
  </div>
);

export default Home;