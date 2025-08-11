import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      title: "Diploma in Information Communication and Technology",
      institution: "Nairobi Institute of Business Studies",
      type: "Formal Education",
      icon: GraduationCap
    },
    {
      title: "Software Development Certification",
      institution: "Power Learn Project",
      type: "Professional Development",
      icon: Award
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development to stay at the forefront 
            of technology and digital marketing trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((item, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 transform hover:scale-105 animate-slide-up border-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-fit">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-2">
                  {item.type}
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground font-medium">
                  {item.institution}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full">
            <GraduationCap className="h-5 w-5 text-primary mr-2" />
            <span className="text-primary font-medium">
              Committed to lifelong learning and staying current with industry trends
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;