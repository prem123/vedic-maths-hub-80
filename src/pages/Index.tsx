import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AbacusSection from "@/components/AbacusSection";
import VedicMathsSection from "@/components/VedicMathsSection";
import StudentsSection from "@/components/StudentsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AbacusSection />
      <VedicMathsSection />
      <StudentsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
