import React from 'react';

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Node.js",
  "Express.js", "MongoDB", "Git", "Tailwind CSS", "Pega"
];

const Skills = () => {
  return (
    <div className="relative z-10 min-h-screen  text-white py-10 px-6">
      <h2 className="text-4xl font-bold  text-center mb-10">My Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:scale-105 transform transition duration-300 hover:bg-gray-700 hover:shadow-xl
"
          >
            <p className="text-lg font-medium">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
