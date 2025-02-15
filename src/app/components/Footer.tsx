"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <motion.h2
            className="text-3xl font-extrabold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            EduGenius AI
          </motion.h2>

          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-gray-400">
              <li className="hover:text-sky-400 transition duration-300">
                <a href="#">Home</a>
              </li>
            
              <li className="hover:text-sky-400 transition duration-300">
                <a href="#">Technology</a>
              </li>
              <li className="hover:text-sky-400 transition duration-300">
                <a href="#">Feature</a>
              </li>
              <li className="hover:text-sky-400 transition duration-300">
                <a href="#">Pricing</a>
              </li>
              <li className="hover:text-sky-400 transition duration-300">
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Asia Parveen EduGenius AI. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-sky-400 transition duration-300"
            >
              <FaFacebook size={24} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-sky-400 transition duration-300"
            >
              <FaTwitter size={24} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-sky-400 transition duration-300"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-sky-400 transition duration-300"
            >
              <FaGithub size={24} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}

