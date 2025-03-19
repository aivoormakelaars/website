import CallToAction from "@/components/call-to-action";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import { HeroHeader } from "@/components/hero8-header";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";


export default function Home() {
  return (
    <div>
      <HeroHeader/>
      <Pricing/>
      <Testimonials/>
      <CallToAction/>
      <FooterSection/>
    </div>
  );
}