import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Infinity, Zap, BookOpen, Users, Award } from "lucide-react";
import vedicImage from "@/assets/vedic-maths.jpg";

const VedicMathsSection = () => {
  const techniques = [
    {
      name: "Nikhilam Multiplication",
      description: "Revolutionary technique for multiplying numbers close to base values",
      example: "97 × 96 = 9312 (solved in seconds)"
    },
    {
      name: "Vertically & Crosswise",
      description: "Universal method for multiplication and algebraic operations",
      example: "Multiply any 2-digit numbers instantly"
    },
    {
      name: "Duplex Method",
      description: "Advanced technique for squares and complex calculations",
      example: "Find squares of any number mentally"
    },
    {
      name: "Digit Sum Method",
      description: "Quick verification and calculation shortcuts",
      example: "Instant addition and subtraction checks"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Speed",
      description: "Solve complex calculations 10-15 times faster than conventional methods"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Mental Agility",
      description: "Enhances memory, concentration, and logical thinking abilities"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Creative Thinking",
      description: "Develops innovative problem-solving approaches and mathematical intuition"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Academic Excellence",
      description: "Dramatically improves performance in mathematics and related subjects"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Confidence Building",
      description: "Transforms math anxiety into mathematical confidence and enthusiasm"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Competitive Edge",
      description: "Provides significant advantage in competitive exams and standardized tests"
    }
  ];

  const sutras = [
    "Ekadhikina Purvena - By one more than the previous one",
    "Nikhilam Navatashcaramam Dashatah - All from 9 and last from 10",
    "Urdhva-Tiryagbyham - Vertically and crosswise",
    "Paravartya Yojayet - Transpose and adjust"
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.link/k4scx5", "_blank");
  };

  return (
    <section id="vedic" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-lg px-6 py-2 border-primary text-primary">
            Ancient Wisdom, Modern Application
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold font-playfair mb-6">
            Vedic Mathematics: <span className="gradient-text">The Art of Calculation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the magical world of Vedic Mathematics - ancient Indian techniques that make complex calculations 
            simple, fast, and fun. Transform your child into a mathematical wizard.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl glow-shadow">
              <img 
                src={vedicImage} 
                alt="Ancient Vedic mathematics manuscripts and symbols" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Floating mathematics symbols */}
              <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground rounded-full p-3 animate-pulse">
                <Infinity className="h-6 w-6" />
              </div>
              <div className="absolute bottom-4 left-4 bg-secondary/90 backdrop-blur-sm text-secondary-foreground rounded-full p-3 animate-pulse">
                <Sparkles className="h-6 w-6" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold font-playfair">5000-Year-Old Mathematical Secrets</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Vedic Mathematics consists of 16 powerful sutras (formulas) that can solve mathematical problems 
                in areas such as arithmetic, algebra, geometry, and calculus. These techniques are not just fast - 
                they're elegant, logical, and incredibly effective.
              </p>
            </div>

            {/* Key Sutras */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Core Sutras We Teach:</h4>
              <div className="space-y-3">
                {sutras.map((sutra, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-primary/10 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <p className="text-muted-foreground italic">{sutra}</p>
                  </div>
                ))}
              </div>
            </div>

            <Button onClick={handleWhatsApp} size="lg" className="glow-shadow">
              Explore Vedic Maths
            </Button>
          </div>
        </div>

        {/* Techniques */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-playfair mb-4">Powerful Calculation Techniques</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn these time-tested methods that will revolutionize your approach to mathematics
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {techniques.map((technique, index) => (
              <Card key={index} className="group hover:shadow-lg smooth-transition">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-primary to-primary-glow p-2 rounded-lg">
                      <Sparkles className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <span>{technique.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">{technique.description}</p>
                  <div className="bg-primary/5 p-3 rounded-lg border-l-4 border-l-primary">
                    <p className="text-sm font-medium text-primary">{technique.example}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold font-playfair mb-4">Benefits of Vedic Mathematics</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Why thousands of students worldwide are choosing Vedic Mathematics for academic excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center group hover:shadow-lg smooth-transition">
              <CardHeader className="pb-3">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit group-hover:bg-primary/20 smooth-transition">
                  <div className="text-primary">{benefit.icon}</div>
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Brain = ({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5L14.5 4L11.5 4L11 7.5L5 7V9L11 8.5V12C11 13.1 11.9 14 13 14H15V16H13C11.9 16 11 16.9 11 18V22H13V18H15V22H17V18C17 16.9 16.1 16 15 16H13V14H15C16.1 14 17 13.1 17 12V8.5L21 9Z" fill="currentColor"/>
  </svg>
);

export default VedicMathsSection;