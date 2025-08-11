import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
const Footer = () => {
  return <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Naama Abucheri</h3>
            <p className="text-background/80 leading-relaxed">
              Digital Marketing & Web Development Professional helping brands grow 
              through innovative strategies and stunning websites.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Projects", "Skills", "Education", "Contact"].map(item => <button key={item} onClick={() => {
              const element = document.getElementById(item.toLowerCase());
              if (element) {
                element.scrollIntoView({
                  behavior: "smooth"
                });
              }
            }} className="block text-background/80 hover:text-primary transition-colors">
                  {item}
                </button>)}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Get In Touch</h4>
            <div className="space-y-3">
              <a href="mailto:naamaabucheri@gmail.com" className="flex items-center text-background/80 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                naamaabucheri@gmail.com
              </a>
              <a href="tel:0707438686" className="flex items-center text-background/80 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                0707 438 686
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm mb-4 md:mb-0">© 2025 Naama Abucheri. All rights reserved.</p>
          <div className="flex space-x-4">
            <Button variant="outline" size="sm" asChild>
              <a href="mailto:naamaabucheri@gmail.com" className="border-primary/20 text-background hover:bg-primary hover:text-primary-foreground">
                Email Me
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="tel:0707438686" className="border-primary/20 text-background hover:bg-primary hover:text-primary-foreground">
                Call Me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;