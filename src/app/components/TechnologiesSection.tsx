"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaJs, FaRobot, FaBrain, FaCloud } from "react-icons/fa";

const technologies = [
  { name: "React.js", icon: <FaReact className="text-blue-400 text-5xl" />, description: "A JavaScript library for building user interfaces." },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" />, description: "A runtime environment for executing JavaScript server-side." },
  { name: "Python", icon: <FaPython className="text-yellow-400 text-5xl" />, description: "A versatile programming language for AI & data science." },
  { name: "Java", icon: <FaJava className="text-red-500 text-5xl" />, description: "A powerful language for enterprise and Android development." },
  { name: "MongoDB", icon: <FaDatabase className="text-green-400 text-5xl" />, description: "A NoSQL database designed for modern web applications." },
  { name: "JavaScript", icon: <FaJs className="text-yellow-300 text-5xl" />, description: "The backbone of dynamic web development." },
  { name: "AI Robotics", icon: <FaRobot className="text-purple-400 text-5xl" />, description: "Advanced robotics powered by AI and automation." },
  { name: "Machine Learning", icon: <FaBrain className="text-blue-500 text-5xl" />, description: "Training models for predictive intelligence and automation." },
  { name: "Cloud AI", icon: <FaCloud className="text-cyan-400 text-5xl" />, description: "Scalable AI-powered cloud computing solutions." },
];

export default function TechnologiesSection() {
  return (
    <section 
      className="relative py-16 px-6 text-white bg-gradient-to-br from-purple-800 via-blue-500 to-cyan-400"
      style={{
        backgroundImage: "url('/images/ai-gradient.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div> {/* Overlay for readability */}

      <div className="relative text-center mb-10">
        <motion.h2 
          className="text-3xl font-extrabold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Cutting-Edge Technologies & AI Tools
        </motion.h2>
        <p className="text-gray-300 mt-2">
          Leveraging the latest tools for AI-driven innovation.
        </p>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {technologies.map((tech, index) => (
          <motion.div 
            key={index}
            className="bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-xl border border-gray-700 flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-purple-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(128, 0, 128, 0.6)" }}
          >
            {tech.icon}
            <h3 className="mt-4 text-xl font-semibold">{tech.name}</h3>
            <p className="text-gray-300 mt-2">{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}




// "use client";

// import { motion } from "framer-motion";
// import { FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaJs } from "react-icons/fa";

// const technologies = [
//   { name: "React.js", icon: <FaReact className="text-blue-400 text-5xl" />, description: "A JavaScript library for building user interfaces." },
//   { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" />, description: "A runtime environment for executing JavaScript server-side." },
//   { name: "Python", icon: <FaPython className="text-yellow-400 text-5xl" />, description: "A versatile programming language for AI & data science." },
//   { name: "Java", icon: <FaJava className="text-red-500 text-5xl" />, description: "A powerful language for enterprise and Android development." },
//   { name: "MongoDB", icon: <FaDatabase className="text-green-400 text-5xl" />, description: "A NoSQL database designed for modern web applications." },
//   { name: "JavaScript", icon: <FaJs className="text-yellow-300 text-5xl" />, description: "The backbone of dynamic web development." },
// ];

// export default function TechnologiesSection() {
//   return (
//     <section 
//       className="relative py-16 px-6 text-white"
//       style={{
//         backgroundImage: "url('/images/ai-gradient.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-60"></div> {/* Overlay for readability */}

//       <div className="relative text-center mb-10">
//         <motion.h2 
//           className="text-3xl font-extrabold"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Cutting-Edge Technologies We Use
//         </motion.h2>
//         <p className="text-gray-300 mt-2">
//           Leveraging the latest tools for AI-driven innovation.
//         </p>
//       </div>

//       <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
//         {technologies.map((tech, index) => (
//           <motion.div 
//             key={index}
//             className="bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-xl border border-gray-700 flex flex-col items-center text-center"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             viewport={{ once: true }}
//           >
//             {tech.icon}
//             <h3 className="mt-4 text-xl font-semibold">{tech.name}</h3>
//             <p className="text-gray-300 mt-2">{tech.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
