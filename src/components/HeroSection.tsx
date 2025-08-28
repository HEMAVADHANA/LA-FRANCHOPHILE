import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Clock, Users, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-hero min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
            🇫🇷 100% Online French Classes
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Master French with 
            <span className="block text-french-red">LA FRANCHOPHILE</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            Fluent Futures Begin Here
          </p>

          {/* Description */}
          <p className="text-lg text-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Learn French online with experienced trainers. From beginners to advanced levels, 
            DELF/DALF preparation, and school curriculum support - we've got you covered.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => window.open('https://wa.me/918667891014', '_blank')}
              className="text-lg px-8 py-3"
            >
              Talk to Us on WhatsApp
            </Button>
            <Button 
              variant="french-outline" 
              size="lg"
              onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-3"
            >
              Get Course Info
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-card">
              <Globe className="h-8 w-8 text-primary mb-2" />
              <p className="text-sm font-medium text-center">100% Online</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-card">
              <Clock className="h-8 w-8 text-primary mb-2" />
              <p className="text-sm font-medium text-center">Flexible Timings</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-card">
              <Users className="h-8 w-8 text-primary mb-2" />
              <p className="text-sm font-medium text-center">Expert Trainers</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-card">
              <Award className="h-8 w-8 text-primary mb-2" />
              <p className="text-sm font-medium text-center">All Levels</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;