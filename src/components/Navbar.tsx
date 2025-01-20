"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-marion text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo & Brand Name */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/apple-touch-icon.png"
            alt="LoonTune Logo"
            width={40}
            height={40}
            priority
          />
          <span className="text-xl font-bold text-white hover:text-marion-accent">
            LoonTune
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLinks />
        </nav>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden bg-marion-dark shadow-md transition-all duration-300 ${
          isOpen
            ? "max-h-screen opacity-100 py-4"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4 text-lg">
          <NavLinks mobile />
        </ul>
      </div>
    </header>
  );
}

// Navigation Links Component (Reusable for Desktop & Mobile)
function NavLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <div
      className={`flex ${
        mobile ? "flex-col space-y-3" : "space-x-8"
      } text-center`}
    >
      <Link href="/" className="text-white hover:text-marion-accent px-4 py-2">
        Home
      </Link>
      <Link
        href="/instructions"
        className="text-white hover:text-marion-accent px-4 py-2"
      >
        How It Works
      </Link>
      <Link
        href="/buy"
        className="text-white hover:text-marion-accent px-4 py-2"
      >
        Buy
      </Link>
      <Link
        href="/featured-on-tv"
        className="text-white hover:text-marion-accent px-4 py-2"
      >
        Featured on TV
      </Link>
      <Link
        href="/about"
        className="text-white hover:text-marion-accent px-4 py-2"
      >
        History
      </Link>
    </div>
  );
}
