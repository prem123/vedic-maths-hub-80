import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import aceLogo from "@/assets/ace-logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.link/k4scx5", "_blank");
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 smooth-transition">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={aceLogo} alt="Ace Arithmetic Academy" className="h-12 w-12" />
            <div>
              <h1 className="text-2xl academy-name">Ace Arithmetic Academy</h1>
              <p className="text-xs text-muted-foreground font-medium tracking-wide">Excellence in Mathematics</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary smooth-transition font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("abacus")}
              className="text-foreground hover:text-primary smooth-transition font-medium"
            >
              Abacus
            </button>
            <button 
              onClick={() => scrollToSection("vedic")}
              className="text-foreground hover:text-primary smooth-transition font-medium"
            >
              Vedic Maths
            </button>
            <button 
              onClick={() => scrollToSection("students")}
              className="text-foreground hover:text-primary smooth-transition font-medium"
            >
              Students
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary smooth-transition font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" onClick={handleWhatsApp} className="flex items-center space-x-2">
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </Button>
            <Button variant="default" size="sm" onClick={() => scrollToSection("contact")} className="glow-shadow">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-left text-foreground hover:text-primary smooth-transition font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("abacus")}
                className="text-left text-foreground hover:text-primary smooth-transition font-medium"
              >
                Abacus
              </button>
              <button 
                onClick={() => scrollToSection("vedic")}
                className="text-left text-foreground hover:text-primary smooth-transition font-medium"
              >
                Vedic Maths
              </button>
              <button 
                onClick={() => scrollToSection("students")}
                className="text-left text-foreground hover:text-primary smooth-transition font-medium"
              >
                Students
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-primary smooth-transition font-medium"
              >
                Contact
              </button>
              <div className="flex space-x-3 pt-2">
                <Button variant="outline" size="sm" onClick={handleWhatsApp} className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </Button>
                <Button variant="default" size="sm" onClick={() => scrollToSection("contact")}>
                  Get Started
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;