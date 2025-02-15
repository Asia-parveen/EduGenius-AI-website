"use client";

import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", performance: 60 },
  { name: "Feb", performance: 72 },
  { name: "Mar", performance: 78 },
  { name: "Apr", performance: 83 },
  { name: "May", performance: 89 },
  { name: "Jun", performance: 94 },
  { name: "Jul", performance: 96 },
];

export default function PerformanceGraph() {
  return (
    <section 
      className="relative py-16 px-6 text-white"
      style={{
        backgroundImage: "url('/images/ai-pattern.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div> {/* Dark overlay for readability */}

      <div className="relative text-center mb-10">
        <motion.h2 
          className="text-3xl font-extrabold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          AI-Powered Performance Insights
        </motion.h2>
        <p className="text-gray-300 mt-2">
          Track your progress with real-time AI analytics.
        </p>
      </div>

      <motion.div 
        className="relative bg-gray-900 bg-opacity-80 p-4 rounded-lg shadow-xl border border-gray-700 mx-auto max-w-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.2)" />
            <XAxis dataKey="name" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip contentStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)", color: "white" }} />
            <Line 
              type="monotone" 
              dataKey="performance" 
              stroke="#0f9d58" 
              strokeWidth={3} 
              dot={{ r: 5, stroke: "#0f9d58", strokeWidth: 2, fill: "#111" }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </section>
  );
}




// "use client";

// import { motion } from "framer-motion";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Jan", performance: 60 },
//   { name: "Feb", performance: 75 },
//   { name: "Mar", performance: 80 },
//   { name: "Apr", performance: 85 },
//   { name: "May", performance: 90 },
//   { name: "Jun", performance: 95 },
//   { name: "Jul", performance: 97 },
// ];

// export default function PerformanceGraph() {
//   return (
//     <section className="py-20 px-6 bg-gradient-to-r from-gray-900 via-purple-900 to-black text-white">
//       <div className="text-center mb-12">
//         <motion.h2 
//           className="text-4xl font-extrabold"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Real-Time Performance Graph
//         </motion.h2>
//         <p className="text-gray-400 mt-2">
//           Track your learning progress with AI-powered insights.
//         </p>
//       </div>

//       <motion.div 
//         className="bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-700"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <ResponsiveContainer width="100%" height={400}>
//           <LineChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 10 }}>
//             <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.2)" />
//             <XAxis dataKey="name" stroke="white" />
//             <YAxis stroke="white" />
//             <Tooltip contentStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)", color: "white" }} />
//             <Line type="monotone" dataKey="performance" stroke="#82ca9d" strokeWidth={3} dot={{ r: 6, stroke: "#82ca9d", strokeWidth: 2, fill: "#111" }} />
//           </LineChart>
//         </ResponsiveContainer>
//       </motion.div>
//     </section>
//   );
// }

