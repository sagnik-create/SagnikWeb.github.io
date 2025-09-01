import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Twitter, Github, ExternalLink, MessageCircle, Calendar } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "Best for detailed discussions and project inquiries",
      action: "sagnikd587@gmail.com",
      href: "mailto:sagnikd587@gmail.com",
      primary: true
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      title: "Twitter",
      description: "Quick updates and tech discussions",
      action: "@sagnik77228719",
      href: "https://twitter.com/sagnik77228719"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      description: "Collaborate on open source projects",
      action: "sagnik-create",
      href: "https://github.com/sagnik-create"
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      title: "Medium",
      description: "Read my latest articles and insights",
      action: "@bloggersagnik",
      href: "https://medium.com/@bloggersagnik"
    }
  ];

  const collaborationAreas = [
    "Web3 & Blockchain Development",
    "AI/ML Projects & Research",
    "Open Source Contributions",
    "Technical Writing & Content",
    "Startup Consulting",
    "Workshop & Speaking"
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Always excited to discuss new opportunities, innovative projects, and potential collaborations. 
              Whether you're looking for technical expertise or want to explore cutting-edge ideas together, let's start a conversation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-8">Get In Touch</h3>
              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <Card 
                    key={method.title} 
                    className={`p-6 bg-card/50 hover:shadow-glow-secondary transition-all duration-300 ${
                      method.primary ? 'border-primary/50' : ''
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-primary">{method.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">{method.title}</h4>
                          {method.primary && (
                            <Badge variant="secondary" className="text-xs">Preferred</Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm mb-3">
                          {method.description}
                        </p>
                        <a
                          href={method.href}
                          target={method.href.startsWith('http') ? '_blank' : undefined}
                          rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-primary hover:underline font-medium"
                        >
                          {method.action}
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-8">Collaboration Areas</h3>
              <Card className="p-8 bg-card/50">
                <div className="grid gap-4 mb-8">
                  {collaborationAreas.map((area) => (
                    <div key={area} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{area}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    Current Interests
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    I'm particularly interested in projects involving Web3 certification systems, 
                    AI tools for creative industries, and innovative blockchain applications that solve real-world problems.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Web3 Certifications</Badge>
                    <Badge variant="secondary">AI for Creators</Badge>
                    <Badge variant="secondary">DeFi Innovation</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <Card className="p-8 bg-gradient-primary text-primary-foreground inline-block">
              <h3 className="text-2xl font-semibold mb-4">Ready to Build Something Amazing?</h3>
              <p className="mb-6 opacity-90">
                Whether you have a project in mind or just want to explore possibilities, I'm here to help bring innovative ideas to life.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="secondary" size="lg" className="gap-2">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:sagnikd587@gmail.com">Start a Conversation</a>
                </Button>
                <Button variant="outline" size="lg" className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Calendar className="w-5 h-5" />
                  Schedule a Call
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;