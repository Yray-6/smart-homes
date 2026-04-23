"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/#service-packages" },
  { label: "Contact", href: "/contact" },
];

type NavbarProps = {
  activeLink?: string;
  linkColor?: string;
  ctaVariant?: "teal" | "white";
};

export default function Navbar({
  activeLink = "Home",
  linkColor = "text-white",
  ctaVariant = "teal",
}: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center" aria-label="Go to home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.svg"
          alt="Trusted Hands Digital Homes"
          className="h-14 w-auto object-contain"
        />
      </Link>

      {/* Desktop nav links */}
      <div className="hidden rounded-xl border border-white/20 bg-white/2 px-[23px] py-[10px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] md:block">
        <ul className={`flex items-center gap-[60px] text-base ${linkColor}`}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={
                link.label === activeLink
                  ? "cursor-pointer font-bold text-white"
                  : "cursor-pointer font-normal text-white/90 transition-colors hover:text-white"
              }
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>

      {/* Desktop CTA */}
      <Link
        href="/contact"
        className={`hidden md:block rounded-lg px-4 py-2 text-base font-bold transition-colors ${
          ctaVariant === "white"
            ? "bg-white text-[#13d1c3] hover:bg-gray-100"
            : "bg-[#13d1c3] text-white hover:bg-[#0fb8ab]"
        }`}
      >
        Book A Call
      </Link>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex md:hidden flex-col justify-center items-center gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 w-6 bg-current transition-all duration-300 ${linkColor} ${open ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-current transition-all duration-300 ${linkColor} ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-current transition-all duration-300 ${linkColor} ${open ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute top-14 left-0 right-0 z-50 flex flex-col gap-4 rounded-2xl bg-black/70 px-6 py-6 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-4 text-base">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={
                  link.label === activeLink
                    ? "cursor-pointer font-bold text-white text-lg"
                    : "cursor-pointer text-lg font-normal text-white/90 transition-colors hover:text-white"
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={`w-full rounded-lg py-3 px-2 text-base font-bold transition-colors ${
              ctaVariant === "white"
                ? "bg-white text-[#13d1c3] hover:bg-gray-100"
                : "bg-[#13d1c3] text-white hover:bg-[#0fb8ab]"
            }`}
          >
            Book A Call
          </Link>
        </div>
      )}
    </nav>
  );
}
