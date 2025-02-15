"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-16 md:px-10 md:py-20 bg-gradient-to-r from-gray-900 via-purple-900 to-black text-white">
      <div className="max-w-2xl text-center md:text-left md:mr-6">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Revolutionize Your Learning Journey with AI
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-300 mb-4 md:mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          EduGenius AI adapts to your unique learning style, providing personalized education that evolves with you. Experience the future of learning today.
        </motion.p>
        <motion.button
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Start Free Trial
        </motion.button>
      </div>
      <motion.div 
        className="mt-8 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <Image src="/images/robo.png" width={450} height={350} alt="Genius AI Resolution" className="rounded-lg shadow-xl" />
      </motion.div>
    </section>
  );
}




// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function HeroSection() {
//   return (
//     <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-gradient-to-r from-gray-900 via-purple-900 to-black text-white">
//       <div className="max-w-2xl text-center md:text-left">
//         <motion.h1
//           className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-white"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Revolutionize Your Learning Journey with AI
//         </motion.h1>
//         <motion.p 
//           className="text-lg text-gray-300 mb-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           EduGenius AI adapts to your unique learning style, providing personalized education that evolves with you. Experience the future of learning today.
//         </motion.p>
//         <motion.button
//           className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-transform duration-300"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           Start Free Trial
//         </motion.button>
//       </div>
//       <motion.div 
//         initial={{ opacity: 0, scale: 0.8 }} 
//         animate={{ opacity: 1, scale: 1 }} 
//         transition={{ duration: 1 }}
//       >
//         <Image src="/images/robo.png" width={500} height={400} alt="Genius AI Resolution" className="rounded-lg shadow-xl" />
//       </motion.div>
//     </section>
//   );
// }



