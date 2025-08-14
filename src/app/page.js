import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";

export default function Home() {
  return (
    <div className="flex flex-col w-[100vw] justify-center">
      <HeroSection />
      <AboutSection />
    </div>
  );
}
