import { MessageCircle, Phone, Mail, Youtube, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import aceLogo from "@/assets/ace-logo.svg";

const Footer = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.link/k4scx5", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+919876543210", "_self");
  };

  const handleEmail = () => {
    window.open("mailto:info@acearithmetic.com", "_self");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", action: () => scrollToSection("home") },
    { name: "Abacus Program", action: () => scrollToSection("abacus") },
    { name: "Vedic Mathematics", action: () => scrollToSection("vedic") },
    { name: "Student Success", action: () => scrollToSection("students") },
    { name: "Contact Us", action: () => scrollToSection("contact") }
  ];

  const programs = [
    "8-Level Abacus Training",
    "Vedic Mathematics Mastery",
    "Mental Math Development",
    "Online Live Classes",
    "Home Tuition Services",
    "Competitive Exam Prep"
  ];

  const socialLinks = [
    { icon: <Youtube className="h-5 w-5" />, url: "https://www.youtube.com/channel/UCALXNu1guxsNnc3gjIAILFw", name: "YouTube" },
    { icon: <Facebook className="h-5 w-5" />, url: "#", name: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, url: "#", name: "Instagram" }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <img src={aceLogo} alt="Ace Arithmetic Academy" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold font-playfair">Ace Arithmetic Academy</h3>
                <p className="text-sm text-secondary-foreground/70">Excellence in Mathematics</p>
              </div>
            </div>
            
            <p className="text-secondary-foreground/80 leading-relaxed">
              Empowering young minds with ancient mathematical wisdom and modern teaching techniques. 
              Transforming the way children perceive and excel in mathematics.
            </p>

            <div className="space-y-3">
              <p className="font-semibold">Get in Touch:</p>
              <div className="flex space-x-3">
                <Button size="sm" onClick={handleWhatsApp} className="bg-green-600 hover:bg-green-700">
                  <MessageCircle className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" onClick={handleCall}>
                  <Phone className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" onClick={handleEmail}>
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={link.action}
                    className="text-secondary-foreground/70 hover:text-secondary-foreground smooth-transition"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index} className="text-secondary-foreground/70 text-sm">
                  {program}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium">Phone:</p>
                <p className="text-secondary-foreground/70">+91 98765 43210</p>
              </div>
              
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-secondary-foreground/70">info@acearithmetic.com</p>
              </div>
              
              <div>
                <p className="font-medium">Address:</p>
                <p className="text-secondary-foreground/70 text-sm leading-relaxed">
                  House no: 2-1-7/2/10, Flat no. 101,<br/>
                  Alli Pentaiah Mallama Residency,<br/>
                  Venkateshwara Colony, Upperpally,<br/>
                  Rajendra Nagar, Hyderabad, Telangana 500048
                </p>
              </div>

              <div>
                <p className="font-medium">Class Timings:</p>
                <p className="text-secondary-foreground/70 text-sm">Mon-Sat: 10:30 AM - 7:00 PM</p>
                <p className="text-secondary-foreground/70 text-sm">Sunday: 11:00 AM - 1:00 PM</p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="font-medium mb-3">Follow Us:</p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(social.url, "_blank")}
                    className="hover:bg-primary hover:text-primary-foreground"
                  >
                    {social.icon}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-secondary-foreground/70 text-sm">
                © 2024 Ace Arithmetic Academy. All rights reserved.
              </p>
              <p className="text-secondary-foreground/60 text-xs mt-1">
                Empowering minds through mathematical excellence
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground smooth-transition"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground smooth-transition"
              >
                Terms of Service
              </button>
              <Button 
                size="sm" 
                onClick={handleWhatsApp}
                className="bg-primary hover:bg-primary/90 glow-shadow"
              >
                Start Learning Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;