"use client"

import { motion } from "framer-motion"

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "TypeScript", "JavaScript", "C/C++", "SQL", "Haskell", "HTML/CSS"],
    },
    {
      title: "Developer Tools",
      skills: ["Git", "Docker", "Valgrind", "Google Colab", "Kaggle", "VS Code", "Postman"],
    },
    {
      title: "Libraries & Frameworks",
      skills: ["PyTorch", "LangChain", "Hugging Face", "Pandas", "NumPy", "Matplotlib", "Sci-kit Learn", "StreamLit"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center gradient-text"
        >
          Skills and Technologies
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 bg-opacity-50 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-center text-blue-400">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

