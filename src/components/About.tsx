const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-start animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl"></div>
              <img 
                src="/lovable-uploads/61c59ab1-6a19-41eb-b157-aa20aa787fee.png"
                alt="Naama Abucheri"
                className="relative w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full shadow-soft border-2 border-primary/20"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-slide-up">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full mb-8"></div>
            </div>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a creative professional passionate about helping brands grow through 
                innovative marketing strategies and impactful websites.
              </p>
              <p>
                With experience as a Digital Marketer at Fun Media, a WordPress Developer, 
                and a Software Developer through Power Learn Project, I blend creativity 
                with technical expertise to deliver results.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-gradient-subtle rounded-lg shadow-soft">
                <div className="text-2xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gradient-subtle rounded-lg shadow-soft">
                <div className="text-2xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;