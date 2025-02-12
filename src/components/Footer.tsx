const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Ibrahim Farrukh</h3>
            <p className="text-gray-400">Computer Science Student | Researcher | Developer</p>
          </div>
          <div className="flex space-x-4">
            <a href="mailto:ibrahimfarrukh000@gmail.com" className="hover:text-blue-400 transition-colors">
              Email
            </a>
            <a
              href="https://github.com/fireblaster000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ibrahim-farrukh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ibrahim Farrukh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

