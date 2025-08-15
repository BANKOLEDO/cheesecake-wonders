import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MenuSection from "@/components/sections/MenuSection";
import CakeMarquee from "@/components/CakeMarquee.client";
import ScrollReveal from "@/components/ScrollReveal.client";

export default function Home() {
  return (
    <div className="flex flex-col w-[100vw] justify-center space-y-12">
      <ScrollReveal id="home" className="scroll-mt-20" delay={0.5}>
        <HeroSection />
      </ScrollReveal>

      <ScrollReveal delay={0.5}>
        <CakeMarquee />
      </ScrollReveal>

      <ScrollReveal delay={0.5}>
        <AboutSection />
      </ScrollReveal>

      <ScrollReveal delay={0.5}>
        <CakeMarquee />
      </ScrollReveal>

      <ScrollReveal delay={0.5}>
        <MenuSection />
      </ScrollReveal>

      <ScrollReveal delay={0.5}>
        <CakeMarquee />
      </ScrollReveal>
    </div>
  );
}
