import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, Users, GraduationCap, MessageCircle } from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      icon: MessageCircle,
      title: "Spoken French",
      description: "Master conversational French with our interactive speaking sessions",
      duration: "Duration depends on student's level",
      features: ["Interactive conversations", "Pronunciation training", "Real-life scenarios", "Confidence building"],
      badge: "Popular"
    },
    {
      icon: Award,
      title: "DELF Preparation",
      description: "Comprehensive preparation for DELF A1, A2, B1, and B2 levels",
      duration: "3-6 months per level",
      features: ["All four skills training", "Mock examinations", "Exam strategies", "Certificate guidance"],
      badge: "Certified"
    },
    {
      icon: GraduationCap,
      title: "DALF Preparation",
      description: "Advanced preparation for DALF C1 and C2 examinations",
      duration: "6-8 months per level",
      features: ["Advanced grammar", "Complex text analysis", "Academic writing", "Professional French"],
      badge: "Advanced"
    },
    {
      icon: BookOpen,
      title: "TEF Coaching",
      description: "Specialized coaching for Test d'Évaluation de Français",
      duration: "2-4 months",
      features: ["Test strategies", "Time management", "Practice tests", "Score improvement"],
      badge: "Specialized"
    },
    {
      icon: Users,
      title: "School Students",
      description: "French classes for school students across all educational boards",
      duration: "Academic year support",
      features: ["CBSE curriculum", "ICSE support", "State boards", "International curricula"],
      badge: "Academic"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our French Courses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Comprehensive French language programs designed to meet your specific learning goals
            </p>
            <div className="bg-accent p-4 rounded-lg max-w-lg mx-auto">
              <p className="text-sm text-foreground font-medium">
                📋 Course structure and fees vary based on student needs and level
              </p>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {courses.map((course, index) => (
              <Card key={index} className="border-border hover:shadow-elegant transition-all duration-300 hover:scale-105 relative overflow-hidden">
                {course.badge && (
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 right-4 bg-french-red text-french-red-foreground"
                  >
                    {course.badge}
                  </Badge>
                )}
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-french rounded-lg flex items-center justify-center mb-4">
                    <course.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-primary">{course.title}</CardTitle>
                  <p className="text-muted-foreground">{course.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-4">
                    <p className="text-sm font-medium text-foreground mb-2">Duration:</p>
                    <p className="text-sm text-muted-foreground">{course.duration}</p>
                  </div>
                  <div className="mb-6">
                    <p className="text-sm font-medium text-foreground mb-3">What you'll learn:</p>
                    <ul className="space-y-2">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    variant="french-outline" 
                    className="w-full"
                    onClick={() => window.open('https://wa.me/918667891014', '_blank')}
                  >
                    Get Course Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-card p-8 rounded-2xl shadow-card">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Start Your French Journey?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Get in touch with us to discuss your learning goals and find the perfect course for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => window.open('https://wa.me/918667891014', '_blank')}
              >
                WhatsApp for Course Info
              </Button>
              <Button 
                variant="french-outline" 
                size="lg"
                onClick={() => window.open('mailto:lafranchophile@gmail.com', '_blank')}
              >
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;