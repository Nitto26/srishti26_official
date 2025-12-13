"use client";

import Link from "next/link";
import { SrishtiFestLogo } from "./SrishtiFestLogo";
import { Button } from "./ui/button";

type HeaderProps = {
  show: boolean;
};

export function Header({ show }: HeaderProps) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm transition-opacity duration-500 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!show}
    >
      <Link href="/" className="w-32" aria-label="SrishtiFest Home">
        <SrishtiFestLogo />
      </Link>
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
