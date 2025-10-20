"use client";

import Link from "next/link";
import { Code, FileUser, HomeIcon, Mail, Menu, MenuIcon, X } from "lucide-react";

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { ThemeToggleSwitch } from "@/components/theme-toggle"
import { GrowOnHover } from "./Animations";

// Navigation Links Data
const navLinks = [
  { href: "/", title: "Home", icon: HomeIcon },
  { href: "/about", title: "About", icon: MenuIcon},
  { href: "/projects", title: "Projects", icon: Code },
  { href: "/resume", title: "Resume", icon: FileUser },
  { href: "/contact", title: "Contact", icon: Mail },
];

export default function MainNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // --- Scroll Detection Effect ---
  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if vertical scroll position is > 100px
      setIsScrolled(window.scrollY > 100);
    };

    // Attach listener to window scroll event
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures it runs once on mount

  // --- Dynamic Styling ---
  const headerClasses = `
    fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
    h-20 flex items-center justify-center
    ${isScrolled 
      ? "bg-background/90 shadow-lg backdrop-blur-sm" // When scrolled, add background/shadow
      : "bg-transparent shadow-none"                  // At top, transparent
    }
  `;

  return (
    <header className={headerClasses}>
      <nav className="flex items-center justify-between w-full max-w-7xl px-4 md:px-8">
        
        {/* Logo/Name */}
        <GrowOnHover>
            <Link href="/" className="text-2xl font-bold tracking-tight">
              <span className="text-foreground hover:text-primary transition-colors">Tai Williams</span>
            </Link>
        </GrowOnHover>

        {/* --- Desktop Navigation --- */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => {

            const IconComponent = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative group"
              >
                <div className="inline-flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  <IconComponent className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  {link.title}
                  {/* Underline hover effect */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </div>
              </Link>
            )})}
          <ThemeToggleSwitch />
        </div>

        {/* --- Mobile Navigation (Sheet) --- */}
        <div className="md:hidden flex items-center space-x-2">
            <ThemeToggleSwitch />
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <SheetHeader className="mt-4">
                        <SheetTitle className="text-left text-xl text-foreground">Portfolio Guide</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col space-y-4 pt-6">
                        {navLinks.map((link) => {
                          const Icon = link.icon
                          return (
                              <Link
                                  key={link.href}
                                  href={link.href}
                                  className="text-lg text-center font-semibold text-foreground hover:text-primary hover:bg-accent transition-colors py-2 border border-border"
                              >
                                <div className="inline-flex items-center justify-center gap-2">
                                  <Icon className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                                  {link.title}
                                </div>
                              </Link>
                          )})}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </nav>
    </header>
  );
}