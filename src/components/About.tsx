import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const currentFocus = [
    "Web3 Certification System",
    "AI-ML & Data Science",
    "React Development",
    "Anima AI - Cursor for animators"
  ];

  const skills = [
    { category: "Web3 & Blockchain", items: ["Smart Contracts", "DApps", "Ethereum", "Solidity"] },
    { category: "AI & Machine Learning", items: ["Python", "Pandas", "Scikit-learn", "Data Science"] },
    { category: "Frontend Development", items: ["React", "TypeScript", "JavaScript", "CSS3", "HTML5"] },
    { category: "Backend & Tools", items: ["Node.js", "MongoDB", "Flask", "Git", "Google Cloud"] },
    { category: "Mobile & IoT", items: ["Android", "Arduino", "C/C++", "Java"] },
    { category: "Data & Analytics", items: ["Tableau", "MATLAB", "Data Visualization", "Bash"] }
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate software developer from India, dedicated to pushing the boundaries of Web3 technology and AI innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="p-8 bg-card/50">
              <h3 className="text-2xl font-semibold mb-6">Current Focus</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-primary mb-2">🔭 Currently Working On</h4>
                  <p className="text-muted-foreground">Web3 Certification System - Building secure and verifiable credential systems on the blockchain</p>
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-2">🌱 Currently Learning</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentFocus.map((item) => (
                      <Badge key={item} variant="secondary">{item}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-2">👯 Looking to Collaborate</h4>
                  <p className="text-muted-foreground">Anima AI - Cursor for animators - Bringing AI-powered tools to the creative industry</p>
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-2">💬 Ask Me About</h4>
                  <p className="text-muted-foreground">Web3 Development, Data visualization using Tableau, Blockchain technologies, and AI/ML applications</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/50">
              <h3 className="text-2xl font-semibold mb-6">Experience & Writing</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-primary mb-2">📝 Technical Writing</h4>
                  <p className="text-muted-foreground mb-2">
                    I regularly share insights and tutorials on emerging technologies, particularly in Web3 and AI domains.
                  </p>
                  <a 
                    href="https://medium.com/@bloggersagnik" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Read my articles on Medium →
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-2">🏆 Problem Solving</h4>
                  <p className="text-muted-foreground mb-2">
                    Active on competitive programming platforms, continuously sharpening algorithmic thinking.
                  </p>
                  <a 
                    href="https://www.leetcode.com/sagnik_create" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    View my LeetCode profile →
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-2">📞 Let's Connect</h4>
                  <p className="text-muted-foreground">
                    Always open to discussing new opportunities, collaborations, and innovative project ideas.
                  </p>
                  <a 
                    href="mailto:sagnikd587@gmail.com" 
                    className="text-primary hover:underline"
                  >
                    sagnikd587@gmail.com
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-center mb-12">Skills & Technologies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup) => (
                <Card key={skillGroup.category} className="p-6 bg-card/50 hover:shadow-glow-secondary transition-all duration-300">
                  <h4 className="text-lg font-semibold mb-4 text-primary">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;