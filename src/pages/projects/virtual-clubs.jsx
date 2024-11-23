import React from 'react';
import ProjectPage from '../../components/project-page';

export default function VirtualClubsPage() {
  const projectData = {
    title: "Virtual Clubs",
    company: "Sport Heroes",
    image: "/images/virtual-clubs.jpg",
    description: "A comprehensive platform for creating and managing virtual sports clubs, enabling users to connect, compete, and track their progress together.",
    // Add more project-specific content here
  };

  return <ProjectPage project={projectData} />;
}

