// sentientmind/src/pages/Api.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import apiImg from "/apiImg.png";

export default function ApiPage() {
    const [selectedPlan, setSelectedPlan] = useState('monthly');

    const pricingPlans = {
        monthly: [
            {
                name: "Developer",
                price: "$29",
                priceDetail: "per month",
                description: "Perfect for individual developers and small projects",
                requests: "10,000 requests/month",
                computeUnits: "1,000 compute units",
                features: [
                    "Access to Core AI Models",
                    "99.9% Uptime SLA",
                    "Basic API Analytics",
                    "Community Support",
                    "Standard API Limits",
                    "Basic Documentation Access",
                    "Pay-as-you-go Option"
                ],
                limits: {
                    requestsPerMinute: "60 requests/minute",
                    maxTokens: "4,096 tokens per request",
                    models: ["GPT-3.5", "DALL-E 2"]
                }
            },
            {
                name: "Business",
                price: "$99",
                priceDetail: "per month",
                description: "Ideal for growing businesses and teams",
                requests: "50,000 requests/month",
                computeUnits: "5,000 compute units",
                features: [
                    "Access to All AI Models",
                    "99.99% Uptime SLA",
                    "Advanced Analytics Dashboard",
                    "Priority Email Support",
                    "Higher API Limits",
                    "Full Documentation Access",
                    "Team Management",
                    "Custom Integration Support"
                ],
                limits: {
                    requestsPerMinute: "300 requests/minute",
                    maxTokens: "8,192 tokens per request",
                    models: ["GPT-4", "GPT-3.5", "DALL-E 2", "Custom Models"]
                },
                recommended: true
            },
            {
                name: "Enterprise",
                price: "Custom",
                priceDetail: "contact sales",
                description: "For large-scale applications and custom needs",
                requests: "Unlimited requests",
                computeUnits: "Custom allocation",
                features: [
                    "Full API Access",
                    "99.999% Uptime SLA",
                    "Enterprise Analytics",
                    "24/7 Priority Support",
                    "Unlimited API Calls",
                    "Custom Model Training",
                    "Dedicated Account Manager",
                    "Custom Security Controls",
                    "On-premises Deployment Option"
                ],
                limits: {
                    requestsPerMinute: "Unlimited",
                    maxTokens: "32,768 tokens per request",
                    models: ["All Models", "Custom Training", "Private Models"]
                }
            }
        ],
        annual: [
            {
                name: "Developer",
                price: "$290",
                priceDetail: "per year",
                description: "Perfect for individual developers and small projects",
                requests: "10,000 requests/month",
                computeUnits: "1,000 compute units",
                features: [
                    "Access to Core AI Models",
                    "99.9% Uptime SLA",
                    "Basic API Analytics",
                    "Community Support",
                    "Standard API Limits",
                    "Basic Documentation Access",
                    "Pay-as-you-go Option"
                ],
                limits: {
                    requestsPerMinute: "60 requests/minute",
                    maxTokens: "4,096 tokens per request",
                    models: ["GPT-3.5", "DALL-E 2"]
                }
            },
            {
                name: "Business",
                price: "$990",
                priceDetail: "per year",
                description: "Ideal for growing businesses and teams",
                requests: "50,000 requests/month",
                computeUnits: "5,000 compute units",
                features: [
                    "Access to All AI Models",
                    "99.99% Uptime SLA",
                    "Advanced Analytics Dashboard",
                    "Priority Email Support",
                    "Higher API Limits",
                    "Full Documentation Access",
                    "Team Management",
                    "Custom Integration Support"
                ],
                limits: {
                    requestsPerMinute: "300 requests/minute",
                    maxTokens: "8,192 tokens per request",
                    models: ["GPT-4", "GPT-3.5", "DALL-E 2", "Custom Models"]
                },
                recommended: true
            },
            {
                name: "Enterprise",
                price: "Custom",
                priceDetail: "contact sales",
                description: "For large-scale applications and custom needs",
                requests: "Unlimited requests",
                computeUnits: "Custom allocation",
                features: [
                    "Full API Access",
                    "99.999% Uptime SLA",
                    "Enterprise Analytics",
                    "24/7 Priority Support",
                    "Unlimited API Calls",
                    "Custom Model Training",
                    "Dedicated Account Manager",
                    "Custom Security Controls",
                    "On-premises Deployment Option"
                ],
                limits: {
                    requestsPerMinute: "Unlimited",
                    maxTokens: "32,768 tokens per request",
                    models: ["All Models", "Custom Training", "Private Models"]
                }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
            {/* Hero Section */}
            <motion.section
                className="pt-24 px-4 md:px-8 lg:px-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <motion.h1
                            className="text-6xl font-bold mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Build with Our API
                        </motion.h1>
                        <motion.p
                            className="text-xl text-gray-300 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Access state-of-the-art AI models through our simple and powerful API.
                            Build innovative applications with industry-leading performance and reliability.
                        </motion.p>
                        <motion.div
                            className="flex space-x-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Link to="/signup">
                                <button className="bg-blue-600 px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                                    Get API Key
                                </button>
                            </Link>
                            <Link to="/docs">
                                <button className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition">
                                    View Documentation
                                </button>
                            </Link>
                        </motion.div>
                    </div>
                    <motion.div
                        className="md:w-1/2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src={apiImg} alt="API Illustration" className="w-full rounded-lg shadow-2xl" />
                    </motion.div>
                </div>
            </motion.section>
            {/* Features Section */}
            {/* Features Section */}
            <motion.section
                className="py-24 px-4 md:px-8 lg:px-16 bg-black"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-5xl font-bold mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            API Features
                        </motion.h2>
                        <motion.p
                            className="text-xl text-gray-400"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Everything you need to build powerful AI applications
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "High Performance",
                                description: "Experience lightning-fast response times with our globally distributed infrastructure",
                                icon: "⚡",
                                features: [
                                    "99.9% uptime guarantee",
                                    "Global CDN distribution",
                                    "Average 100ms response time",
                                    "Automatic load balancing"
                                ],
                                gradient: "from-blue-600 to-blue-400"
                            },
                            {
                                title: "Enterprise Security",
                                description: "Bank-grade security with advanced encryption and compliance measures",
                                icon: "🔒",
                                features: [
                                    "SOC 2 Type II certified",
                                    "End-to-end encryption",
                                    "API key authentication",
                                    "Rate limiting & DDoS protection"
                                ],
                                gradient: "from-purple-600 to-purple-400"
                            },
                            {
                                title: "Infinite Scalability",
                                description: "Built to handle millions of requests with automatic scaling",
                                icon: "📈",
                                features: [
                                    "Auto-scaling infrastructure",
                                    "Zero downtime updates",
                                    "Horizontal scaling",
                                    "Usage-based optimization"
                                ],
                                gradient: "from-green-600 to-green-400"
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="relative overflow-hidden bg-gray-900 rounded-2xl border border-gray-800 hover:border-blue-500 transition-all duration-500"
                                whileHover={{
                                    y: -10,
                                    transition: { duration: 0.3 }
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 opacity-5 bg-gradient-to-br ${feature.gradient}`} />

                                {/* Content */}
                                <div className="relative p-8">
                                    {/* Icon */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center">
                                            <span className="text-4xl mr-4">{feature.icon}</span>
                                            <h3 className="text-2xl font-bold">{feature.title}</h3>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-400 mb-8 text-lg">
                                        {feature.description}
                                    </p>

                                    {/* Feature List */}
                                    <ul className="space-y-4">
                                        {feature.features.map((item, i) => (
                                            <li key={i} className="flex items-center text-gray-300">
                                                <svg
                                                    className={`w-5 h-5 mr-3 ${feature.gradient.includes('blue') ? 'text-blue-500' :
                                                        feature.gradient.includes('purple') ? 'text-purple-500' : 'text-green-500'}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Learn More Link */}
                                    <div className="mt-8">
                                        <a
                                            href="#"
                                            className={`inline-flex items-center text-sm font-semibold ${feature.gradient.includes('blue') ? 'text-blue-400 hover:text-blue-300' :
                                                    feature.gradient.includes('purple') ? 'text-purple-400 hover:text-purple-300' :
                                                        'text-green-400 hover:text-green-300'
                                                } transition-colors duration-300`}
                                        >
                                            Learn more
                                            <svg
                                                className="w-4 h-4 ml-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
            {/* Pricing Section */}
            <motion.section
                className="py-24 px-4 md:px-8 lg:px-16 bg-black"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="max-w-8xl mx-auto">
                    <h2 className="text-5xl font-bold mb-4 text-center">Pricing Plans</h2>
                    <p className="text-xl text-gray-400 text-center mb-12">Choose the perfect plan for your needs</p>

                    {/* Pricing Toggle */}
                    <div className="flex justify-center mb-16">
                        <div className="bg-gray-900 p-1 rounded-xl border border-gray-800">
                            <button
                                className={`px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${selectedPlan === 'monthly'
                                        ? 'bg-blue-600 text-white'
                                        : 'text-gray-400 hover:text-white'
                                    }`}
                                onClick={() => setSelectedPlan('monthly')}
                            >
                                Monthly
                            </button>
                            <button
                                className={`px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${selectedPlan === 'annual'
                                        ? 'bg-blue-600 text-white'
                                        : 'text-gray-400 hover:text-white'
                                    }`}
                                onClick={() => setSelectedPlan('annual')}
                            >
                                Annual (20% off)
                            </button>
                        </div>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                        {pricingPlans[selectedPlan].map((plan, index) => (
                            <motion.div
                                key={index}
                                className={`bg-gray-900 border ${plan.recommended ? 'border-blue-500' : 'border-gray-800'} 
                                          rounded-2xl p-8 hover:border-blue-500 transition-all duration-300
                                          flex flex-col min-h-[800px] relative`}
                                whileHover={{ y: -10 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {plan.recommended && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                                            Recommended
                                        </span>
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                    <p className="text-gray-400 mb-4">{plan.description}</p>
                                    <div className="flex items-baseline mb-4">
                                        <span className="text-5xl font-bold">{plan.price}</span>
                                        <span className="text-gray-400 ml-2">{plan.priceDetail}</span>
                                    </div>
                                    <div className="text-gray-400 mb-6">
                                        <div>{plan.requests}</div>
                                        <div>{plan.computeUnits}</div>
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <div className="mb-8">
                                        <h4 className="text-lg font-semibold mb-4">Features</h4>
                                        <ul className="space-y-3">
                                            {plan.features.map((feature, i) => (
                                                <li key={i} className="flex items-center text-gray-300">
                                                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="text-lg font-semibold mb-4">Rate Limits</h4>
                                        <ul className="space-y-2 text-gray-400">
                                            <li>• {plan.limits.requestsPerMinute}</li>
                                            <li>• {plan.limits.maxTokens}</li>
                                            <li>• Available Models:</li>
                                            <ul className="ml-4">
                                                {plan.limits.models.map((model, i) => (
                                                    <li key={i}>- {model}</li>
                                                ))}
                                            </ul>
                                        </ul>
                                    </div>
                                </div>

                                <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 
                                    ${plan.recommended
                                        ? 'bg-blue-600 hover:bg-blue-700'
                                        : 'bg-gray-800 hover:bg-gray-700'}`}>
                                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Code Example Section */}
            <section className="py-20 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">Simple Integration</h2>
                    <motion.div
                        className="bg-gray-900 p-8 rounded-2xl border border-gray-800"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <pre className="language-javascript overflow-x-auto">
                            <code className="text-gray-300">
                                {`// Example API Usage
const response = await fetch('https://api.valkyrie.ai/v1/generate', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        prompt: "Your prompt here",
        max_tokens: 100,
        temperature: 0.7
    })
});

const data = await response.json();
console.log(data.choices[0].text);`}
                            </code>
                        </pre>
                    </motion.div>
                </div>
            </section>

            {/* Call to Action */}
            <motion.section
                className="py-20 px-4 md:px-8 lg:px-16 bg-blue-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-xl mb-8">Create your account now and start building with our API</p>
                    <Link to="/signup">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition">
                            Sign Up Now
                        </button>
                    </Link>
                </div>
            </motion.section>
        </div>
    );
}