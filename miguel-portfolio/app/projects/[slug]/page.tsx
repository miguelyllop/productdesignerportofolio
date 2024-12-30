import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ProjectPage({ 
  params,
  searchParams 
}: PageProps) {
  const resolvedParams = await params;
  // Find the project based on the slug
  const project = projects.find((p) => p.slug === resolvedParams.slug);

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