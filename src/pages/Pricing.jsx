// sentientmind/src/pages/Pricing.jsx
import { motion } from "framer-motion";
import { useState } from "react";

function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [showComparison, setShowComparison] = useState(false);

  const pricingPlans = {
    monthly: [
      {
        name: "Starter",
        price: "$29",
        priceDetail: "per month",
        description: "Perfect for individuals and small projects",
        features: [
          "10,000 API calls/month",
          "2 AI models included",
          "Basic analytics",
          "Community support",
          "99.9% uptime SLA",
          "Basic rate limiting",
          "REST API access"
        ],
        limits: {
          requestsPerMinute: "60 requests/minute",
          maxTokens: "4,096 tokens per request",
          models: ["GPT-3.5", "DALL-E 2"]
        },
        highlighted: false,
        ctaText: "Start Free Trial"
      },
      {
        name: "Professional",
        price: "$99",
        priceDetail: "per month",
        description: "Ideal for growing businesses and teams",
        features: [
          "50,000 API calls/month",
          "All AI models included",
          "Advanced analytics dashboard",
          "Priority email support",
          "99.99% uptime SLA",
          "Advanced rate limiting",
          "REST & GraphQL API access",
          "Custom webhooks",
          "Team management"
        ],
        limits: {
          requestsPerMinute: "300 requests/minute",
          maxTokens: "8,192 tokens per request",
          models: ["GPT-4", "GPT-3.5", "DALL-E 2", "Custom Models"]
        },
        highlighted: true,
        ctaText: "Get Started"
      },
      {
        name: "Enterprise",
        price: "Custom",
        priceDetail: "contact sales",
        description: "For large-scale applications and custom needs",
        features: [
          "Unlimited API calls",
          "Custom model training",
          "Enterprise analytics",
          "24/7 priority support",
          "99.999% uptime SLA",
          "Custom rate limits",
          "Dedicated infrastructure",
          "Custom security controls",
          "MSA & custom contracts",
          "Technical account manager"
        ],
        limits: {
          requestsPerMinute: "Unlimited",
          maxTokens: "32,768 tokens per request",
          models: ["All Models", "Custom Training", "Private Models"]
        },
        highlighted: false,
        ctaText: "Contact Sales"
      }
    ],
    annual: [
      {
        name: "Starter",
        price: "$290",
        priceDetail: "per year",
        description: "Perfect for individuals and small projects",
        features: [
          "10,000 API calls/month",
          "2 AI models included",
          "Basic analytics",
          "Community support",
          "99.9% uptime SLA",
          "Basic rate limiting",
          "REST API access"
        ],
        limits: {
          requestsPerMinute: "60 requests/minute",
          maxTokens: "4,096 tokens per request",
          models: ["GPT-3.5", "DALL-E 2"]
        },
        highlighted: false,
        ctaText: "Start Free Trial"
      },
      {
        name: "Professional",
        price: "$990",
        priceDetail: "per year",
        description: "Ideal for growing businesses and teams",
        features: [
          "50,000 API calls/month",
          "All AI models included",
          "Advanced analytics dashboard",
          "Priority email support",
          "99.99% uptime SLA",
          "Advanced rate limiting",
          "REST & GraphQL API access",
          "Custom webhooks",
          "Team management"
        ],
        limits: {
          requestsPerMinute: "300 requests/minute",
          maxTokens: "8,192 tokens per request",
          models: ["GPT-4", "GPT-3.5", "DALL-E 2", "Custom Models"]
        },
        highlighted: true,
        ctaText: "Get Started"
      },
      {
        name: "Enterprise",
        price: "Custom",
        priceDetail: "contact sales",
        description: "For large-scale applications and custom needs",
        features: [
          "Unlimited API calls",
          "Custom model training",
          "Enterprise analytics",
          "24/7 priority support",
          "99.999% uptime SLA",
          "Custom rate limits",
          "Dedicated infrastructure",
          "Custom security controls",
          "MSA & custom contracts",
          "Technical account manager"
        ],
        limits: {
          requestsPerMinute: "Unlimited",
          maxTokens: "32,768 tokens per request",
          models: ["All Models", "Custom Training", "Private Models"]
        },
        highlighted: false,
        ctaText: "Contact Sales"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.h1 
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Simple, Transparent Pricing
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Choose the perfect plan for your needs. All plans include a 14-day free trial.
        </motion.p>
      </div>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-16">
        <motion.div 
          className="bg-gray-800 p-1 rounded-xl inline-flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              billingCycle === 'monthly' ? 'bg-blue-600 text-white' : 'text-gray-400'
            }`}
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              billingCycle === 'annual' ? 'bg-blue-600 text-white' : 'text-gray-400'
            }`}
            onClick={() => setBillingCycle('annual')}
          >
            Annual (Save 20%)
          </button>
        </motion.div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans[billingCycle].map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-black border ${
                plan.highlighted ? 'border-blue-500' : 'border-gray-800'
              } rounded-2xl p-8 hover:border-blue-500 transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
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
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">Features</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
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

              <button
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                {plan.ctaText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-24 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="grid gap-6">
          {[
            {
              question: "How does the free trial work?",
              answer: "All plans come with a 14-day free trial. No credit card required. You'll get full access to all features during the trial period."
            },
            {
              question: "Can I change plans later?",
              answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated."
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards, PayPal, and wire transfers for enterprise customers."
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center mt-24">
        <h2 className="text-2xl font-bold mb-4">Need Something Custom?</h2>
        <p className="text-gray-400 mb-8">Contact our sales team for custom enterprise solutions.</p>
        <button className="bg-blue-600 px-8 py-3 rounded-lg hover:bg-blue-700 transition">
          Contact Sales
        </button>
      </div>
    </div>
  );
}

export default Pricing;