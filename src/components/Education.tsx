"use client"

import { motion } from "framer-motion"

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center gradient-text"
        >
          Education
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gray-800 bg-opacity-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold mb-2 text-blue-400">Lahore University of Management Sciences (LUMS)</h3>
            <p className="text-xl mb-2 text-gray-300">B.S. Computer Science with Minor in Computational Finance</p>
            <p className="text-lg mb-4 text-gray-400">August 2021 – May 2025</p>
            <ul className="list-disc list-inside space-y-2">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-300"
              >
                GPA: 3.99/4.00
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-300"
              >
                Rank: Top 2% of both BS and BS Computer Science Class of 2025
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-gray-300"
              >
                Coursework: Advanced Machine Learning, Deep Learning, Computer Vision, Generative AI for Speech and
                Language Processing, Algorithms, Operating Systems, Applied Probability, Quantitative Finance, Portfolio
                Management, Large Language Model Systems
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education

