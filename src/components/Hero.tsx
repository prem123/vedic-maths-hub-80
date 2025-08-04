import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Play, Star } from "lucide-react";
import heroImage from "@/assets/hero-classroom.jpg";

const Hero = () => {
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

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-bg">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm font-medium">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-primary-foreground">Trusted by 500+ families</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl hero-title text-primary-foreground">
                Unlock Your Child's{" "}
                <span className="gradient-text">Mathematical Genius</span>
              </h1>
              
              <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
                Transform your child's relationship with numbers through our proven Abacus and Vedic Mathematics programs. 
                Watch them calculate faster than a calculator while developing incredible mental abilities.
              </p>
              
              <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <p className="text-primary-foreground font-medium italic">
                  "All children are geniuses because they all have a genius organ called the brain. 
                  As parents and teachers, we must give them the tools necessary to harness their natural potential."
                </p>
                <p className="text-primary-foreground/60 text-sm mt-2">- Albert Einstein</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-background text-foreground hover:bg-background/90 glow-shadow text-lg px-8 py-6"
              >
                Contact Us Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={handleWhatsApp}
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">8</div>
                <div className="text-primary-foreground/70 text-sm">Structured Levels</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">5+</div>
                <div className="text-primary-foreground/70 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">100%</div>
                <div className="text-primary-foreground/70 text-sm">Improvement Rate</div>
              </div>
            </div>
          </div>

          {/* Video Thumbnail */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl glow-shadow">
              {/* YouTube Thumbnail */}
              <img 
                src="https://img.youtube.com/vi/L4V10wb2cVc/maxresdefault.jpg" 
                alt="Abacus Foundation Training - Ace Arithmetic Academy" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  onClick={() => openVideo("L4V10wb2cVc")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-6 shadow-2xl smooth-transition hover:scale-110"
                >
                  <Play className="h-8 w-8 ml-1" />
                </button>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-4 shadow-lg animate-pulse">
              <span className="text-2xl">🧮</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground rounded-full p-4 shadow-lg animate-pulse">
              <span className="text-2xl">✨</span>
            </div>
          </div>
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
    </section>
  );
};

export default Hero;