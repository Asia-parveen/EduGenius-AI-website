"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image 
            src="/images/ai.png" 
            width={80} 
            height={80} 
            alt="EduGenius AI Logo" 
            className="rounded-full"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg">
          {['Agent', 'Features', 'Technology', 'Pricing'].map((item, index) => (
            <motion.a 
              key={index} 
              href={`#${item.toLowerCase()}`} 
              className="relative px-4 py-2 hover:text-blue-300 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-300 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Start Learning Button */}
        <div className="hidden md:flex">
          <motion.button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Start Learning
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden flex flex-col items-center space-y-6 py-4 bg-blue-900 text-white"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {['Agent', 'Features', 'Technology', 'Pricing'].map((item, index) => (
            <a 
              key={index} 
              href={`#${item.toLowerCase()}`} 
              className="text-lg hover:text-blue-300 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;




// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-4 px-6 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center ">
//           <Image src="/images/ai.png" width={80} height={80} alt="EduGenius rounded-full " />
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-8 text-lg">
//           {['Agent', 'Features', 'Technology', 'Pricing'].map((item, index) => (
//             <motion.a 
//               key={index} 
//               href={`#${item.toLowerCase()}`} 
//               className="hover:text-blue-300 transition duration-300"
//               whileHover={{ scale: 1.1 }}
//             >
//               {item}
//             </motion.a>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <button 
//           className="md:hidden text-white" 
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={30} /> : <Menu size={30} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <motion.div 
//           className="md:hidden flex flex-col items-center space-y-6 py-4 bg-blue-900 text-white"
//           initial={{ opacity: 0, y: -20 }} 
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           {['Agent', 'Features', 'Technology', 'Pricing'].map((item, index) => (
//             <a 
//               key={index} 
//               href={`#${item.toLowerCase()}`} 
//               className="text-lg hover:text-blue-300 transition duration-300"
//               onClick={() => setIsOpen(false)}
//             >
//               {item}
//             </a>
//           ))}
//         </motion.div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
