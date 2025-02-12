"use client"

import { motion } from "framer-motion"

const Research = () => {
  const researchExperiences = [
    {
      title: "Research Intern — Centre for Urban Informatics, Technology, and Policy (CITY)",
      period: "July 2024 – Present",
      advisor: "Dr. Muhammad Tahir (Associate Professor at LUMS)",
      description:
        "Exploring the integration of large language models (LLMs) to replace traditional reinforcement learning approaches for efficient navigation in multi-agent robotic systems within dynamic warehouse environments.",
      achievements: [
        "Designed and fine-tuned a GPT-3.5 Turbo-based system to serve as the decision-making controller for roboticagents, generating real-time step-by-step commands based on complex grid layouts.",
        "Achieved a 94% accuracy rate in single-agent scenarios using a robust feedback loop mechanism to autonomously identify errors, re-engineer prompts, and iteratively enhance pathfinding precision.",
        "Conducted experiments in simulated warehouse environments, analyzing model outputs to refine navigation performance while addressing challenges like obstacle avoidance and out-of-bounds movements.",
        "Leveraged BFS to generate ground-truth data for single-agent tasks and employed Conflict-Based Search(CBS) for dual-agent datasets, incorporating ”wait” commands and detailed action annotations to prevent agent-agent collisions.",
        "Integrated multi-agent error-handling capabilities, addressing issues like truncated outputs, agent position swaps, and collision scenarios, improving accuracy to 80%.",
        "Conducted extensive fine-tuning experiments to align LLM outputs with ground-truth data, ensuring scalability for broader warehouse automation applications."

      ],
      keyTerms: [
        "Large Language Models",
        "Multi-Agent Systems",
        "API Integration",
        "Pathfinding Algorithms",
        "Self constructed Feedback Mechanism",
      ],
    },
    {
      title: "Research Assistant — Centre for Speech and Language Technologies (CSaLT)",
      period: "January 2023 – May 2023",
      advisor: "Dr. Agha Ali Raza (Associate Professor at LUMS)",
      description:
        "Developed a supervised machine learning model to classify political tweets, analyzing communication strategies of major political parties in Pakistan and exploring trends in governance, criticism, and promotion.",
      achievements: [
        "Designed a robust tweet classification framework using advanced NLP techniques, including BERT and RoBERTa.",
        "Curated and annotated a dataset of 5,000+ political tweets, ensuring high-quality labels for training.",
        "Analyzed communication trends across political parties, revealing insights into their social media strategies and public engagement techniques.",
      ],
      keyTerms: [
        "Natural Language Processing",
        "Political Discourse Analysis",
        "Machine Learning",
        "BERT",
        "RoBERTa",
        "Text Classification",
      ],
    },
  ]

  return (
    <section id="research" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center gradient-text"
        >
          Research Experience
        </motion.h2>
        {researchExperiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 bg-opacity-50 rounded-lg p-6 shadow-lg mb-8"
          >
            <h3 className="text-2xl font-bold mb-2 text-blue-400">{experience.title}</h3>
            <p className="text-lg mb-2 text-gray-300">{experience.period}</p>
            <p className="text-gray-300 mb-4">Advisor: {experience.advisor}</p>
            <p className="text-gray-300 mb-4">{experience.description}</p>
            <h4 className="text-xl font-semibold mb-2 text-purple-400">Key Achievements:</h4>
            <ul className="list-disc list-inside space-y-2 mb-4">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-300">
                  {achievement}
                </li>
              ))}
            </ul>
            <h4 className="text-xl font-semibold mb-2 text-green-400">Key Terms:</h4>
            <div className="flex flex-wrap gap-2">
              {experience.keyTerms.map((term, i) => (
                <span key={i} className="bg-green-500 bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                  {term}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Research

