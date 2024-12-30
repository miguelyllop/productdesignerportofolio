'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects } from '../../../data/projects'; // Asegúrate de que la ruta sea correcta

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // Busca el proyecto basado en el slug
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound(); // Muestra la página 404 si no se encuentra el proyecto
  }

  return (
    <article className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {project.images.map((src, index) => (
          <Image 
            key={index}
            src={src} 
            alt={`${project.title} image ${index + 1}`} 
            width={600} 
            height={400} 
            className="rounded-lg shadow-md"
          />
        ))}
      </div>
      <section className="prose lg:prose-xl dark:prose-invert">
        <h2>Design Process</h2>
        <p>{project.process}</p>
      </section>
    </article>
  );
}
