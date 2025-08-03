import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import MapSection from "./MapSection";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childAge: "",
    program: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hello! I'm interested in Ace Arithmetic Academy programs.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Child's Age: ${formData.childAge}
Program Interest: ${formData.program}
Message: ${formData.message}

Please contact me for more information.`;

    const whatsappUrl = `https://wa.me/+919876543210?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Message Sent!",
      description: "We'll contact you soon via WhatsApp.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      childAge: "",
      program: "",
      message: ""
    });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.link/k4scx5", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+919876543210", "_self");
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Call Us",
      content: "+91 98765 43210",
      action: handleCall,
      description: "Mon-Sat: 10:30 AM - 7 PM, Sun: 11 AM - 1 PM"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "WhatsApp",
      content: "Quick Response",
      action: handleWhatsApp,
      description: "Instant support available"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      content: "info@acearithmetic.com",
      action: () => window.open("mailto:info@acearithmetic.com"),
      description: "24/7 email support"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      content: "Rajendra Nagar, Hyderabad",
      action: () => window.open("https://maps.app.goo.gl/Q2KW2KdhcX2F4HPP8", "_blank"),
      description: "Click to view on Google Maps"
    }
  ];

  const programs = [
    "Abacus Mental Math",
    "Vedic Mathematics", 
    "Combined Program",
    "Advanced Training",
    "Online Classes",
    "Home Tuition"
  ];

  const features = [
    "Experienced instructors",
    "Small batch sizes",
    "Regular progress tracking",
    "Certificate programs",
    "Flexible timings"
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-lg px-6 py-2 border-primary text-primary">
            Get Started Today
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold font-playfair mb-6">
            Contact <span className="gradient-text">Ace Arithmetic Academy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to unlock your child's mathematical potential? Get in touch with us today for more information 
            about our programs. Let's begin this incredible journey together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold font-playfair mb-4">Get More Information</h3>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and we'll contact you within 24 hours with detailed information about our programs.
              </p>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <span>Contact Form</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Parent's Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number *</label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Child's Age *</label>
                      <Input
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleInputChange}
                        placeholder="e.g., 8 years"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Program Interest *</label>
                      <select
                        name="program"
                        value={formData.program}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-input rounded-md bg-background"
                        required
                      >
                        <option value="">Select a program</option>
                        {programs.map((program, index) => (
                          <option key={index} value={program}>{program}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Additional Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Any specific questions or requirements..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full glow-shadow">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold font-playfair mb-6">Get in Touch</h3>
              
              {/* Contact Methods */}
              <div className="grid gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="group hover:shadow-lg smooth-transition cursor-pointer" onClick={info.action}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 smooth-transition">
                          <div className="text-primary">{info.icon}</div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1">{info.title}</h4>
                          <p className="text-primary font-medium mb-1">{info.content}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-6 mb-8">
                <h4 className="font-semibold text-lg mb-4 flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-primary" />
                  Quick Contact Options
                </h4>
                <div className="space-y-3">
                  <Button onClick={handleWhatsApp} className="w-full justify-start" variant="outline">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp: Instant Response
                  </Button>
                  <Button onClick={handleCall} className="w-full justify-start" variant="outline">
                    <Phone className="mr-2 h-4 w-4" />
                    Call: +91 98765 43210
                  </Button>
                </div>
              </div>

              {/* Map Section */}
              <MapSection />

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle>Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;