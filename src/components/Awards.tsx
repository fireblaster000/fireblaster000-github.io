"use client"

import { motion } from "framer-motion"

const Awards = () => {
  const awards = [
    {
      title: "Dean's Honor List",
      period: "August 2022 – May 2025",
      description: "Awarded annually to students maintaining a GPA of 3.6 or higher at the end of each academic year.",
    },
    {
      title: "Recipient of 100% Scholarship",
      period: "August 2022 – May 2023",
      description: "Awarded to the top 3 students from each school at LUMS.",
    },
    {
      title: "Recipient of 50% Scholarship",
      period: "August 2023 – May 2025",
      description: "Awarded to the top 15 students from each school at LUMS.",
    },
  ]

  return (
    <section id="awards" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center gradient-text"
        >
          Awards and Honors
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 bg-opacity-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-400">{award.title}</h3>
              <p className="text-lg mb-2 text-purple-400">{award.period}</p>
              <p className="text-gray-300">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards

