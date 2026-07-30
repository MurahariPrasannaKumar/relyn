import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";
import { Navigation } from "@/components/sections/navigation";

export const metadata: Metadata = {
  title: "Contact Us | Relyn India Pvt Ltd",
  description:
    "Get in touch with Relyn to hire verified household professionals or join our network. We respond within one business day."
};

export default function ContactPage() {
  return (
    <div className="premium-shell">
      <Navigation />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
