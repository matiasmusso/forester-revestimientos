"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinks = [
    { name: "Nosotros", href: isHome ? "#nosotros" : "/#nosotros" },
    { name: "Servicios", href: isHome ? "#servicios" : "/#servicios" },
    { name: "Productos", href: isHome ? "#productos" : "/#productos" },
    { name: "Contacto", href: isHome ? "#contacto" : "/#contacto" },
  ];

  return (
    <header
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div
        className="w-full md:w-[80%] bg-black/50 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-full py-4 px-6 md:px-10 flex items-center justify-between"
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/img/logo/logo-blanco-2.png"
            alt="Forester Revestimientos"
            width={200}
            height={70}
            className="h-12 w-auto md:h-14 object-contain transition-transform hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white text-base font-medium uppercase tracking-wide hover:text-amber-500 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-9 h-9"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`md:hidden absolute top-[110%] left-4 right-4 bg-black/95 backdrop-blur-xl border border-white/10 rounded-3xl transition-all duration-300 overflow-hidden shadow-2xl ${
          isMobileMenuOpen ? "max-h-96 py-4 opacity-100" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <nav className="flex flex-col gap-4 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-lg font-medium hover:text-amber-500 transition-colors py-2 border-b border-gray-800 last:border-0"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
