import React from 'react';

export default function ProjectPage({ project }) {
  if (!project) return null;

  return (
    <article className="mx-auto max-w-4xl px-4 py-20">
      {/* Project Header */}
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="text-xl text-muted-foreground">
          {project.company}
        </p>
      </header>

      {/* Project Hero Image */}
      <div className="relative mb-12 aspect-video overflow-hidden rounded-xl">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Project Content */}
      <div className="prose prose-gray mx-auto dark:prose-invert">
        <p className="lead">{project.description}</p>
        {/* Add more project content here */}
      </div>

      {/* Back Button */}
      <div className="mt-12 text-center">
        <a
          href="/"
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          <svg
            className="mr-1 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          Back to Projects
        </a>
      </div>
    </article>
  );
}

