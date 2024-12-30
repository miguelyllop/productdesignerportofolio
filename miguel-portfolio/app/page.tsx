'use client'; // Add this line to mark the file as a Client Component

import HorizontalGallery from '@/components/HorizontalGallery'
import Description from '@/components/Description'
import ProjectIndex from '@/components/ProjectIndex'

interface Project {
  id: number;
  title: string;
  year: number;
}

export default function Home() {
  const handleProjectClick = (project: Project) => {
    // Add your click handling logic here
    console.log(`Project clicked:`, project);
  };

  return (
    <div className="min-h-screen bg-background pt-0"> {/* Added pt-16 for header space */}
      <div className="py-0">
        <HorizontalGallery />
      </div>
      <div className="container mx-auto px-4">
        <Description />
        <ProjectIndex onProjectClick={handleProjectClick} />
      </div>
    </div>
  )
}