'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects } from '../../../data/projects'; // Asegúrate de que la ruta sea correcta

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: PageProps) {
  // Find the project based on the slug
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      {/* Rest of your component */}
    </article>
  );
}