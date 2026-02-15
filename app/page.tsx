import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import FeaturesSection from "@/components/FeaturesSection";
import WorkoutShowcase from "@/components/WorkoutShowcase";
import TrainersSection from "@/components/TrainersSection";
import BMICalculator from "@/components/BMICalculator";
import WorkoutGenerator from "@/components/WorkoutGenerator";
import PricingSection from "@/components/PricingSection";
import SuccessStories from "@/components/SuccessStories";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main style={{ overflowX: "hidden" }}>
      <Navbar />
      <HeroSection />
      <ProgramsSection />
      <FeaturesSection />
      <WorkoutShowcase />
      <TrainersSection />
      <BMICalculator />
      <WorkoutGenerator />
      <PricingSection />
      <SuccessStories />
      <TestimonialsSection />
      <GallerySection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

