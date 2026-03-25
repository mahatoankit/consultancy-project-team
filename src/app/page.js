import HeroSection from "@/components/marketing/HeroSection"
import StatsSection from "@/components/marketing/StatsSection"
import ServicesSection from "@/components/marketing/ServicesSection"
import DestinationHighlightsSection from "@/components/marketing/DestinationHighlightsSection"
import TestimonialsSection from "@/components/marketing/TestimonialsSection"
import ProcessSection from "@/components/marketing/ProcessSection"
import CTASection from "@/components/marketing/CTASection"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <DestinationHighlightsSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
