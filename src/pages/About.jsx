// sentientmind/src/pages/About.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nijat from "../assets/nijat.jpeg"
import Ulvi from "../assets/uLVI.jpeg"
import Eldar from "../assets/Eldar.jpeg"

// Using placeholder images until you have actual ones
import aboutImage from "/1.png";
const founderImg = "https://placehold.co/800x800";
const teamImg = "https://placehold.co/800x800";
const labImg = "https://placehold.co/1200x600";

const About = () => {
  const [activeSection, setActiveSection] = useState('story');

  const teamMembers = [
    {
      name: 'Jane Doe',
      role: 'CEO & Founder',
      image: 'https://placehold.co/400x400',
      bio: 'Pioneering AI solutions for over 15 years',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'John Smith',
      role: 'Chief Scientist',
      image: 'https://placehold.co/400x400',
      bio: 'Former ML Lead at OpenAI',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Engineering',
      image: 'https://placehold.co/400x400',
      bio: 'Built scalable AI systems at Google',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-900/20 to-black">
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
              backgroundSize: ['100% 100%', '120% 120%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              backgroundImage: 'url("/grid-pattern.png")',
            }}
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Shaping the Future of AI
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're building the next generation of AI technology that will transform how businesses operate and innovate.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/contact">
              <button className="bg-blue-600 px-8 py-3 rounded-lg hover:bg-blue-700 transition mx-2">
                Get Started
              </button>
            </Link>
            <Link to="/docs">
              <button className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition mx-2">
                Learn More
              </button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-0 bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4">
            {['story', 'team', 'values', 'impact'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`text-lg font-medium px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === section
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
                  }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Story Section */}
        <motion.section
          className={`space-y-32 ${activeSection !== 'story' && 'hidden'}`}
          {...fadeIn}
        >
          {/* Vision & Mission */}
          <div className="text-center max-w-4xl mx-auto">
            <motion.h2
              className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Democratizing AI for Everyone
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We believe AI should be accessible, transparent, and beneficial to all of humanity,
              not just a privileged few.
            </motion.p>
          </div>

          {/* Origin Story */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">Where It All Began</h3>
              <div className="space-y-6 text-lg text-gray-300">
                <p>
                  In 2020, during the height of the AI boom, our founders noticed a concerning trend:
                  AI development was becoming increasingly centralized, controlled by a handful of
                  large corporations.
                </p>
                <p>
                  <span className="text-blue-400 font-semibold">Our mission was clear:</span> create an
                  open-source platform where developers and researchers could build, train, and deploy
                  their own AI models without massive computational resources or corporate backing.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mt-8">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                    </svg>
                    Founded in 2020
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                    </svg>
                    San Francisco, CA
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative aspect-square"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={founderImg}
                alt="Our Founders"
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
            </motion.div>
          </div>

          {/* Journey & Growth */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative aspect-square md:order-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={teamImg}
                alt="Our Team"
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
            </motion.div>
            <motion.div
              className="md:order-1"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">Our Journey</h3>
              <div className="space-y-6 text-lg text-gray-300">
                <p>
                  What started as a small team of three AI researchers has grown into a vibrant
                  community of over 100 passionate individuals, united by a common goal: making AI
                  development democratic and accessible.
                </p>
                <p>
                  Today, our platform supports thousands of developers worldwide, powering everything
                  from startups to research institutions. We've helped launch over 500 custom AI models,
                  each contributing to our vision of decentralized AI innovation.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="bg-gray-900/50 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-blue-500">100+</div>
                  <div className="text-sm text-gray-400">Team Members</div>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-purple-500">500+</div>
                  <div className="text-sm text-gray-400">AI Models</div>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-green-500">50k+</div>
                  <div className="text-sm text-gray-400">Developers</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Future Vision */}
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={labImg}
                alt="AI Lab"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </div>
            <div className="relative z-10 p-16">
              <motion.div
                className="max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold mb-6">Looking Ahead</h3>
                <div className="space-y-6 text-lg text-gray-300">
                  <p>
                    Our vision extends beyond just providing tools. We're building a future where AI
                    development is transparent, ethical, and community-driven. Where breakthroughs
                    come not from closed labs, but from collaborative innovation.
                  </p>
                  <p>
                    Join us in our mission to democratize AI and ensure its benefits are shared by all.
                  </p>
                </div>
                <Link to="/join">
                  <motion.button
                    className="mt-8 bg-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Join Our Journey
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        {/* Team Section */}
        <motion.section
          className={`${activeSection !== 'team' && 'hidden'}`}
          {...fadeIn}
        >
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.h2
              className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Brilliant minds united by a passion for democratizing AI technology
            </motion.p>
          </div>

          {/* Leadership Team */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                name: 'Ulvi',
                role: 'CEO & Co-founder/Lead Engineer',
                image: Ulvi,
                bio: 'Former AI Research Lead at DeepMind',
                achievements: ['Ph.D. in Machine Learning', '15+ years in AI', 'Forbes 30 Under 30'],
                linkedin: '#',
                twitter: '#'
              },
              {
                name: 'Nijat',
                role: 'Head of ML & Co-founder/Software engineer',
                image: Nijat,
                bio: 'Previously built scalable AI systems at Google',
                achievements: ['MS in Computer Science', '10+ years in Tech', 'Multiple Patents'],
                linkedin: '#',
                twitter: '#'
              },
              {
                name: 'Eldar',
                role: 'Chief Data Officer and Co-founder',
                image: Eldar,
                bio: 'Pioneer in transformer architecture',
                achievements: ['Ph.D. in AI', 'Published 50+ papers', 'ACM Fellow'],
                linkedin: '#',
                twitter: '#'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-xl" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-4">{member.role}</p>
                <p className="text-gray-300 mb-4">{member.bio}</p>
                <ul className="space-y-2 mb-6">
                  {member.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-center text-gray-400 text-sm">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {achievement}
                    </li>
                  ))}
                </ul>
                <div className="flex space-x-4">
                  <a href={member.linkedin} className="text-gray-400 hover:text-blue-400 transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href={member.twitter} className="text-gray-400 hover:text-blue-400 transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Department Leads */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: 'Emily Chang',
                role: 'Head of Engineering',
                image: 'https://placehold.co/300x300'
              },
              {
                name: 'David Kumar',
                role: 'Head of Product',
                image: 'https://placehold.co/300x300'
              },
              {
                name: 'Lisa Martinez',
                role: 'Head of Research',
                image: 'https://placehold.co/300x300'
              },
              {
                name: 'Alex Thompson',
                role: 'Head of Operations',
                image: 'https://placehold.co/300x300'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover rounded-xl mb-4"
                />
                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          className={`${activeSection !== 'values' && 'hidden'}`}
          {...fadeIn}
        >
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.h2
              className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Core Values
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The principles that guide everything we do
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎯",
                title: "Innovation First",
                description: "We push boundaries and challenge the status quo, constantly seeking new ways to advance AI technology.",
                color: "from-blue-600 to-blue-400"
              },
              {
                icon: "🤝",
                title: "Ethics & Trust",
                description: "We believe in building AI that's transparent, responsible, and aligned with human values.",
                color: "from-purple-600 to-purple-400"
              },
              {
                icon: "🌍",
                title: "Global Impact",
                description: "Our solutions are designed to benefit humanity as a whole, not just a select few.",
                color: "from-green-600 to-green-400"
              },
              {
                icon: "💡",
                title: "Continuous Learning",
                description: "We embrace growth, learning, and adaptation as core principles of our culture.",
                color: "from-yellow-600 to-yellow-400"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden bg-gray-900 rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${value.color}`} />
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>



        {/* Impact Section */}
        {/* Impact Section */}
        <motion.section
          className={`${activeSection !== 'impact' && 'hidden'}`}
          {...fadeIn}
        >
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.h2
              className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Real World Impact
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              How our AI technology is making a difference across industries
            </motion.p>
          </div>

          {/* Impact Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              {
                metric: "500K+",
                label: "AI Models Deployed",
                icon: "🚀",
                color: "text-blue-500"
              },
              {
                metric: "120+",
                label: "Countries Reached",
                icon: "🌍",
                color: "text-green-500"
              },
              {
                metric: "$100M+",
                label: "Research Funded",
                icon: "🔬",
                color: "text-purple-500"
              },
              {
                metric: "50K+",
                label: "Developers Empowered",
                icon: "👩‍💻",
                color: "text-yellow-500"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.metric}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Success Stories */}
          <div className="space-y-16">
            {[
              {
                title: "Revolutionizing Healthcare",
                description: "Our AI models have helped hospitals reduce diagnosis time by 60% while improving accuracy to 99%.",
                image: "https://placehold.co/800x400",
                stats: [
                  { label: "Diagnosis Time Reduced", value: "60%" },
                  { label: "Accuracy Rate", value: "99%" },
                  { label: "Hospitals Using Our AI", value: "500+" }
                ],
                gradient: "from-blue-600 to-blue-400"
              },
              {
                title: "Environmental Protection",
                description: "AI-powered solutions helping organizations reduce their carbon footprint through smart resource optimization.",
                image: "https://placehold.co/800x400",
                stats: [
                  { label: "CO₂ Emissions Reduced", value: "500K tons" },
                  { label: "Energy Saved", value: "30%" },
                  { label: "Companies Impacted", value: "1000+" }
                ],
                gradient: "from-green-600 to-green-400"
              },
              {
                title: "Education Transformation",
                description: "Personalizing learning experiences for millions of students worldwide through adaptive AI technology.",
                image: "https://placehold.co/800x400",
                stats: [
                  { label: "Students Reached", value: "2M+" },
                  { label: "Learning Efficiency", value: "+40%" },
                  { label: "Countries Deployed", value: "50+" }
                ],
                gradient: "from-purple-600 to-purple-400"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                className="grid md:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                  <h3 className="text-3xl font-bold mb-4">{story.title}</h3>
                  <p className="text-gray-300 mb-8">{story.description}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {story.stats.map((stat, i) => (
                      <div key={i} className="bg-gray-800 rounded-lg p-4">
                        <div className={`text-xl font-bold bg-gradient-to-r ${story.gradient} bg-clip-text text-transparent`}>
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <motion.div
                  className={`relative rounded-2xl overflow-hidden ${index % 2 === 0 ? 'order-2' : 'order-1'}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${story.gradient} opacity-20`} />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h3>
            <p className="text-xl text-gray-200 mb-8">
              Join thousands of developers and organizations using our AI platform to create positive change.
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Building Today
            </motion.button>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;