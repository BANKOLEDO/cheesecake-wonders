"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import SplitText from "../ui/SplitText";


export default function HeroSection() {
  return (
    <section
      id="home"
      className="scroll-mt-20 w-[20rem] min-w-[85vw] p-3 mx-auto flex flex-col md:flex-row items-center md:justify-between text-center mt-20 bg-red-200 rounded-lg"
    >  
      <div className="flex flex-col text-center md:items-start md:text-left lg:p-2">
        <SplitText
            text="Bite The World of Cheesecake Wonders"
            className="text-xl xs:text-3xl xmd:text-4xl md:text-4xl 2xl:text-5xl font-bold text-primary mx-4 md:mx-0 hover:text-orange-900"
            delay={100}
            duration={0.9}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            // rootMargin="-100px"
            wordWrapper={{
            style: { display: "inline-block", whiteSpace: "pre" }
            }}
        />
        <p className="p-style">
          We always make our customer happy by providing as many choices as
          possible
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">
            Watch Demo
          </Button>
        </div>
      </div>

      {/*  Animated Cheesecake Image */}
      <motion.img
        src="/images/hero-cheesecake.png"
        alt="Hero Cheesecake"
        className="my-5 mx-auto md:mx-0 w-full md:max-w-sm lg:max-w-xl"
        animate={{
          y: [0, -20, 0], // bounce up & down
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
