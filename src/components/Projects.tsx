"use client"

import { motion } from "framer-motion"
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const Projects = () => {
  const projects = [
    {
      title: "Succession Planning Portal",
      period: "Jan 2025 – Mar 2025",
      description:
        "Developed a comprehensive succession planning portal for a large organization, leveraging machine learning for talent prediction and matching.",
        achievements : [
          "Designed and developed a machine-learning-powered Succession Planning system to address limitations of traditional employee tracking tools by providing predictive analytics, tailored performance insights, and career development recommendations.",
          "Implemented predictive performance tracking using supervised learning algorithms (e.g., linear regression) to generate weighted performance scores based on metrics such as employee goals, feedback, and project contributions.",
          "Developed advanced analytics dashboards for managers and HR teams to identify high-potential employees, visualize career paths, and address skill gaps, fostering strategic and merit-based talent management.",
          "Integrated features like mentor/mentee matching, goal-setting tools, and workshop/course recommendations to encourage personalized employee growth and improve retention rates.",
          "Leveraged secure technologies like role-based access control and two-factor authentication to ensure data integrity and privacy, aligning with enterprise-level security requirements."
        ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Machine Learning", "JWT"],
      // github: "https://github.com/yourusername/succession-planning-portal",
      // live: "https://succession-planning-demo.com",
    },
    {
      title: "Retrieval Augmented Generation (RAG) System",
      period: "Nov 2024 – Dec 2024",
      description:
        "Implemented a RAG system to enhance large language model responses with external knowledge, significantly improving response accuracy and relevance.",
      achievements: [
        // "Developed a vector database using FAISS for efficient storage and retrieval of contextual information.",
        // "Integrated RAG with GPT-3.5 using the OpenAI API to provide more accurate and context-aware responses.",
        // "Achieved a 30% improvement in response relevance compared to base LLM responses, as measured by human evaluators.",
        // "Implemented a web interface using Streamlit for easy interaction with the RAG system.",
        "Developed a Retrieval-Augmented Generation (RAG) model to assist students in selecting courses by integrating personalized feedback, course outlines, and historical data for context-aware recommendations.",
"Utilized LangChain to enhance conversational interactions, enabling the system to answer course-related queries and provide interactive, contextually rich suggestions based on user inputs and preferences.",
"Employed ChromaDB for vector storage and retrieval, leveraging Ollama embeddings for semantic indexing of 471 course reviews and 170 annotated course outlines, ensuring precise and relevant information retrieval.",
"Powered conversational responses with Mistral-7B-Instruct-v0.2, fine-tuned to generate concise and accurate explanations of course content, student reviews, and academic requirements.",
"Built an intuitive user interface using Gradio, ensuring accessibility for non-technical users and increasing engagement among students navigating course options.",
      ],
      technologies: ["Python", "ChromaDB", "LangChain", "Gradio", "Hugging Face Transformers", "Ollama Embeddings"],
      // github: "https://github.com/yourusername/rag-system",
      // live: "https://rag-demo.streamlit.app",
    },
    {
      title: "Deep Model Compression for Efficient Neural Networks",
      period: "Oct 2024 – Nov 2024",
      description:
        "Optimized VGG-16 networks for efficient deployment on edge devices using advanced model compression techniques.",
      achievements: [
        "Applied pruning, quantization, and knowledge distillation techniques using PyTorch.",
        "Achieved up to 70% sparsity with less than 1% accuracy loss on the ImageNet dataset.",
        "Reduced memory usage by up to 85% while maintaining high performance, enabling deployment on resource-constrained devices.",
        "Implemented a custom training pipeline for iterative pruning and fine-tuning.",
      ],
      technologies: ["PyTorch", "TensorFlow", "Model Compression"],
      // github: "https://github.com/yourusername/deep-model-compression",
    },
    // {
    //   title: "Deep Unfolding for Sparse Signal Recovery",
    //   period: "Sept 2024 – Oct 2024",
    //   description:
    //     "Applied ISTA and LISTA optimization techniques for sparse vector recovery, with applications in compressed sensing and signal processing.",
    //   achievements: [
    //     "Implemented ISTA and LISTA algorithms in PyTorch, accelerating convergence by 25% compared to traditional iterative methods.",
    //     "Extended matrix recovery techniques to decompose low-rank and sparse components in video data, achieving 15% better reconstruction quality.",
    //     "Explored mixed norm regularization for structured sparsity, improving feature selection in high-dimensional datasets.",
    //     "Developed a custom PyTorch module for end-to-end training of unfolded optimization algorithms.",
    //   ],
    //   technologies: ["PyTorch", "Optimization Algorithms", "Signal Processing", "Compressed Sensing"],
    //   github: "https://github.com/yourusername/deep-unfolding",
    // },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center gradient-text"
        >
          Projects
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 bg-opacity-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-2 text-blue-400">{project.title}</h3>
              <p className="text-lg mb-2 text-gray-300">{project.period}</p>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-300">
                    {achievement}
                  </li>
                ))}
              </ul>
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-blue-500 bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4">
                {/* {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                )} */}
                {/* {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-green-400 hover:text-green-300"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                )} */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

