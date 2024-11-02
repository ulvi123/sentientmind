import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

// Hero Section
const HeroSection = () => (
  <section className="relative py-32 bg-black text-center">
    <Container>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold mb-6 leading-tight text-white"
      >
        Revolutionizing Industries with AI
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-lg mb-12 max-w-2xl mx-auto text-gray-300"
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
          className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-transform duration-300 hover:bg-blue-500 shadow-lg"
        >
          Explore Research
        </Link>
        <Link
          to="/contact"
          className="bg-transparent border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-full transition-transform duration-300 hover:bg-blue-600 hover:text-white shadow-lg"
        >
          Request a Demo
        </Link>
      </motion.div>
    </Container>
  </section>
);

// Key Features Section
const KeyFeatures = () => {
  const features = [
    {
      title: "Custom AI Models",
      description:
        "Tailored AI models designed to meet your specific business needs.",
      icon: <CodeIcon className="h-12 w-12 text-blue-600" />,
    },
    {
      title: "Data Privacy",
      description:
        "Enterprise-grade solutions ensuring maximum security and privacy.",
      icon: <LockClosedIcon className="h-12 w-12 text-blue-600" />,
    },
    {
      title: "Integration Ready",
      description:
        "Seamless integration with existing systems to enhance productivity.",
      icon: <DeviceMobileIcon className="h-12 w-12 text-blue-600" />,
    },
    {
      title: "Scalable Solutions",
      description:
        "AI platforms that grow with your business, ensuring long-term value.",
      icon: <TrendingUpIcon className="h-12 w-12 text-blue-600" />,
    },
  ];

  return (
    <section className="py-24 bg-gray-900">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

// Clients Section
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
    <section className="py-24 bg-black text-center">
      <Container>
        <h2 className="text-3xl font-bold mb-12 text-white">
          Trusted by Industry Leaders
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 w-32 h-16 flex items-center justify-center"
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
        </div>
      </Container>
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
    <section id="usecases" className="py-24 bg-gray-900">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-16 text-white">
          Transforming Industries
        </h2>
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
                <img
                  src={useCase.image}
                  alt={`${useCase.title} Use Case`}
                  className="w-full h-56 object-cover transition-transform duration-300 transform group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400">
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
  <section className="py-24 bg-black text-center">
    <Container>
      <h2 className="text-3xl font-bold mb-16 text-white">
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
            <blockquote className="text-lg text-gray-300 mb-6 italic">
              "{testimonial.quote}"
            </blockquote>
            <cite className="text-gray-400 not-italic">
              <span className="font-semibold">{testimonial.author}</span>
              <br />
              {testimonial.position}
            </cite>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);

// Call to Action Section
const CTASection = () => (
  <section className="py-24 bg-blue-600 text-center">
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
        className="text-lg mb-8 text-white max-w-2xl mx-auto"
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

// Main Home Page Component
const Home = () => (
  <div className="bg-black text-white">
    <HeroSection />
    <KeyFeatures />
    <ClientsSection />
    <UseCasesSection />
    <TestimonialsSection />
    <CTASection />
  </div>
);

export default Home;