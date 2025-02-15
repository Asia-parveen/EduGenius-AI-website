"use client";

import { motion } from "framer-motion";
import { Brain, Target, Layers, Sparkles, Lightbulb, Users } from "lucide-react";

const features = [
  {
    icon: <Target size={40} className="text-blue-500" />,
    title: "Smart Goal Setting",
    description: "Set and track educational goals with AI-assisted planning and progress monitoring.",
  },
  {
    icon: <Brain size={40} className="text-purple-500" />,
    title: "AI-Powered Learning",
    description: "Personalized learning experiences tailored to your unique pace and preferences.",
  },
  {
    icon: <Layers size={40} className="text-green-500" />,
    title: "Multi-Layered Assistance",
    description: "Receive step-by-step guidance and explanations for complex topics.",
  },
  {
    icon: <Sparkles size={40} className="text-yellow-500" />,
    title: "Interactive AI Tutor",
    description: "Get instant answers and interactive explanations powered by AI-driven tutoring.",
  },
  {
    icon: <Lightbulb size={40} className="text-orange-500" />,
    title: "AI Insights & Analytics",
    description: "Gain deep insights into your learning progress with AI-generated analytics.",
  },
  {
    icon: <Users size={40} className="text-red-500" />,
    title: "Collaborative Learning",
    description: "Engage in AI-facilitated group learning with real-time collaboration.",
  },
];

export default function FeatureSection() {
  return (
    <section className="py-20 px-6 bg-gray-900 text-white">
      <div className="text-center mb-12">
        <motion.h2 
          className="text-4xl font-extrabold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Powerful AI Features
        </motion.h2>
        <p className="text-gray-400 mt-2">
          Discover how AI can enhance your learning experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-start space-y-4 border border-gray-700 hover:border-blue-500 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-3 bg-gray-700 rounded-full">{feature.icon}</div>
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
