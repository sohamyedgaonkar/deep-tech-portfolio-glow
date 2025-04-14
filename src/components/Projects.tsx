
import { ExternalLink, Github, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
  {
    "title": "Women's Safety Incident Reporting System",
    "description": "Developed a full-stack system with real-time reporting, OSM integration, live CCTV monitoring (Computer Vision), and an AI-powered RAG using NVIDIA API for guided incident reporting and analysis.",
    "tags": [
      "React",
      "TypeScript",
      "AI-agents",
      "Supabase",
      "Computer Vision",
      "Tailwind CSS",
      "RAG",
      "PostgreSQL",
      "NVIDIA API",
      "NLP",
      "OSM"
    ],
    "links": {
      "github": "https://github.com/sohamyedgaonkar/womens-safety-system", // Replace with actual link if available
      "demo": "#", // Replace with actual link if available
      "details": "#" // Replace with link to project page/blog if available
    }
  },
  {
    "title": "CogniLearn - Adaptive Learning System",
    "description": "AI-driven adaptive learning platform using RAG (Hugging Face/Pinecone) for personalized education, context-aware recommendations (TensorFlow/Keras), and enhanced engagement via gamification.",
    "tags": [
      "React",
      "TypeScript",
      "Node.js",
      "Hugging Face",
      "RAG",
      "Pinecone",
      "TensorFlow",
      "Keras",
      "LangChain",
      "PostgreSQL",
      "AI"
    ],
    "links": {
      "github": "https://github.com/sohamyedgaonkar/cognilearn", // Replace with actual link if available
      "demo": "#", // Replace with actual link if available
      "details": "#" // Replace with link to project page/blog if available
    }
  }
];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-tech-purple">Projects</span></h2>
          <div className="w-20 h-1 bg-tech-purple rounded-full mb-8"></div>
          <p className="text-center text-foreground/80 max-w-3xl">
            A selection of projects showcasing my technical skills and problem-solving abilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="tech-card p-6 flex flex-col h-full transition-all duration-300 hover:translate-y-[-4px]"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              
              <p className="text-foreground/80 text-sm mb-4 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-1 bg-tech-purple/10 text-tech-purple rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-2 mt-auto">
                <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub repository for ${project.title}`}>
                    <Github size={16} />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" aria-label={`Live demo for ${project.title}`}>
                    <ExternalLink size={16} />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                  <a href={project.links.details} target="_blank" rel="noopener noreferrer" aria-label={`Project details for ${project.title}`}>
                    <FileText size={16} />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
