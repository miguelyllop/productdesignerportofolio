import React from 'react';

export default function HomePage() {
  const projects = [
    {
      title: "Virtual Clubs",
      company: "Sport Heroes",
      image: "/images/virtual-clubs.jpg",
      href: "/projects/virtual-clubs",
      description: "A platform for creating and managing virtual sports clubs"
    },
    {
      title: "Benchmarking",
      company: "United Heroes",
      image: "/images/benchmarking.jpg",
      href: "/projects/benchmarking",
      description: "Performance analysis and comparison tools"
    }
    // Add other projects here
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section with Auto-scrolling Gallery */}
      <section className="relative w-full overflow-hidden bg-gray-50 dark:bg-gray-900">
        <div className="flex animate-scroll-left space-x-8 py-20">
          {[...projects, ...projects].map((project, i) => (
            <div
              key={i}
              className="relative aspect-video w-[800px] shrink-0 overflow-hidden rounded-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-gray-50 dark:from-gray-900" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-gray-50 dark:from-gray-900" />
      </section>

      {/* Description Section */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl">
          Miguel Plaza
        </h1>
        <p className="mx-auto text-xl text-muted-foreground">
          Product designer driven to condense complex interactions and data into meaningful experiences.
          Currently designing at{" "}
          <a
            href="https://en.sportheroes.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Sport Heroes
          </a>
          .
        </p>
      </section>

      {/* Projects Grid */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-20">
        <h2 className="mb-12 text-3xl font-bold tracking-tight">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.href}
              className="group relative flex flex-col overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{project.company}</p>
                  <p className="mt-4 text-sm text-muted-foreground">{project.description}</p>
                </div>
                <div className="mt-6">
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    View Project
                    <svg
                      className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

