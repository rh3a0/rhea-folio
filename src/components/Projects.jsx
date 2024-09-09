import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'kranti katalyst',
      description: 'an interactive web development venture reporting on globalization, social justice & marginalization',
      link: 'https://krantikatalyst.wixsite.com/rh3a'
    },
    {
      name: 'Project 2',
      description: 'Another description of the project.',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">My Projects</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">{project.name}</h3>
              <p className="mt-4">{project.description}</p>
              <a href={project.link} className="mt-4 inline-block text-blue-500 hover:underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
