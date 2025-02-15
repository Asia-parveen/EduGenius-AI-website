"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-10">
          Get in Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side - Contact Info */}
          <motion.div
            className="space-y-6 bg-gray-900 p-8 rounded-xl shadow-md border border-gray-700"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-sky-400 text-2xl" />
              <p className="text-gray-300">North nazmabad, karachi City, Pakistan</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-sky-400 text-2xl" />
              <p className="text-gray-300">beautyhealthytips177@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-sky-400 text-2xl" />
              <p className="text-gray-300">0305-1234567</p>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.form
            className="bg-gray-900 p-8 rounded-xl shadow-md border border-gray-700"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Message</label>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 text-white"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

