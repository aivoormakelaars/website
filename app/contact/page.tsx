import CallToAction from "@/components/call-to-action";
import ContactSection from "@/components/contact";
import ContentSection from "@/components/content-2";
import FAQs from "@/components/faqs";
import Featuresess from "@/components/features-1";
import FeaturesSection from "@/components/features-8";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import { HeroHeader } from "@/components/hero8-header";
import StatsSection from "@/components/stats-4";
import WallOfLoveSection from "@/components/testimonials";


export default function Home() {
  return (
    <div>
      <HeroHeader/>
      <ContactSection/>
      <FAQs/>
      <FooterSection/>
    </div>
  );
}