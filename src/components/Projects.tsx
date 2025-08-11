import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "NovaZuri",
      url: "novezuri.co.ke",
      description: "Marketing agency with vibrant, modern design showcasing creative services and portfolio.",
      type: "Marketing Agency"
    },
    {
      title: "Global Impact Ministry",
      url: "globalimpactministry.org",
      description: "Church website with events and donations integration for community engagement.",
      type: "Non-profit"
    },
    {
      title: "Front Pace",
      url: "front-pace.co.ke",
      description: "Creative production company portfolio site highlighting multimedia services.",
      type: "Creative Agency"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Live Websites
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent web development projects, each crafted with attention 
            to design, functionality, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 transform hover:scale-105 animate-slide-up border-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {project.type}
                    </div>
                  </div>
                  <ExternalLink className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-primary group-hover:text-primary"
                  asChild
                >
                  <a 
                    href={`https://${project.url}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground text-lg mb-6">
            Interested in seeing more WordPress projects?
          </p>
          <Button variant="hero" size="hero" asChild>
            <a href="mailto:naamaabucheri@gmail.com">
              Request Portfolio
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;