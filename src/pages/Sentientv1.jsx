// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import ellipse from "../../public/explosion.jpg";

// const FeatureCard = ({ title, description, icon }) => (
//   <motion.div
//     className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-2xl border border-gray-700/50"
//     whileHover={{ scale: 1.05 }}
//     transition={{ duration: 0.3 }}
//   >
//     <div className="text-blue-400 mb-4 text-3xl">{icon}</div>
//     <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//       {title}
//     </h3>
//     <p className="text-gray-300">{description}</p>
//   </motion.div>
// );

// const SentientV1 = () => {
//   return (
//     <div className="bg-black text-white min-h-screen">
//       {/* Hero Section */}
//       <section className="relative w-full py-32 px-6">
//         <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
//         <div className="relative max-w-7xl mx-auto">
//           <div className="flex flex-col lg:flex-row items-center gap-12">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="lg:w-1/2"
//             >
//               <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//                 Sentient v1
//               </h1>
//               <p className="text-xl text-gray-300 mb-8 leading-relaxed">
//                 Our flagship AI model pushing the boundaries of artificial intelligence with unprecedented 
//                 capabilities in natural language processing and problem-solving.
//               </p>
//               <div className="flex gap-4">
//                 <Link
//                   to="/contact"
//                   className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
//                 >
//                   Request Demo
//                 </Link>
//                 <Link
//                   to="/contact"
//                   className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
//                 >
//                   Contact Sales
//                 </Link>
//               </div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="lg:w-1/2"
//             >
//               <img 
//                 src={ellipse} 
//                 alt="Sentient V1" 
//                 className="rounded-2xl shadow-2xl border border-gray-700/50"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-24 px-6">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Advanced Capabilities
//             </h2>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Experience the next generation of AI with our most advanced language model yet.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <FeatureCard
//               icon={<i className="fas fa-brain" />}
//               title="Advanced NLP"
//               description="State-of-the-art natural language processing capabilities for human-like understanding and generation."
//             />
//             <FeatureCard
//               icon={<i className="fas fa-bolt" />}
//               title="Real-time Processing"
//               description="Lightning-fast response times with our optimized infrastructure and processing capabilities."
//             />
//             <FeatureCard
//               icon={<i className="fas fa-shield-alt" />}
//               title="Enterprise Security"
//               description="Bank-grade security measures ensuring your data remains protected and confidential."
//             />
//             <FeatureCard
//               icon={<i className="fas fa-chart-line" />}
//               title="Scalable Performance"
//               description="Easily scale from prototype to production with our enterprise-ready infrastructure."
//             />
//             <FeatureCard
//               icon={<i className="fas fa-cogs" />}
//               title="Customizable"
//               description="Tailor the model to your specific industry needs with our fine-tuning capabilities."
//             />
//             <FeatureCard
//               icon={<i className="fas fa-plug" />}
//               title="Easy Integration"
//               description="Seamlessly integrate with your existing systems through our comprehensive API."
//             />
//           </div>
//         </div>
//       </section>

//       {/* Technical Specs Section */}
//       <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Technical Specifications
//             </h2>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-8">
//             <motion.div
//               className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50"
//               whileHover={{ scale: 1.02 }}
//             >
//               <h3 className="text-2xl font-bold mb-4">Model Architecture</h3>
//               <ul className="space-y-3 text-gray-300">
//                 <li>• 175 billion parameters</li>
//                 <li>• Transformer-based architecture</li>
//                 <li>• Multi-modal processing capabilities</li>
//                 <li>• Advanced attention mechanisms</li>
//               </ul>
//             </motion.div>
//             <motion.div
//               className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50"
//               whileHover={{ scale: 1.02 }}
//             >
//               <h3 className="text-2xl font-bold mb-4">Performance Metrics</h3>
//               <ul className="space-y-3 text-gray-300">
//                 <li>• 99.9% uptime guarantee</li>
//                 <li>• 50ms average response time</li>
//                 <li>• 1M+ requests per second</li>
//                 <li>• 95% accuracy in task completion</li>
//               </ul>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 px-6 bg-gradient-to-t from-blue-900/20 to-black">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-6">Ready to Experience Sentient V1?</h2>
//           <p className="text-xl text-gray-300 mb-8">
//             Join leading organizations already leveraging our AI solutions to drive innovation and growth.
//           </p>
//           <Link 
//             to="/contact"
//             className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-10 py-4 rounded-full text-white font-semibold hover:opacity-90 transition"
//           >
//             Schedule a Demo
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SentientV1;