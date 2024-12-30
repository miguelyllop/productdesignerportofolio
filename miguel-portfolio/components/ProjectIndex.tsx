import { useState } from 'react';

function ProjectIndex({ onProjectClick }) {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Sample projects (replace with your actual data)
  const projects = [
    { id: 1, title: 'Project 1', year: 2023 },
    { id: 2, title: 'Project 2', year: 2022 },
    { id: 3, title: 'Project 3', year: 2021 },
  ];

  return (
    <section className="py-16 mx-auto w-full">
      <ul className="project-list space-y-6">
        {projects.length === 0 ? (
          <p>No projects available.</p>
        ) : (
          projects.map((project, index) => (
            <li
              key={project.id}
              className={`project-item p-0 bg-white rounded-md transition-all duration-300 relative w-full ${
                hoveredProject && hoveredProject.id !== project.id ? 'opacity-50' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => onProjectClick(project)} // On project click
            >
             {/* Project Number, Title, Year */}
<div className="flex items-center justify-between w-full">
  {/* Project Number and Title */}
  <div className="flex items-center space-x-4">
    <span className="text-xl">{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
    <h3 className="text-lg font-semibold ml-10">{project.title}</h3>
  </div>

  {/* Project Year */}
  <span className="text-sm">{project.year}</span>
</div>

              {/* Hover Effect */}
              {hoveredProject && hoveredProject.id === project.id && (
                <div className="absolute inset-0 bg-transparent opacity-0 rounded-md" />
              )}
            </li>
          ))
        )}
      </ul>
    </section>
  );
}

export default ProjectIndex;
