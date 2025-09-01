import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Mail, FileText, Twitter } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
              🚀 Open for Web3 & AI Collaborations
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Sagnik Dey
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Web3 & AI Developer from India
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Passionate software developer specializing in Web3 technologies, AI/ML, and creating innovative solutions. 
              Currently working on Web3 Certification Systems and looking to collaborate on AI tools for creators.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button size="lg" className="gap-2 shadow-glow-primary hover:shadow-glow-primary">
              <Github className="w-5 h-5" />
              View Projects
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <FileText className="w-5 h-5" />
              <a href="https://drive.google.com/file/d/1AfKtO5D27a613abQOc_7Ez7eY-vNAKIr/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Mail className="w-5 h-5" />
              Contact Me
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-card/50 border-border hover:shadow-glow-secondary transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">🔗 Web3 Development</h3>
              <p className="text-muted-foreground">Building decentralized applications and blockchain solutions</p>
            </Card>
            <Card className="p-6 bg-card/50 border-border hover:shadow-glow-secondary transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">🤖 AI & Machine Learning</h3>
              <p className="text-muted-foreground">Creating intelligent systems and data-driven applications</p>
            </Card>
            <Card className="p-6 bg-card/50 border-border hover:shadow-glow-secondary transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">🌟 Open Source</h3>
              <p className="text-muted-foreground">Contributing to the developer community with innovative projects</p>
            </Card>
          </div>

          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <a href="https://twitter.com/sagnik77228719" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <a href="https://github.com/sagnik-create" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <a href="https://medium.com/@bloggersagnik" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;