import React, { useState } from "react";
import { X, Mail, Phone, MapPin, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface TorchBearerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TorchBearerModal: React.FC<TorchBearerModalProps> = ({ isOpen, onClose }) => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [showContactForm, setShowContactForm] = useState(false);
  const { toast } = useToast();

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // You can integrate with Google Sheets or email service here
      console.log("Contact form submitted:", contactForm);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting TORCH BEARER. We'll get back to you soon!",
      });
      
      // Reset form
      setContactForm({ name: "", email: "", subject: "", message: "" });
      setShowContactForm(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const subCompanies = [
    { name: "TB Academy", description: "Tech learning and value-based education" },
    { name: "Torchvia Solutions", description: "Automation and software products" },
    { name: "TB Digital", description: "Digital marketing and brand building" },
    { name: "TB Robotics", description: "Coming soon..." }
  ];

  const contactEmails = [
    { label: "TB Academy", email: "tbacademyofficial@gmail.com" },
    { label: "Torchvia Solutions", email: "tbdigital.official@gmail.com" },
    { label: "Personal/Brand", email: "satish.torchbearer@gmail.com" }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-xl border border-border/50 shadow-2xl">
        <DialogHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-6 w-6"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
          <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            ⚡ TORCH BEARER
          </DialogTitle>
          <p className="text-center text-muted-foreground text-lg">
            Lightning the Future, Transforming the World
          </p>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Section 1: About Us */}
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/30">
              <h3 className="text-xl font-semibold mb-4 text-primary">🧠 About Us</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                TORCH BEARER is an innovation ecosystem founded by visionary student entrepreneur 
                Ganisetti Veera Venkata Satyanarayana (Satish). Our mission is to build futuristic 
                tech solutions in education, automation, digital marketing, and robotics.
              </p>
              
              <h4 className="font-semibold mb-3 text-foreground">Sub-companies:</h4>
              <div className="space-y-3">
                {subCompanies.map((company, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-foreground">{company.name}</span>
                      <span className="text-muted-foreground"> – {company.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-company Emails */}
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/30">
              <h4 className="font-semibold mb-4 text-primary">🧾 Direct Contact Emails</h4>
              <div className="space-y-2">
                {contactEmails.map((contact, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded bg-muted/20">
                    <span className="text-sm font-medium">{contact.label}:</span>
                    <a 
                      href={`mailto:${contact.email}`} 
                      className="text-sm text-primary hover:underline"
                    >
                      {contact.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2: Contact Information */}
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/30">
              <h3 className="text-xl font-semibold mb-4 text-primary">📬 Contact Information</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">👤 Founder & CEO:</h4>
                  <p className="text-muted-foreground">Ganisetti Veera Venkata Satyanarayana (Satish)</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href="tel:+916303987443" className="text-foreground hover:text-primary">
                      +91 6303987443
                    </a>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="h-4 w-4 text-primary mt-1" />
                    <div className="space-y-1">
                      <a href="mailto:ganisettisatish34@gmail.com" className="block text-foreground hover:text-primary">
                        ganisettisatish34@gmail.com
                      </a>
                      <a href="mailto:torchbearer.startup@gmail.com" className="block text-foreground hover:text-primary">
                        torchbearer.startup@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-primary mt-1" />
                    <div className="text-foreground">
                      <p>Golagabathula Street,</p>
                      <p>Yanam – 533464, India</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Globe className="h-4 w-4 text-primary" />
                    <a 
                      href="https://thetorchbearer.xyz" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary"
                    >
                      thetorchbearer.xyz
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Toggle */}
            {!showContactForm ? (
              <Button
                onClick={() => setShowContactForm(true)}
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                <Send className="mr-2 h-5 w-5" />
                📬 Contact TORCH BEARER
              </Button>
            ) : (
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/30">
                <h4 className="font-semibold mb-4 text-primary">📬 Send us a message</h4>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <Input
                    placeholder="Subject"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                    required
                  />
                  <Textarea
                    placeholder="Your Message"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    rows={4}
                    required
                  />
                  <div className="flex space-x-3">
                    <Button type="submit" className="flex-1">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setShowContactForm(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TorchBearerModal;