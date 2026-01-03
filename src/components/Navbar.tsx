"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X, ShieldCheck } from "lucide-react";
import { useState } from "react";
import type { Locale } from "@/i18n-config";

interface NavbarProps {
    dict: {
        about: string;
        products: string;
        join: string;
        contact: string;
    };
    lang: Locale;
}

export function Navbar({ dict, lang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: dict.about },
    { href: "#products", label: dict.products },
    { href: "#join", label: dict.join },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
           <div className="bg-primary/10 p-2 rounded-full">
             <ShieldCheck className="h-6 w-6 text-primary" />
           </div>
           <span className="text-xl font-bold text-primary tracking-tight">SecureLife Agent</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-6 shadow-md hover:shadow-lg transition-all">
             <Phone className="mr-2 h-4 w-4" /> {dict.contact}
          </Button>
          <div className="border-l pl-4 border-gray-200">
             <Link href={lang === "th" ? "/en" : "/th"} className="font-medium text-gray-500 hover:text-primary transition-colors">
                {lang === "th" ? "EN" : "TH"}
             </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t p-4 bg-white shadow-lg animate-in slide-in-from-top-5 absolute w-full">
          <div className="flex flex-col gap-4">
             {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-700 hover:text-primary px-2"
              >
                {link.label}
              </Link>
            ))}
            <Button className="w-full bg-primary hover:bg-primary/90 rounded-full mt-2">
              <Phone className="mr-2 h-4 w-4" /> {dict.contact}
            </Button>
            <div className="flex justify-center pt-2 border-t border-gray-100 mt-2">
                 <Link href={lang === "th" ? "/en" : "/th"} className="font-medium text-gray-500 hover:text-primary transition-colors py-2">
                    Switch to {lang === "th" ? "English" : "Thai"}
                 </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
