"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

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
      <Link
        href="/"
        className="flex items-center gap-4"
        aria-label="SrishtiFest Home"
      >
        <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
          Srishti 2.6
        </span>
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
      <div className="flex items-center gap-4">
        <Button
          asChild
          style={{
            backgroundImage:
              "linear-gradient(to right, hsl(var(--primary)), hsl(275, 100%, 25%))",
            borderColor: "hsl(var(--accent))",
          }}
          className="border hover:scale-105 transition-transform hidden md:flex"
        >
          <a
            href="https://docs.google.com/forms"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now
          </a>
        </Button>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader className="border-b pb-4 flex-row justify-between items-center">
                <SheetTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">Srishti 2.6</SheetTitle>
                 <SheetClose asChild>
                   <Button variant="ghost" size="icon">
                     <X className="h-6 w-6" />
                     <span className="sr-only">Close navigation menu</span>
                   </Button>
                </SheetClose>
                <SheetDescription className="sr-only">Main navigation menu containing links to different sections of the page.</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col h-full">
                
                <nav className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto">
                   <Button asChild size="lg" className="w-full" style={{
                      backgroundImage: 'linear-gradient(to right, hsl(var(--primary)), hsl(275, 100%, 25%))',
                      borderColor: 'hsl(var(--accent))'
                    }}>
                      <a href="https://docs.google.com/forms" target="_blank" rel="noopener noreferrer">
                        Register Now
                      </a>
                   </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
