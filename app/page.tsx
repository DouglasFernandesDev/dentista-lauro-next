import { AboutSection } from "./_components/about-section";
import { ColorStripe } from "./_components/color-stripe";
import { ContactSection } from "./_components/contact-section";
import { CtaSection } from "./_components/cta-section";
import { FloatingWhatsappButton } from "./_components/floating-whatsapp-button";
import { Hero } from "./_components/hero";
import { HowItWorksSection } from "./_components/how-it-works-section";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";
import { ValuePillars } from "./_components/value-pillars";
import { WorksSection } from "./_components/works-section";

export default function HomePage() {
  return (
    <>
      <ColorStripe />
      <SiteHeader />

      <main id="conteudo">
        <Hero />
        <ValuePillars />
        <WorksSection />
        <HowItWorksSection />
        <AboutSection />
        <CtaSection />
        <ContactSection />
      </main>

      <ColorStripe />
      <SiteFooter />
      <FloatingWhatsappButton />
    </>
  );
}
