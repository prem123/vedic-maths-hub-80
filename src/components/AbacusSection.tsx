import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Brain, Calculator, Target } from "lucide-react";
import abacusImage from "@/assets/abacus-tool.jpg";

const AbacusSection = () => {
  const levels = [
    {
      level: 1,
      title: "Foundation",
      content: "Introduction, Rules (SFR & BFR), Practice For Upto 1 Digit 5 Rows"
    },
    {
      level: 2,
      title: "Building Skills",
      content: "2 Digit Addition/Subtraction, Practice up to 1 Digit 15 Rows, 2 Digit 12 Rows"
    },
    {
      level: 3,
      title: "Expanding Horizons",
      content: "3 Digit Addition/Subtraction, Practice up to 2 Digit 20 Rows, enhanced speed training"
    },
    {
      level: 4,
      title: "Multiplication Mastery",
      content: "4 Digit calculations, Introduction to Multiplication, 2 Digit × 1 Digit operations"
    },
    {
      level: 5,
      title: "Division Discovery",
      content: "Division introduction, 3 Digit × 1 Digit multiplication, 3 Digit ÷ 2 Digit division"
    },
    {
      level: 6,
      title: "Advanced Operations",
      content: "4 Digit operations, 4 Digit × 1 Digit multiplication, 3 Digit ÷ 1 Digit division"
    },
    {
      level: 7,
      title: "Complex Calculations",
      content: "5 Digit operations, 3 Digit × 2 Digit multiplication, 4 Digit ÷ 2 Digit division"
    },
    {
      level: 8,
      title: "Expert Level",
      content: "Multi-digit mastery, 6 Digit ÷ 2 Digit division, Decimal operations, Lightning speed"
    }
  ];

  const benefits = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Whole Brain Development",
      description: "Activates left and right brain triggering complete cognitive enhancement"
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Mental Math Mastery",
      description: "Calculate faster than a calculator using mental visualization techniques"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Number Confidence",
      description: "Removes math fear and builds strong numerical foundation from early age"
    }
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.link/k4scx5", "_blank");
  };

  return (
    <section id="abacus" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
            Abacus Mental Math
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold font-playfair mb-6">
            Master the Art of <span className="gradient-text">Mental Calculation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Just like your brain can visualize a blue elephant chasing a white mouse, our students create a mental image of the abacus. 
            They mentally move the beads to perform calculations at lightning speed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold font-playfair">How Our Abacus Program Works</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our comprehensive 8-level program systematically builds your child's mental calculation abilities 
                through structured learning and consistent practice. Each level introduces new concepts while 
                reinforcing previous skills.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <div className="text-primary">{benefit.icon}</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{benefit.title}</h4>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button onClick={handleWhatsApp} size="lg" className="glow-shadow">
              Start Abacus Journey
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl glow-shadow">
              <img 
                src={abacusImage} 
                alt="Traditional abacus learning tool" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Levels Grid */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold font-playfair mb-4">8-Level Program Structure</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our structured approach ensures progressive skill development from basic operations to advanced mental calculations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((level, index) => (
              <Card key={index} className="group hover:shadow-lg smooth-transition border-l-4 border-l-primary">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="mb-2">Level {level.level}</Badge>
                    <CheckCircle className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 smooth-transition" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{level.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{level.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbacusSection;