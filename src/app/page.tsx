import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Research from "@/components/Research"
import Education from "@/components/Education"
import Awards from "@/components/Awards"
import Leadership from "@/components/Leadership"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900 text-white">
      <Header />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <About />
        <Skills />
        <Education />
        <Projects />
        <Research />
        <Awards />
        <Leadership />
      </div>
      <Footer />
    </main>
  )
}

