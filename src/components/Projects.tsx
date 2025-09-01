import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Zap, Shield, Bot } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Web3 Certification System",
      description: "A blockchain-based certification platform that provides secure, verifiable, and tamper-proof digital credentials. Built with smart contracts to ensure trust and transparency in educational achievements.",
      icon: <Shield className="w-8 h-8 text-primary" />,
      technologies: ["Solidity", "Ethereum", "React", "Web3.js", "IPFS"],
      status: "In Development",
      featured: true
    },
    {
      title: "Anima AI - Cursor for Animators",
      description: "AI-powered tool designed to revolutionize the animation workflow. Provides intelligent assistance for animators, similar to how Cursor enhances coding productivity.",
      icon: <Bot className="w-8 h-8 text-primary" />,
      technologies: ["AI/ML", "Python", "Computer Vision", "React", "TensorFlow"],
      status: "Collaboration Seeking",
      featured: true
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for complex data analysis and visualization using modern web technologies. Focuses on making data insights accessible and actionable.",
      icon: <Zap className="w-8 h-8 text-primary" />,
      technologies: ["React", "D3.js", "Tableau", "Python", "MongoDB"],
      status: "Completed"
    },
    {
      title: "Smart Contract Auditing Tool",
      description: "Automated tool for identifying potential vulnerabilities in smart contracts. Helps developers write more secure blockchain applications.",
      icon: <Shield className="w-8 h-8 text-primary" />,
      technologies: ["Solidity", "Node.js", "Security Analysis", "Blockchain"],
      status: "Open Source"
    },
    {
      title: "Machine Learning Pipeline",
      description: "End-to-end ML pipeline for data processing, model training, and deployment. Includes automated feature engineering and model optimization.",
      icon: <Bot className="w-8 h-8 text-primary" />,
      technologies: ["Python", "Scikit-learn", "Pandas", "Flask", "Docker"],
      status: "Production"
    },
    {
      title: "IoT Monitoring System",
      description: "Real-time monitoring system for IoT devices using Arduino and cloud technologies. Provides analytics and alerts for connected devices.",
      icon: <Zap className="w-8 h-8 text-primary" />,
      technologies: ["Arduino", "C++", "Google Cloud", "React", "WebSockets"],
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Development": return "bg-yellow-500/20 text-yellow-300";
      case "Collaboration Seeking": return "bg-blue-500/20 text-blue-300";
      case "Completed": return "bg-green-500/20 text-green-300";
      case "Open Source": return "bg-purple-500/20 text-purple-300";
      case "Production": return "bg-primary/20 text-primary";
      default: return "bg-muted";
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of innovative projects spanning Web3, AI, and full-stack development. Each project represents my commitment to building cutting-edge solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className={`p-6 bg-card/50 hover:shadow-glow-secondary transition-all duration-300 ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {project.icon}
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="gap-2">
              <Github className="w-5 h-5" />
              <a href="https://github.com/sagnik-create" target="_blank" rel="noopener noreferrer">
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;