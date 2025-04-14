
import { ArrowDown, Terminal, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleDownloadResume = () => {
    // Use the correctly uploaded resume file
    const resumeUrl = "/Soham_Yedgaonkar_SWE_Resume.pdf";
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = "Soham_Yedgaonkar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen relative flex items-center py-20 grid-tech-pattern overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-tech-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-tech-purple-dark/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
        <div className="flex-1 space-y-6 text-center md:text-left mb-10 md:mb-0">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-tech-purple/30 bg-tech-purple/10 text-tech-purple text-sm mb-2">
            <Terminal size={14} className="mr-2" />
            <span>Full Stack Developer & ML Engineer</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            <span className="text-foreground">Soham</span>
            <span className="text-tech-purple"> Yedgaonkar</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl">
            B.E. Information Technology professional specializing in Machine Learning, AI, and Full Stack Development.
            Currently focused on creating innovative solutions at the intersection of technology and finance.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button 
              className="bg-tech-purple hover:bg-tech-purple-dark text-white"
              onClick={handleDownloadResume}
            >
              <Download size={16} className="mr-2" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              className="border-tech-purple text-tech-purple"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        
        <div className="flex-1 relative flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-tech-purple to-tech-purple-dark rounded-xl blur-2xl opacity-20 animate-pulse-slow"></div>
            <div className="relative z-10 w-full h-full rounded-xl overflow-hidden border-2 border-tech-purple/50 tech-glow">
              <img
                src="/lovable-uploads/a807ec56-e93c-42a4-a631-66ced1ff22cd.png"
                alt="Soham Yedgaonkar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-foreground/70 hover:text-tech-purple transition-colors"
      >
        <span className="mb-2">Scroll Down</span>
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
