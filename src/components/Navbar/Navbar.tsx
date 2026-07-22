"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Header,
  NavContainer,
  LogoLink,
  DesktopNav,
  NavLink,
  MobileMenuButton,
  MobileMenu,
  MobileNav,
  MobileNavLink
} from "./Navbar.styles";

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
    <Header>
      <NavContainer>
        <LogoLink href="/">
          <Image
            src="/img/logo/logo-blanco-2.png"
            alt="Forester Revestimientos"
            width={200}
            height={70}
            priority
          />
        </LogoLink>

        {/* Desktop Nav */}
        <DesktopNav>
          {navLinks.map((link) => (
            <NavLink key={link.name} href={link.href}>
              {link.name}
              <span />
            </NavLink>
          ))}
        </DesktopNav>

        {/* Mobile Nav Toggle */}
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg
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
        </MobileMenuButton>
      </NavContainer>

      {/* Mobile Nav Menu */}
      <MobileMenu $isOpen={isMobileMenuOpen}>
        <MobileNav>
          {navLinks.map((link) => (
            <MobileNavLink
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </MobileNavLink>
          ))}
        </MobileNav>
      </MobileMenu>
    </Header>
  );
}
