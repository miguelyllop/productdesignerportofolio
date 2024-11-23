import React from 'react';

export default function HomePage() {
  const projects = [
    {
      title: "Virtual Clubs",
      company: "Sport Heroes",
      image: "/images/virtual-clubs.jpg",
      href: "/virtual-clubs"
    },
    {
      title: "Benchmarking",
      company: "United Heroes",
      image: "/images/benchmarking.jpg",
      href: "/benchmarking"
    },
    // Add other projects here
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Auto-scrolling Gallery */}
      <section className="w-full py-12 overflow-hidden">
        <div className="flex animate-scroll-left space-x-4 p-4">
          {[...projects, ...projects].map((project, i) => (
            <div
              key={i}
              className="relative aspect-[16/10] w-[600px] shrink-0 overflow-hidden rounded-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Description */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tighter sm:text-5xl">
          Miguel Plaza
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
          Product designer driven to condense complex interactions and data into meaningful experiences.
          Currently designing at{" "}
          <a
            href="https://en.sportheroes.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-primary"
          >
            Sport Heroes
          </a>
          .
        </p>
      </section>

      {/* Project Index */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-2xl font-bold tracking-tighter">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div key={i} className="group relative overflow-hidden rounded-lg border">
              <a href={project.href}>
                <div className="relative aspect-[16/10] w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.company}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

