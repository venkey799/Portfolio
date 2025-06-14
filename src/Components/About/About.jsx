import React from 'react';

function About() {
  return (
    <div className="relative min-h-screen z-10 flex items-center  justify-center px-4">
      <div className="bg-gray-800 bg-opacity-60 backdrop-blur-md p-10 rounded-2xl shadow-2xl max-w-6xl w-full text-white">

        <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-6">
          
          
          <div className="flex-1">
            <p className="text-lg leading-relaxed text-gray-200 mt-5 font-light">
              Hi, I’m Doddi Venkatesh, a passionate <span className="text-blue-400 font-semibold">MERN Stack</span> developer with certifications in Pega. I enjoy building web apps and learning new technologies. Outside of coding, I love music, traveling, and cooking.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="/Venkateshdoddi410.pdf"
                download
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition"
              >
                Download Resume
              </a>

              <a
                href="/Venkateshdoddi410.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition"
              >
                View My Resume
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src="/venkateshdoddi.jpg"
              alt="My Profile"
              className="rounded-2xl w-72 h-72 object-cover shadow-xl border border-white/10 transition duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
