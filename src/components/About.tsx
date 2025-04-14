
import { GraduationCap, Award, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 grid-tech-pattern opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-tech-purple">Me</span></h2>
          <div className="w-20 h-1 bg-tech-purple rounded-full mb-8"></div>
          <p className="text-center text-foreground/80 max-w-3xl">
            Information Technology professional with expertise in Machine Learning, AI, and Full Stack Development.
            Passionate about creating innovative solutions and leveraging technology to solve complex problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="tech-card p-6 space-y-4">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <GraduationCap className="mr-2 text-tech-purple" />
              Education
            </h3>
            
            <div className="space-y-6">
              <div className="relative pl-6 border-l border-tech-purple/30">
                <div className="absolute w-3 h-3 bg-tech-purple rounded-full -left-[6.5px] top-1.5"></div>
                <h4 className="text-lg font-medium mb-1">Bachelor of Computer Technology</h4>
                <p className="text-sm text-foreground/70 mb-1">B.E. Information Technology with A.I. Honours</p>
                <p className="text-sm text-foreground/70">2022-2026 | Current CGPA: 9.05</p>
                <div className="mt-2 text-sm text-foreground/80">
                  <span className="block mb-1">Courses: Data-Oriented Development, Data Structures & Algorithms, Calculus, Database Management, Storage Systems, Operating Systems, Engineering.</span>
                </div>
              </div>
              
              <div className="relative pl-6 border-l border-tech-purple/30">
                <div className="absolute w-3 h-3 bg-tech-purple rounded-full -left-[6.5px] top-1.5"></div>
                <h4 className="text-lg font-medium mb-1">Senior And Co-Curricular</h4>
                <p className="text-sm text-foreground/70">Technologies & Domains: Data Science, Machine Learning, AI/General Intelligence, MLOps, CI/CD</p>
                <p className="text-sm text-foreground/70">Languages: Python (proficient), C/C++, Java, Rust, JavaScript, TypeScript/HTML/CSS, MySQL.</p>
                <p className="text-sm text-foreground/70">OS: iOS, Windows, Kali Linux, Raspberry Pi, Ubuntu, Linux, Debian, Mint, Arch/Manjaro.</p>
              </div>
            </div>
          </div>
          
          <div className="tech-card p-6">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Award className="mr-2 text-tech-purple" />
              Achievements
            </h3>
            
            <div className="space-y-4">
              <div className="flex">
                <div className="w-16 text-tech-purple font-semibold">2023</div>
                <div>
                  <p className="font-medium">Winner - TechFest International Hackathon 2023</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-16 text-tech-purple font-semibold">2022</div>
                <div>
                  <p className="font-medium">AIR 1 - Runnerup-21 (TSEC DSAI)</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-16 text-tech-purple font-semibold">2021</div>
                <div>
                  <p className="font-medium">DBMS Expert from Hacker Rank</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-16 text-tech-purple font-semibold">2021</div>
                <div>
                  <p className="font-medium">Top Machine Learning Voice on LinkedIn</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-16 text-tech-purple font-semibold">2017</div>
                <div>
                  <p className="font-medium">AIR 56 - Various MLE Advance Exams</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
              <Briefcase className="mr-2 text-tech-purple" />
              Interests
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {['Machine Learning', 'Data Science', 'AI', 'Full Stack Development', 'Finance', 'Algorithm Design'].map((interest) => (
                <span key={interest} className="px-3 py-1 bg-muted rounded-full text-sm">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
