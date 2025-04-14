
import { Briefcase, CalendarDays, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
  {
    "title": "Research and Development Intern",
    "date": "July 2024 - Jan 2025",
    "company": "CDAC-Pune",
    "description": [
      "Engineered and fine-tuned versatile computer vision models by experimenting with over 7 diverse architectures, achieving a 35% increase in object detection accuracy",
      "Developed drone-based real-time noise monitoring system integrated with loT, cloud processing, and Al-driven analysis for noisy objects detection applications with intellectual log analysis bot",
      "Collaborated with a team of CDAC scientists to deliver end-to-end solutions, reducing model deployment time by 30%"
    ]
  },
  {
    "title": "Software Engineering Intern",
    "date": "Feb 2025 - Present",
    "company": "Firmway",
    "description": [
      "Developing and optimizing automation workflows for complex commerce finance tasks, improving reconciliation efficiency by 40%",
      "Automated Complex Data Pipelines to build scalable backend services, enhancing data processing speed for financial reports with 0 human intervention using Doctr, GMFT and TF-IDF",
      "Integrating third-party APIs to streamline financial data validation, reducing manual efforts by 90% using Docker and FastAPI"
    ]
  }
];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional <span className="text-tech-purple">Experience</span></h2>
          <div className="w-20 h-1 bg-tech-purple rounded-full mb-8"></div>
          <p className="text-center text-foreground/80 max-w-3xl">
            My professional journey spans research, development, and innovative problem-solving across multiple domains.
          </p>
        </div>
        
        <div className="space-y-8 mt-12">
          {experiences.map((exp, index) => (
            <div key={index} className="tech-card p-6 transition-all duration-300 hover:translate-y-[-4px]">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-tech-purple/10 border border-tech-purple/30 flex items-center justify-center">
                    <Briefcase className="text-tech-purple" size={20} />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  
                  <div className="flex flex-wrap items-center text-sm text-foreground/70 mb-4">
                    <div className="flex items-center mr-4">
                      <CalendarDays size={14} className="mr-1" />
                      {exp.date}
                    </div>
                    <div>{exp.company}</div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex">
                        <ChevronRight size={18} className="flex-shrink-0 text-tech-purple mt-0.5" />
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
