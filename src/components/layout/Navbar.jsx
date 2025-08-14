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

  return (
    <nav className="shadow-md bg-background fixed top-0 left-0 w-full px-[0.5rem] md:px-[2rem] lg:px-[8rem] z-50">
      <div className="mx-auto md:mx-0 px-4 py-4 flex justify-between md:justify-between items-center">
        {/* Logo */}
        <a href="#home">
          <Image
            src="/images/cheesecake-wonders-logo.png"
            alt="Cheesecake Wonders Logo"
            width={80}
            height={80}
            priority
            className="border border-transparent rounded-full"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex md:flex-row md:justify-between items-centertext-white space-x-8 bg-primary rounded-md shadow-lg">
            <a href="#home" className="nav-item hover-white">
              Home
            </a>
            <a href="#about" className="nav-item hover-white">
              About
            </a>
            <a href="#menu" className="nav-item hover-white">
              Menu
            </a>
            <a href="#contact" className="nav-item hover-white">
              Contact
            </a>
        </div>

        <Button className="hidden md:flex" size="sm" variant="outline">
          <a href="#order">Sign Up</a>
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
            className="absolute top-6 right-[4%]"
          >
            <Image
              src="/images/icon-close.svg"
              alt="Close menu"
              width={24}
              height={24}
            />
          </button>
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="nav-item hover-brown "
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="nav-item hover-brown"
          >
            About
          </a>
          <a
            href="#menu"
            onClick={() => setIsOpen(false)}
            className="nav-item hover-brown"
          >
            Menu
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="nav-item"
          >
            Contact
          </a>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIsOpen(false)}
          >
            <a href="#order">Sign Up</a>
          </Button>
        </div>
      )}
    </nav>
  );
}
