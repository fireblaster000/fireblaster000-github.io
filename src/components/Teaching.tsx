"use client"

import { motion } from "framer-motion"

const Teaching = () => {
  const teachingExperiences = [
    {
      title: "Teaching Assistant for AI-501: Mathematics of AI",
      period: "Aug 2024 – Dec 2024",
      supervisor: "Dr. Zubair Khalid, LUMS",
      responsibilities: [
        "Designed and structured course material for professionals returning to academia.",
        "Assisted 83 students by designing curriculum components tailored to their needs.",
        "Implemented Microsoft Forms to track attendance and participation.",
      ],
    },
    {
      title: "Teaching Assistant for CS-501: Applied Probability",
      period: "Aug 2024 – Dec 2024",
      supervisor: "Dr. Momin Ayub Uppal, LUMS",
      responsibilities: [
        "Conducted weekly tutorials for 83 junior, senior, and graduate-level students.",
        "Graded quizzes and assignments for 83 students, providing detailed feedback.",
        "Co-designed homework assignments on random processes and Gaussian distributions.",
      ],
    },
    {
      title: "Teaching Assistant for CS-331: Introduction to AI",
      period: "Jan 2024 – May 2024",
      supervisor: "Dr. Muhammad Tahir, LUMS",
      responsibilities: [
        "Led 2 tutorial sessions for 30+ students on Regression and Neural Networks.",
        "Designed programming assignments on Regression and Neural Networks.",
        "Assisted in grading mid-term and final exams for 133 students.",
      ],
    },
  ]

  return (
    <section id="teaching" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Teaching Experience
        </motion.h2>
        {teachingExperiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 rounded-lg p-6 shadow-lg mb-8"
          >
            <h3 className="text-2xl font-bold mb-2">{experience.title}</h3>
            <p className="text-lg mb-2">{experience.period}</p>
            <p className="text-gray-300 mb-4">Supervisor: {experience.supervisor}</p>
            <ul className="list-disc list-inside space-y-2">
              {experience.responsibilities.map((responsibility, i) => (
                <li key={i} className="text-gray-300">
                  {responsibility}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Teaching

