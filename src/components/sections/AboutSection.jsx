"use client";

import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className="scroll-mt-20 w-[20rem] min-w-[85vw] p-3 mx-auto flex flex-col md:flex-row-reverse items-center bg-red-200 rounded-lg md:justify-between text-center mt-20">
            <div className="flex flex-col text-center md:items-start md:text-left lg:p-2 gap-2 xl:pr-20">
                <h1 className="text-xl xs:text-3xl xmd:text-4xl md:text-4xl 2xl:text-5xl font-bold text-primary mx-4 md:mx-0 hover:text-orange-900">We Love Cheesecake</h1>
                <h2 className="text-xl xmd:text-md lg:text-3xl  font-semibold text-primary hover:text-orange-900">Discover Our Cheesecake Story</h2>
            <p className="p-style">
                At Cheesecake Love, quality is our cornerstone. Each cheesecake is crafted with the finest ingredients, meticulous attention to detail, and a dash of creativity
            </p>
            <p className="p-style">
                We believe in delivering not just deserts but an experience that delights the senses and warms the heart. 
            </p>
            <div className="mt-10 flex gap-4 justify-center">
                <Button size="lg">Read More</Button>
            </div>
            </div>
           {/*  Animated Cheesecake Image */}
        <motion.img
            src="/images/about-cheesecake.png"
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
    )
}