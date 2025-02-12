"use client"

import { motion } from "framer-motion"
import { FaGraduationCap, FaLaptopCode, FaChartLine } from "react-icons/fa"

const About = () => {
  const aboutItems = [
    {
      icon: <FaGraduationCap className="text-4xl text-blue-400" />,
      title: "Top Academic Performer",
      description: "Ranked in the top 2% of my class with a GPA of 3.99/4.00 at LUMS.",
    },
    {
      icon: <FaLaptopCode className="text-4xl text-green-400" />,
      title: "Passionate Researcher",
      description: "Focused on Machine Learning, Deep Learning, and Computer Vision.",
    },
    {
      icon: <FaChartLine className="text-4xl text-purple-400" />,
      title: "Innovation Leader",
      description: "Promoting STEM education and fostering a culture of innovation through leadership roles.",
    },
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center gradient-text"
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 bg-opacity-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                {item.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

