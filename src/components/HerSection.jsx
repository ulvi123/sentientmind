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
  

export default HeroSection