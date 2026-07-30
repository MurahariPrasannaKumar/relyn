import dynamic from "next/dynamic";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { Navigation } from "@/components/sections/navigation";

const TrustStorySection = dynamic(() =>
  import("@/components/sections/trust-story-section").then((mod) => mod.TrustStorySection)
);
const WhyChooseSection = dynamic(() =>
  import("@/components/sections/why-choose-section").then((mod) => mod.WhyChooseSection)
);
const ServicesSection = dynamic(() =>
  import("@/components/sections/services-section").then((mod) => mod.ServicesSection)
);
const HowItWorksSection = dynamic(() =>
  import("@/components/sections/how-it-works-section").then((mod) => mod.HowItWorksSection)
);
const TestimonialsSection = dynamic(() =>
  import("@/components/sections/testimonials-section").then((mod) => mod.TestimonialsSection)
);
const AreasSection = dynamic(() =>
  import("@/components/sections/areas-section").then((mod) => mod.AreasSection)
);
const LookingForWorkSection = dynamic(() =>
  import("@/components/sections/looking-for-work-section").then(
    (mod) => mod.LookingForWorkSection
  )
);
const FAQSection = dynamic(() =>
  import("@/components/sections/faq-section").then((mod) => mod.FAQSection)
);
const FinalCTASection = dynamic(() =>
  import("@/components/sections/final-cta-section").then((mod) => mod.FinalCTASection)
);

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
