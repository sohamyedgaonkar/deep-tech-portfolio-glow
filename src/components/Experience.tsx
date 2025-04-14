
import { Briefcase, CalendarDays, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Research Assistant Intern at CDAC-Pune',
      date: 'July 2021 - June 2022',
      company: 'CDAC-Pune',
      description: [
        'Designed and developed an autonomous solution for monitoring crowd with over 7 dense environments, achieving a 93% accuracy in object detection accuracy.',
        'Integrated an internal deep learning system detecting motion integrated with ML and computer vision algorithms to enhance risk detection to 98%.',
        'Collaborated with a team of CDAC scientists to detect real-to-use solutions, reducing model deployment time by 40%.',
      ]
    },
    {
      title: 'Natural Language Processing at Primacy',
      date: 'Feb 2021 - Jun 2021',
      company: 'Primacy',
      description: [
        'Developing and optimizing automated workflows for online payments thereby improving operational efficiency by 40%.',
        'Developed Complex Data Pipelines in-flight GKMs using Tensorflow, Pytorch and GANS-based transformer based pre-trained models to find significant irregularities in customer finance data.',
        'Integrating third-party APIs to streamline financial data validation, reducing manual effort by 95% using Docker and Kubernetes.',
      ]
    },
    {
      title: "Women's Safety Incident Reporting System",
      date: '2021',
      company: 'React, TypeScript, AI/Compute, Tensorflow, Computer Vision, MongoDB',
      description: [
        'Developed a real-time incident monitoring system using image processing and OCR algorithms for event location using heatmaps.',
        'Integrated an AI-powered SoM System using NVIDIA API for parallel incident reporting, natural language processing, and collaborative response coordination.',
        'Designed and implemented facial recognition systems using custom vision for real-time identity confirmation and accurate recognition, and anomaly detection with a accuracy of 95%',
        'Designed and deployed a near PostgreSQL database with fast-level security for real-time data synchronization and secure messaging.',
      ]
    },
    {
      title: 'Healthcare Analytics Learning System',
      date: '2021',
      company: 'React, TypeScript, NodeJs, MongoDB',
      description: [
        'Achieved seamless integration of third-party APIs like OSM JavaScript API to enable interactive and visually detailed mapping features.',
        'Developed a robust machine learning platform for personalized education based on user behavior and study data capturing over 1 million learning interactions from 5,000+ unique users.',
        'Implemented a course recommendation system using TensorFlow and Keras, enhancing personalized learning paths, increasing course completion rates by 32%.',
        'Built an analytics dashboard with integration APIs providing real-time performance metrics of students\' online environment.',
        'Released exceptional tech gamification features like leaderboards, badges and peer learning features.',
      ]
    },
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
