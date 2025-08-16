"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="scroll-mt-20 pt-10 md:py-6 mx-7 md:mx-10 lg:px-20 flex flex-col md:flex-row items-center md:justify-between text-center mt-20"
    >
      <div className="flex flex-col text-center md:items-start md:text-left lg:p-2">
        <h1 className="text-xl xs:text-3xl xmd:text-4xl md:text-4xl xl:text-5xl 2xl:text-5xl font-bold text-primary mx-2 md:mx-0 hover:text-orange-900">
          Bite The World of Cheesecake Wonders
        </h1>
        <p className="mt-4 text-lg xs:text-lg xmd:text-md xl:text-xl text-brown-600 font-semibold mx-5 md:mx-0">
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
        className="my-5 mx-auto md:mx-0 w-full md:max-w-md lg:max-w-xl"
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
