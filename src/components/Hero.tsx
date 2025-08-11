import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                Naama Abucheri
              </h1>
              <p className="text-xl lg:text-2xl text-primary font-semibold mb-2">
                Founder & Creative Lead at NovaZuri
              </p>
              <p className="text-lg text-muted-foreground">Software Developer</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="hero" className="group" asChild>
                <a href="mailto:naamaabucheri@gmail.com">
                  <Mail className="mr-2 h-5 w-5 group-hover:animate-float" />
                  Email Me
                </a>
              </Button>
              <Button variant="contact" size="hero" className="group" asChild>
                <a href="tel:0707438686">
                  <Phone className="mr-2 h-5 w-5 group-hover:animate-float" />
                  Call Me
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-20 animate-float"></div>
              <img src="/lovable-uploads/61c59ab1-6a19-41eb-b157-aa20aa787fee.png" alt="Naama Abucheri - Digital Marketing & Development Professional" className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-elegant border-4 border-background hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;