import About from "../About/About"
import Skills from "../Skills/Skills"
import Projects from "../Projects/Projects"
import ContactForm from "../Contactform/Contactform"
function Main() {
  return (
    <div className="relative min-h-screen py-32 px-4 sm:px-8 md:px-16 lg:px-2 4 flex flex-col items-center justify-center text-white ">
    
      <div className="text-center max-w-4xl">
        <h1 className='text-4xl sm:text-5xl mt-24 md:text-6xl font-bold mb-6'>
          Hi, I'm a <span className="text-blue-400">MERN Stack</span> Developer
        </h1>
        
        <p className="text-lg sm:text-xl mb-8 text-gray-300">
          Fresh and passionate full-stack developer specializing in MongoDB, Express.js, React, and Node.js.
          Ready to build amazing web applications!
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="px-4 py-2 bg-blue-600 rounded-full text-sm font-medium">React.js</span>
          <span className="px-4 py-2 bg-green-600 rounded-full text-sm font-medium">Node.js</span>
          <span className="px-4 py-2 bg-yellow-500 rounded-full text-sm font-medium">MongoDB</span>
          <span className="px-4 py-2 bg-gray-700 rounded-full text-sm font-medium">Express.js</span>
          <span className="px-4 py-2 bg-purple-600 rounded-full text-sm font-medium">JavaScript</span>
        </div>
        <a href='#connect' className=" bg-blue-500 hover:bg-blue-700 rounded-full px-6 py-4 bg-radial">Let's Connect...</a>
      </div>
      <div>
      <div id="about" className="pt-28 my-10">
        <About />
      </div>
      <div id="projects" className="min-h-screen py-20">
        <Projects />
      </div>
      <div id="skills" className="min-h-screen py-20">
        <Skills />
      </div>
      <div id="connect" className="py-6 scroll-mt-28">
        <ContactForm />
      </div>
    </div>
    </div>
  )
}

export default Main