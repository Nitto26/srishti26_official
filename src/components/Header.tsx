"use client";

import Link from "next/link";
import { SrishtiFestLogo } from "./SrishtiFestLogo";
import { Button } from "./ui/button";

type HeaderProps = {
  show: boolean;
};

const navLinks = [
  { href: "#timeline", label: "Timeline" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#photos", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header({ show }: HeaderProps) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm transition-opacity duration-500 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!show}
    >
      <Link href="/" className="flex items-center gap-4" aria-label="SrishtiFest Home">
        <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">Srishti 2.6</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <Button asChild style={{
        backgroundImage: 'linear-gradient(to right, hsl(var(--primary)), hsl(275, 100%, 25%))',
        borderColor: 'hsl(var(--accent))'
      }}
      className="border hover:scale-105 transition-transform"
      >
        <a href="https://docs.google.com/forms" target="_blank" rel="noopener noreferrer">
          Register Now
        </a>
      </Button>
    </header>
  );
}
