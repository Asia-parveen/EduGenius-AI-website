"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sophia Carter",
    role: "AI Researcher",
    text: "&ldquo;EduGenius AI transformed the way I learn. The adaptive insights are truly revolutionary.&rdquo;",
    image: "/images/clnt.png",
  },
  {
    name: "Daniel Lee",
    role: "Software Engineer",
    text: "&ldquo;The AI-driven analytics helped me track my progress and optimize my learning.&rdquo;",
    image: "/images/clnt2.png",
  },
  {
    name: "Emma Wilson",
    role: "Data Scientist",
    text: "&ldquo;An exceptional AI-powered platform that provides personalized education efficiently.&rdquo;",
    image: "/images/clnt3.png",
  },
];

export default function ClientTestimonials() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white text-center">
      <h2 className="text-4xl font-extrabold mb-10">What Our Clients Say</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="p-8 rounded-xl shadow-lg bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 transform transition-all duration-300 hover:scale-105 hover:border hover:border-sky-400"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="flex items-center justify-center mb-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={64}
                height={64}
                className="w-16 h-16 rounded-full border-2 border-gray-500 shadow-md"
              />
            </div>
            <FaQuoteLeft className="text-gray-400 text-3xl mb-3 mx-auto" />
            <p className="text-gray-300 italic mb-4">{testimonial.text}</p>
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-400">{testimonial.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}




// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { FaQuoteLeft } from "react-icons/fa";

// const testimonials = [
//   {
//     name: "Sophia Carter",
//     role: "AI Researcher",
//     text: "EduGenius AI transformed the way I learn The adaptive insights are truly revolutionary.",
//     image: "/images/clnt.png",
//   },
//   {
//     name: "Daniel Lee",
//     role: "Software Engineer",
//     text: "The AI-driven analytics helped me track my progress and optimize my learning.",
//     image: "/images/clnt.png",
//   },
//   {
//     name: "Emma Wilson",
//     role: "Data Scientist",
//     text: "An exceptional AI-powered platform that provides personalized education efficiently.",
//     image: "/images/clnt.png",
//   },
// ];

// export default function ClientTestimonials() {
//   return (
//     <section className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white text-center">
//       <h2 className="text-4xl font-extrabold mb-10">What Our Clients Say</h2>
//       <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto">
//         {testimonials.map((testimonial, index) => (
//           <motion.div
//             key={index}
//             className="p-8 rounded-xl shadow-lg bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 transform transition-all duration-300 hover:scale-105 hover:border hover:border-sky-400"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: index * 0.2 }}
//           >
//             <div className="flex items-center justify-center mb-4">
//               <Image
//                 src={testimonial.image}
//                 alt={testimonial.name}
//                 width={64}
//                 height={64}
//                 className="w-16 h-16 rounded-full border-2 border-gray-500 shadow-md"
//               />
//             </div>
//             <FaQuoteLeft className="text-gray-400 text-3xl mb-3 mx-auto" />
//             <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
//             <h3 className="text-lg font-semibold">{testimonial.name}</h3>
//             <p className="text-sm text-gray-400">{testimonial.role}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


