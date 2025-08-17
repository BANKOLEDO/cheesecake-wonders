"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="scroll-mt-20 bg-primary px-6 sm:px-6 md:px-10 lg:px-20 text-center py-7 flex flex-col md:flex-row justify-center items-center gap-3 md:items-start md:justify-center mx-5 sm:mx-8 md:mx-10 xl:mx-12 2xl:mx-auto lg:justify-evenly rounded-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }} // runs every time it's in view
    >
      {/* Left Content */}
      <motion.div
        className="w-full max-w-3xl p-3 xl:max-w-4xl flex flex-col items-center justify-center md:items-start md:justify-between md:text-left gap-3"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }} // also repeat
      >
        <h1 className="text-xl xs:text-3xl xmd:text-4xl md:text-4xl 2xl:text-5xl font-bold text-white hover:text-grey-400">
          Contact Us
        </h1>
        <p className="text-center md:text-left mx-4 my-2 md:mx-0 text-lg xs:text-lg xmd:text-md xl:text-xl text-white hover:text-grey-400 font-semibold">
          Need to get in touch with us? Either fill out the form with your
          inquiry or find the organisation social handles you'd like to connect
          below.
        </p>
        <img
          src="/images/contact-cheesecake.png"
          alt="Contact Cheesecake"
          className="hidden md:flex w-full max-w-md mb-6 md:mb-0"
        />
      </motion.div>

      {/* Right Form */}
      <motion.form
        className="w-full bg-card max-w-sm mx-auto xl:mx-0 p-3 grid gap-6 border-4 border-background rounded-md"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: false, amount: 0.2 }} // 👈 repeats as well
      >
        {/* Name */}
        <div className="flex flex-col">
          <Input
            id="name"
            type="text"
            placeholder="Your Name"
            className="bg-background text-primary"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="bg-background text-primary"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <Textarea
            id="message"
            placeholder="Write your message here..."
            rows={5}
            className="bg-background text-primary resize-none"
          />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="bg-amber-900 text-white hover:bg-amber-800 w-full sm:w-auto mx-auto"
        >
          Contact Us Now
        </Button>
      </motion.form>
    </motion.section>
  );
}
