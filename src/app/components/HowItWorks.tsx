"use client";

import { motion } from "framer-motion";
import { FaBrain, FaRobot, FaChartLine } from "react-icons/fa";

const steps = [
  {
    icon: <FaBrain className="text-5xl text-purple-400" />, 
    title: "AI-Powered Analysis",
    description: "Our AI deeply analyzes your learning patterns for personalized experiences.",
  },
  {
    icon: <FaRobot className="text-5xl text-blue-400" />, 
    title: "Smart AI Assistance",
    description: "Receive intelligent suggestions and insights to optimize your learning journey.",
  },
  {
    icon: <FaChartLine className="text-5xl text-green-400" />, 
    title: "Performance Tracking",
    description: "Get real-time progress reports and insights for continuous improvement.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white text-center">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        How It Works
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            className="bg-gray-800/40 p-8 rounded-xl shadow-xl backdrop-blur-md border border-gray-700 transition duration-300 transform hover:-translate-y-2 hover:border-sky-400 hover:shadow-sky-500/50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
            <p className="text-lg text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}



