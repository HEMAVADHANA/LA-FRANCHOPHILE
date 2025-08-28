import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Clock, BookOpen, Award, Headphones } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Users,
      title: "100% Online Classes",
      description: "Learn from anywhere with our comprehensive online platform"
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Schedule classes according to your convenience"
    },
    {
      icon: BookOpen,
      title: "Customized Study Plans",
      description: "Personalized learning paths based on your goals and level"
    },
    {
      icon: Award,
      title: "Experienced Trainers",
      description: "Learn from certified French language experts"
    },
    {
      icon: Headphones,
      title: "All Levels & Boards",
      description: "Support for beginners to advanced, plus school curricula"
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "High success rates in DELF/DALF and other examinations"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose LA FRANCHOPHILE?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to making French learning accessible, effective, and enjoyable for students of all levels
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-card transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-french rounded-lg flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-gradient-french rounded-2xl p-8 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary-foreground mb-2">500+</div>
                <div className="text-primary-foreground/80">Students Trained</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-foreground mb-2">95%</div>
                <div className="text-primary-foreground/80">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-foreground mb-2">5+</div>
                <div className="text-primary-foreground/80">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-foreground mb-2">24/7</div>
                <div className="text-primary-foreground/80">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;