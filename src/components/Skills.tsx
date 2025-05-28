
import { Code, Database, Server, Cpu, LineChart, Globe, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      name: 'Programming Languages',
      icon: <Code className="text-tech-purple" size={24} />,
      skills: ['Python', 'C/C++', 'JavaScript', 'TypeScript', 'Java', 'SQL'],
    },
    {
      name: 'Machine Learning & AI',
      icon: <Cpu className="text-tech-purple" size={24} />,
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Computer Vision', 'NLP', 'Reinforcement Learning', 'GANs'],
    },
    {
      name: 'Web Development',
      icon: <Globe className="text-tech-purple" size={24} />,
      skills: ['React', 'Node.js', 'HTML/CSS', 'Express', 'Next.js', 'TypeScript', 'RESTful APIs'],
    },
    {
      name: 'Data Science',
      icon: <LineChart className="text-tech-purple" size={24} />,
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Data Analysis', 'Data Visualization', 'Statistical Modeling'],
    },
    {
      name: 'Databases',
      icon: <Database className="text-tech-purple" size={24} />,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Elastic Search'],
    },
    {
      name: 'DevOps & Tools',
      icon: <Server className="text-tech-purple" size={24} />,
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'Git', 'AWS', 'Linux', 'Bash'],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-tech-purple">Skills</span></h2>
          <div className="w-20 h-1 bg-tech-purple rounded-full mb-8"></div>
          <p className="text-center text-foreground/80 max-w-3xl">
            A diverse set of technical skills developed through academic and professional experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="tech-card p-6 h-full">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-lg bg-tech-purple/10 border border-tech-purple/30 flex items-center justify-center mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 bg-muted rounded-full text-sm inline-flex items-center"
                  >
                    <Terminal size={12} className="mr-1 text-tech-purple" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
