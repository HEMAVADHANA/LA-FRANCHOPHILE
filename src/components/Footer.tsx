import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Github, Linkedin, Phone } from "lucide-react";
import TorchBearerModal from "./TorchBearerModal";
import { useState } from "react";

const Footer = () => {
  const [isTorchBearerModalOpen, setIsTorchBearerModalOpen] = useState(false);
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-12 bg-primary-foreground/20 rounded-sm flex items-center justify-center">
                <div className="text-primary-foreground font-bold text-lg">🗼</div>
              </div>
              <div>
                <h3 className="text-xl font-bold">LA FRANCHOPHILE</h3>
                <p className="text-primary-foreground/80 text-sm">Fluent Futures Begin Here</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-4 max-w-md">
              Your premier destination for online French language learning. From beginners to advanced levels, 
              we provide comprehensive training for all your French learning needs.
            </p>
            <div className="flex space-x-3">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => window.open('https://wa.me/918667891014', '_blank')}
              >
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => window.open('mailto:lafranchophile@gmail.com', '_blank')}
              >
                <Mail className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => window.open('#', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => window.open('#', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Courses
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span className="text-primary-foreground/80">+91 8667891014</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-primary-foreground/80">lafranchophile@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-primary-foreground/80">100% Online Classes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © 2025 TB Solutions. All rights reserved.
            </div>
            <div className="text-primary-foreground/80 text-sm flex items-center space-x-2">
              <span>Powered by</span>
              <button 
                onClick={() => setIsTorchBearerModalOpen(true)}
                className="text-primary-foreground font-semibold hover:text-primary-foreground/80 transition-colors underline decoration-dashed underline-offset-2 hover:decoration-solid"
              >
                TORCH BEARER
              </button>
              <span>| G. V. V. Satyanarayana</span>
            </div>
          </div>
        </div>
      </div>
      
      <TorchBearerModal 
        isOpen={isTorchBearerModalOpen} 
        onClose={() => setIsTorchBearerModalOpen(false)} 
      />
    </footer>
  );
};

export default Footer;