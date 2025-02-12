"use client"

import { motion } from "framer-motion"

const Leadership = () => {
  const leadershipExperiences = [
    {
      title: "President, SPADES",
      organization: "Society for Promotion and Development of Engineering and Sciences (SPADES)",
      period: "May 2024 – May 2025",
      achievements : [
        "Spearheaded a month-long social responsibility initiative, teaching coding and mathematics to 100+ underprivileged students in rural schools across Punjab. Measured success through pre- and post-workshop evaluations, showing a 60% improvement in student performance.",
        "Partnered with UPLIFT AI to organize an internship for 33 students, mentoring them on Retrieval Augmented Generation (RAG), APIs, and custom RAG models, enabling them to build practical AI applications.",
        "Assisted UPLIFT AI in gathering data in native languages to develop Pakistan’s first GPT-based prototype for individuals unable to read and write. Contributed to tasks like voice banking, agriculture practices, and bill payments, significantly improving accessibility and daily life for underserved communities.",
        "Collaborated with the Dean of LUMS School of Engineering to design and promote smog detectors in 10 schools across Lahore, measuring PM 2.5 particles and raising awareness about air pollution. Developed actionable solutions leading to partnerships with local environmental organizations.",
        "Organized a groundbreaking science symposium with 500+ participants, featuring research in AI, Life Sciences, and Embedded Systems, and generating 10 million PKR in profit to fund future SPADES initiatives.",
        "Hosted Pakistan’s first-ever NASA engineer talk at LUMS, with Mr. Yasir Tufail focusing on the James Webb Telescope, inspiring 300+ attendees and sparking increased interest in space exploration and engineering careers.",
        "Initiated the LUMS Rocketry Project, leading the development of Pakistan’s first student-made rocket. Expanding our domain by working on securing entry into international aerospace competitions, evaluated to be the leading society in aerospace engineering by 2027.",
        "Launched the Women in STEM initiative, engaging 100+ female students through workshops, mentorship programs, and outreach activities. Partnered with leading tech companies to promote diversity and inclusion in STEM fields.",
        "Secured an invitation for PSIFI’s top-performing team to represent Pakistan at the Asian Physics Olympiad in Saudi Arabia, positioning SPADES as the national selector for international STEM competitions and enhancing its academic recognition.",
      ],
    },
    {
      title: "Convenor, SPADES Flagship Event (PSIFI)",
      organization: "Society for Promotion and Development of Engineering and Sciences (SPADES)",
      period: "May 2023 – April 2024",
      achievements : [
        "Directed PSIFI, SPADES’ flagship event, hosting 1500+ participants from across Pakistan. Facilitated networking and learning opportunities for students, solidifying PSIFI as the largest science olympiad in the country.",
        "Established Pakistan’s first science olympiad to combine university participation, introducing HACKX—a hackathon event exclusively for university students, featuring over 25 universities and 50+ teams. Participants gained valuable skills in MERN stack development, AI integration, and logical problem-solving through coding, with $1000 in winning prizes.",
        "Secured PSIFI as the only event among 40+ societies at LUMS to sponsor and facilitate participation for 100+ underprivileged school students, providing free access to the event and exposure to Pakistan’s science and engineering community. Empowered students with role models and future educational opportunities.",
        "Achieved 8 million PKR in funding through participant fees and sponsorships, making this edition of PSIFI the highest-grossing event in SPADES history and ensuring sustainable growth for future events.",
      ],
    },
    {
      title: "Peer Ambassador for Social Support (PALss)",
      organization: "LUMS",
      period: "Aug 2024 – May 2025",
      achievements: [
        "Supported 42+ newly admitted students through 1:1 sessions and group workshops.",
        "Organized 3+ large-scale social engagement events with 40+ participants.",
        "Identified vulnerable students and provided tailored academic and personal advice.",
        "Developed a peer mentoring program that increased student retention rates by 15%.",
      ],
    },
  ]

  return (
    <section id="leadership" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center gradient-text"
        >
          Leadership and Community
        </motion.h2>
        {leadershipExperiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 bg-opacity-50 rounded-lg p-6 shadow-lg mb-8"
          >
            <h3 className="text-2xl font-bold mb-2 text-blue-400">{experience.title}</h3>
            <p className="text-lg mb-2 text-purple-400">{experience.organization}</p>
            <p className="text-gray-300 mb-4">{experience.period}</p>
            <ul className="list-disc list-inside space-y-2">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-300">
                  {achievement}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Leadership

