
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#111318]/90 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10"
      >
        {/* Logo */}
        <Link
          href="#home"
          className="text-2xl font-bold tracking-tight text-[#F3F4F6]"
          onClick={() => setMenuOpen(false)}
          aria-label="Shahzaib Karamat home"
        >
          SK<span className="text-[#A78BFA]">.</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-[#A1A1AA] transition-colors duration-200 hover:text-[#F3F4F6]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Resume button */}
        <Link
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-lg border border-[#A78BFA]/40 px-4 py-2.5 text-sm font-medium text-[#F3F4F6] transition-colors hover:border-[#A78BFA] hover:bg-[#A78BFA]/10 md:inline-flex"
        >
          Resume
          <ArrowUpRight size={16} />
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="rounded-lg p-2 text-[#F3F4F6] transition-colors hover:bg-white/5 md:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-white/8 bg-[#111318] px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-[#A1A1AA] transition-colors hover:bg-white/5 hover:text-[#F3F4F6]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-[#A78BFA]/40 px-4 py-3 text-sm font-medium text-[#F3F4F6]"
            >
              View Resume <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
