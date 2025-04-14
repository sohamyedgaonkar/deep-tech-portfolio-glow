
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-8 bg-tech-dark border-t border-border/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-foreground/70">
              &copy; {new Date().getFullYear()} Soham Yedgaonkar. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <p className="text-sm text-foreground/70">Built with React & TailwindCSS</p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-tech-purple/10 border border-tech-purple/30 flex items-center justify-center hover:bg-tech-purple hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
