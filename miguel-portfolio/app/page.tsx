'use client'; // Add this line to mark the file as a Client Component

import HorizontalGallery from '@/components/HorizontalGallery'
import Description from '@/components/Description'
import ProjectIndex from '@/components/ProjectIndex'

export default function Home() {
  return (
    <div className="min-h-screen bg-background pt-0"> {/* Added pt-16 for header space */}
      <div className="py-0">
        <HorizontalGallery />
      </div>
      <div className="container mx-auto px-4">
        <Description />
        <ProjectIndex />
      </div>
    </div>
  )
}