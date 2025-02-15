"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const plans = [
  {
    name: "Basic Plan",
    price: "$19/mo",
    features: ["AI-Powered Assistance", "Personalized Learning", "Basic Analytics"],
    buttonText: "Start Basic",
    color: "from-gray-900 to-gray-700",
  },
  {
    name: "Pro Plan",
    price: "$49/mo",
    features: ["Advanced AI Insights", "Priority Support", "Detailed Reports"],
    buttonText: "Go Pro",
    color: "from-purple-900 to-purple-700",
  },
  {
    name: "Premium Plan",
    price: "$99/mo",
    features: ["Unlimited AI Access", "1-on-1 Expert Support", "Exclusive Features"],
    buttonText: "Go Premium",
    color: "from-blue-900 to-blue-700",
  },
];

export default function PricingPlans() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-black to-gray-900 text-white text-center">
      <h2 className="text-4xl font-extrabold mb-10">Choose Your Plan</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`p-8 rounded-xl shadow-lg bg-gradient-to-br ${plan.color} transform transition-all duration-300 hover:scale-105`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p className="text-3xl font-extrabold mb-6">{plan.price}</p>
            <ul className="mb-6 space-y-3 text-gray-300">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 justify-center">
                  <FaCheckCircle className="text-green-400" /> {feature}
                </li>
              ))}
            </ul>
            <motion.button
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {plan.buttonText}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


