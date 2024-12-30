'use client';

import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';

interface PageProps {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function ProjectPage({ 
  params,
  searchParams 
}: PageProps) {
  // Find the project based on the slug
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      {/* Rest of your project page content */}
    </div>
  );
}