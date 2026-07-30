import { AreasSection } from "@/components/sections/areas-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { LookingForWorkSection } from "@/components/sections/looking-for-work-section";
import { Navigation } from "@/components/sections/navigation";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrustStorySection } from "@/components/sections/trust-story-section";
import { WhyChooseSection } from "@/components/sections/why-choose-section";

export default function App() {
  return (
    <div className="premium-shell">
      <Navigation />
      <main>
        <HeroSection />
        <TrustStorySection />
        <WhyChooseSection />
        <ServicesSection />
        <HowItWorksSection />

        <TestimonialsSection />
        <AreasSection />
        <LookingForWorkSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
