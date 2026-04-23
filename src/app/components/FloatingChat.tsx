"use client";

import { useState } from "react";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-3 right-3 z-50 sm:bottom-5 sm:right-5">
      {/* Outer group — hover also opens on desktop */}
      <div
        className="group flex flex-col items-center gap-4"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {/* WhatsApp button — flies up first (254 relative in Figma) */}
        <a
          href="https://wa.me/2348088535357"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className={`transition-all duration-300 ease-out ${
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none translate-y-10 opacity-0"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/chat-whatsapp-large.svg"
            alt="WhatsApp"
            className="h-[52px] w-[52px] drop-shadow-md transition-transform hover:scale-110 sm:h-[68px] sm:w-[68px]"
          />
        </a>

        {/* Phone button — between WA and main (135 relative in Figma) */}
        <a
          href="tel:08088535357"
          aria-label="Call us"
          className={`transition-all duration-300 ease-out delay-75 ${
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none translate-y-8 opacity-0"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/chat-phone-large.svg"
            alt="Phone"
            className="h-[52px] w-[52px] drop-shadow-md transition-transform hover:scale-110 sm:h-[68px] sm:w-[68px]"
          />
        </a>

        {/* Main teal chat button */}
        <button
          type="button"
          aria-label="Open contact options"
          onClick={() => setOpen((v) => !v)}
          className="transition-transform hover:scale-105 active:scale-95"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/chat-main.svg"
            alt="Chat"
            className="h-[68px] w-[68px] sm:h-[86px] sm:w-[86px]"
          />
        </button>
      </div>
    </div>
  );
}
