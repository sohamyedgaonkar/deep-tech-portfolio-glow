
import { ExternalLink, Github, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered SoM System",
      description: "Integrated AI system using NVIDIA API for parallel incident reporting, natural language processing, and collaborative response coordination.",
      tags: ["NVIDIA API", "Computer Vision", "NLP", "AI"],
      links: {
        github: "https://github.com/sohamyedgaonkar/ai-som-system",
        demo: "https://ai-som-demo.example.com",
        details: "#",
      }
    },
    {
      title: "Healthcare Analytics Learning Platform",
      description: "Machine learning platform for personalized education based on user behavior with over 1 million learning interactions from 5,000+ users.",
      tags: ["TensorFlow", "Keras", "React", "MongoDB"],
      links: {
        github: "https://github.com/sohamyedgaonkar/healthcare-analytics",
        demo: "https://health-analytics-demo.example.com",
        details: "#",
      }
    },
    {
      title: "Autonomous Crowd Monitoring System",
      description: "Solution for monitoring crowd with over 7 dense environments, achieving 93% accuracy in object detection using computer vision algorithms.",
      tags: ["Computer Vision", "ML", "Object Detection"],
      links: {
        github: "https://github.com/sohamyedgaonkar/crowd-monitoring",
        demo: "https://crowd-monitor-demo.example.com",
        details: "#",
      }
    },
    {
      title: "Financial Data Processing Pipeline",
      description: "Complex data pipelines using TensorFlow, PyTorch and GANS-based transformer models to find irregularities in financial data.",
      tags: ["TensorFlow", "PyTorch", "GANs", "Finance"],
      links: {
        github: "https://github.com/sohamyedgaonkar/financial-pipeline",
        demo: "https://finance-pipeline-demo.example.com",
        details: "#",
      }
    },
    {
      title: "Real-time Incident Monitoring System",
      description: "System using image processing and OCR algorithms for event location with heatmap visualization and reporting.",
      tags: ["Image Processing", "OCR", "React", "MongoDB"],
      links: {
        github: "https://github.com/sohamyedgaonkar/incident-monitor",
        demo: "https://incident-monitor-demo.example.com",
        details: "#",
      }
    },
    {
      title: "Automated Payment Workflow System",
      description: "Optimized automated workflows for online payments, improving operational efficiency by 40% with secure transaction processing.",
      tags: ["Automation", "Payments", "Workflow"],
      links: {
        github: "https://github.com/sohamyedgaonkar/payment-workflow",
        demo: "https://payment-workflow-demo.example.com",
        details: "#",
      }
    },
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
