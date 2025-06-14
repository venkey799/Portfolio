export const projects = [
  {
    title: "CartNexa",
    image: "/Project_1.png",
    description:
      "Built a full-stack shopping app with user authentication, product browsing, cart management, and order tracking Developed RESTful APIs and a responsive UI to deliver a secure, user-friendly experience",
    techStack: ["Mongodb","ReactJS", "ExpressJS", "NodeJS"],
    link: "https://github.com/venkey799"
  },
  {
    title: "Videos library",
    image:"/Project2.png",
    description:
      "Videos Library is a full-stack MERN application where admins can upload YouTube video links or embed codes, and users can browse and stream them. The platform includes secure user authentication, and only logged-in users can access and view the video content. It’s ideal for creating an organized collection of YouTube videos for learning and entertainment.",
    techStack: ["Mongodb","ReactJS", "ExpressJS", "NodeJS"],
    link: "https://github.com/venkey799",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-6 z-10 relative text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
              <img src={project.image} alt={`${project.title}`} className="w-full h-56  object-contain  rounded-xl mb-4 border border-gray-700 hover:scale-105 transition-transform duration-300 bg-black py-2" />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="bg-indigo-600 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:underline text-sm"
                >
                  Source code
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
