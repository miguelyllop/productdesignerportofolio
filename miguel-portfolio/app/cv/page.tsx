export default function CVPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Miguel's CV</h1>
      <div className="prose lg:prose-xl dark:prose-invert">
        <h2>Experience</h2>
        <ul>
          <li>Senior Product Designer at TechCorp (2020-Present)</li>
          <li>UX Designer at DesignStudio (2017-2020)</li>
          <li>Junior Designer at CreativeCo (2015-2017)</li>
        </ul>
        
        <h2>Education</h2>
        <ul>
          <li>Master's in Interaction Design, Design University (2015)</li>
          <li>Bachelor's in Graphic Design, Art College (2013)</li>
        </ul>
        
        <h2>Skills</h2>
        <ul>
          <li>User Interface Design</li>
          <li>User Experience Design</li>
          <li>Prototyping</li>
          <li>User Research</li>
          <li>Figma, Sketch, Adobe Creative Suite</li>
        </ul>
      </div>
    </div>
  )
}

