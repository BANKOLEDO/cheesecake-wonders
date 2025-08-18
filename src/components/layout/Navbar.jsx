"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on resize if >= md breakpoint
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const headerOffset = 150; // height of your fixed navbar in px
    const elementPosition = section.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
  setIsOpen(false); // close menu if mobile
};

  return (
    <nav className="shadow-md bg-background fixed top-0 h-24 left-0 w-full px-[0.5rem] md:px-[2rem] lg:px-[8rem] z-50">
      <div className="mx-auto md:mx-0 px-4 py-4 flex justify-between md:justify-between items-center">
        {/* Logo */}
        <button onClick={() => scrollToSection("home")}>
          <Image
            src="/images/cheesecake-wonders-logo.webp"
            alt="Cheesecake Wonders Logo"
            width={80}
            height={80}
            priority
            className="border border-transparent rounded-full"
          />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex md:flex-row md:justify-evenly items-centertext-white space-x-2 xl:space-x-4 bg-primary rounded-md shadow-lg">
          <button onClick={() => scrollToSection("home")} className="nav-item hover-white">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="nav-item hover-white">
            About
          </button>
          <button onClick={() => scrollToSection("menu")} className="nav-item hover-white">
            Menu
          </button>
          <button onClick={() => scrollToSection("blog")} className="nav-item hover-white">
            Blog
          </button>
          <button onClick={() => scrollToSection("contact")} className="nav-item hover-white">
            Contact
          </button>
        </div>

        <Button className="hidden md:flex" size="sm" variant="outline" onClick={() => scrollToSection("order")}>
          Sign Up
        </Button>

        {/* Mobile Menu Button */}
        <div className="md:hidden relative z-50">
          {!isOpen && (
            <button onClick={() => setIsOpen(true)}>
              <Image
                src="/images/icon-hamburger.svg"
                alt="Open menu"
                width={24}
                height={24}
              />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#FFF8E7]/90 flex flex-col items-center pt-10 space-y-8 md:hidden z-40">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-[5%]"
          >
            <Image
              src="/images/icon-close.svg"
              alt="Close menu"
              width={24}
              height={24}
            />
          </button>
          <button onClick={() => scrollToSection("home")} className="nav-item hover-brown">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="nav-item hover-brown">
            About
          </button>
          <button onClick={() => scrollToSection("menu")} className="nav-item hover-brown">
            Menu
          </button>
          <button onClick={() => scrollToSection("blog")} className="nav-item hover-brown">
            Blog
          </button>
          <button onClick={() => scrollToSection("contact")} className="nav-item hover-brown">
            Contact
          </button>
          <Button size="sm" variant="outline" onClick={() => scrollToSection("order")}>
            Sign Up
          </Button>
        </div>
      )}
    </nav>
  );
}
