import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Digital Marketing",
      skills: ["Social Media Marketing", "SEO Optimization", "Google Ads", "Content Strategy", "Analytics"]
    },
    {
      title: "Web Development",
      skills: ["WordPress", "Responsive Design", "HTML/CSS", "JavaScript", "UI/UX Design"]
    },
    {
      title: "Software Development",
      skills: ["Python", "SQL", "MERN Stack Basics", "Database Design", "API Integration"]
    },
    {
      title: "Creative Strategy",
      skills: ["Brand Development", "Creative Direction", "Project Management", "Client Relations", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive blend of technical skills and creative expertise to deliver 
            exceptional results across digital marketing and development projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="p-6 bg-gradient-subtle rounded-lg shadow-soft animate-slide-up border border-primary/10"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <div className="w-3 h-3 bg-gradient-primary rounded-full mr-3"></div>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 border border-primary/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gradient-subtle rounded-lg shadow-soft animate-fade-in">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-muted-foreground">Years in Digital Marketing</div>
          </div>
          <div className="p-6 bg-gradient-subtle rounded-lg shadow-soft animate-fade-in">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">WordPress Sites Built</div>
          </div>
          <div className="p-6 bg-gradient-subtle rounded-lg shadow-soft animate-fade-in">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;