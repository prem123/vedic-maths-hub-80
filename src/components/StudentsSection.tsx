import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Star, Users, Trophy, Clock } from "lucide-react";

const StudentsSection = () => {
  const videos = [
    {
      id: "L4V10wb2cVc",
      title: "Abacus Demo - Foundation Training",
      description: "Watch our instructor demonstrate basic abacus techniques and mental visualization methods",
      duration: "3:28",
      level: "Beginner"
    },
    {
      id: "ik0yGbcFwTc", 
      title: "Juniors Performing Fast Calculations",
      description: "Young students showcasing incredible speed in mental calculations using abacus techniques",
      duration: "0:46",
      level: "Intermediate"
    },
    {
      id: "cZJ2I32_FEw",
      title: "Abacus Students in Action - Level 1",
      description: "First-level students demonstrating their newly acquired mental math abilities",
      duration: "1:09", 
      level: "Beginner"
    },
    {
      id: "oqL8mblkB6A",
      title: "Advanced Students Performance",
      description: "Advanced level students solving complex calculations with lightning speed",
      duration: "0:19",
      level: "Advanced"
    }
  ];

  const achievements = [
    {
      icon: <Users className="h-6 w-6" />,
      number: "500+",
      label: "Happy Students",
      description: "Students trained successfully"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      number: "95%",
      label: "Success Rate", 
      description: "Students show significant improvement"
    },
    {
      icon: <Star className="h-6 w-6" />,
      number: "4.9",
      label: "Parent Rating",
      description: "Average satisfaction score"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      number: "3x",
      label: "Faster Calculation",
      description: "Average speed improvement"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      relation: "Mother of Arjun (Age 8)",
      content: "My son's confidence in mathematics has skyrocketed! He can now solve complex problems in his head faster than I can with a calculator.",
      rating: 5
    },
    {
      name: "Rajesh Kumar", 
      relation: "Father of Sneha (Age 10)",
      content: "The Vedic maths techniques are incredible. Sneha's academic performance has improved dramatically across all subjects.",
      rating: 5
    },
    {
      name: "Meera Patel",
      relation: "Mother of Rohan (Age 7)",
      content: "From being afraid of numbers to loving mathematics - this transformation is beyond our expectations. Highly recommended!",
      rating: 5
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  const openVideo = (videoId: string) => {
    setCurrentVideo(videoId);
  };

  const closeVideo = () => {
    setCurrentVideo(null);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.link/k4scx5", "_blank");
  };

  return (
    <section id="students" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
            Student Success Stories
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold font-playfair mb-6">
            See Our Students <span className="gradient-text">Excel</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Watch real students demonstrate the incredible power of mental mathematics. 
            These young minds are calculating complex problems faster than most adults can with calculators.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center group hover:shadow-lg smooth-transition">
              <CardContent className="pt-6">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4 group-hover:bg-primary/20 smooth-transition">
                  <div className="text-primary">{achievement.icon}</div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="font-semibold text-foreground mb-1">{achievement.label}</div>
                <div className="text-sm text-muted-foreground">{achievement.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Videos */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-playfair mb-4">Watch Our Students in Action</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real demonstrations of mental math mastery from our students across different skill levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <Card key={index} className="group hover:shadow-lg smooth-transition overflow-hidden">
                 <div className="relative">
                   {/* Video Thumbnail */}
                   <div className="aspect-video relative overflow-hidden rounded-t-lg">
                     <img 
                       src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                       alt={video.title}
                       className="w-full h-full object-cover"
                     />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 smooth-transition"></div>
                     <button 
                       onClick={() => openVideo(video.id)}
                       className="absolute inset-0 flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-6 shadow-2xl smooth-transition hover:scale-110 m-auto w-20 h-20"
                     >
                       <Play className="h-8 w-8 ml-1" />
                     </button>
                     
                     {/* Duration Badge */}
                     <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                       {video.duration}
                     </div>
                     
                     {/* Level Badge */}
                     <div className="absolute top-4 right-4">
                       <Badge className={getLevelColor(video.level)}>
                         {video.level}
                       </Badge>
                     </div>
                   </div>
                 </div>
                
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2 group-hover:text-primary smooth-transition">
                    {video.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {video.description}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => openVideo(video.id)}
                    className="w-full"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Watch Video
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-playfair mb-4">What Parents Say</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real feedback from parents who have witnessed their children's mathematical transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-lg smooth-transition">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.relation}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-12">
          <h3 className="text-3xl font-bold font-playfair mb-4">Ready to Transform Your Child's Mathematical Journey?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied parents and watch your child develop incredible mental math abilities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleWhatsApp} className="glow-shadow">
              Contact Us Today
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.open("https://www.youtube.com/channel/UCALXNu1guxsNnc3gjIAILFw", "_blank")}>
              View All Videos
            </Button>
          </div>
        </div>

        {/* Video Modal */}
        {currentVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeVideo}>
            <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={closeVideo}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl font-bold z-10"
              >
                ✕
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1`}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default StudentsSection;