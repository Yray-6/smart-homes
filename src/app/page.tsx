"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";
import WhatWeOffer from "./components/WhatWeOffer";
import WhyChooseUs from "./components/WhyChooseUs";
import ServicePackages from "./components/ServicePackages";
import Footer from "./components/Footer";
import FloatingChat from "./components/FloatingChat";
import { useTheme } from "./components/ThemeProvider";
import { FadeIn, Heartbeat } from "./components/motion";

export default function Home() {
  const { isDark } = useTheme();

  return (
    <>
    <main className="relative min-h-screen overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/Hero%20section%20Mp4.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay — matches Figma rgba(0,0,0,0.2) */}
      <div className={`absolute inset-0 ${isDark ? "bg-black/20" : "bg-black/35"}`} />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1393px] flex-col px-5 py-8 text-white sm:px-8 md:px-10 lg:px-12 lg:py-10">
        {/* Navbar */}
        <Navbar />

        {/* Hero body — two columns on desktop, stacked on mobile */}
        <div className="flex flex-1 flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-between">

          {/* Left — headline + CTA */}
          <FadeIn className="flex max-w-[640px] flex-col justify-center lg:max-w-[767px]">
            <h1 className="text-[2rem] font-bold leading-tight sm:text-5xl lg:text-[64px] lg:leading-[1.1]">
              Designed For Living.
              <br />
              Powered By Intelligence
            </h1>
            <p className="mt-5 text-base font-normal leading-relaxed text-white/90 sm:mt-6 sm:text-lg lg:mt-7 lg:text-xl">
              Turn your home into a seamless, responsive space where comfort,
              security, and convenience adapt effortlessly to your lifestyle—so
              every moment feels smarter, simpler, and more refined.
            </p>
            <Heartbeat className="mt-8 w-fit">
              <Link
                href="/#service-packages"
                className="inline-flex w-fit items-center justify-center gap-3 rounded-[26px] bg-white px-8 py-3 text-base font-semibold text-[#13d1c3] shadow-[0_0_2px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#e6fefd] active:scale-95"
              >
                Get Started
              </Link>
            </Heartbeat>
          </FadeIn>

          {/* Right — stats (desktop: vertical stack flush to right edge; mobile: 3-col grid at bottom) */}
          <FadeIn
            className="mt-10 grid grid-cols-3 gap-3 sm:gap-4 lg:mt-0 lg:flex lg:w-[320px] lg:-mr-12 lg:flex-col lg:gap-0 lg:space-y-[10px]"
            delay={0.15}
          >
            {[
              { value: "10+", label: "Years of Service" },
              { value: "100%", label: "Quality" },
              { value: "500+", label: "Houses Transformed" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col justify-center rounded-l-[20px] bg-white/10 px-3 py-3 backdrop-blur-sm sm:px-5 lg:px-5 lg:py-3"
              >
                <p className="text-2xl font-normal leading-tight sm:text-3xl lg:text-4xl">
                  {value}
                </p>
                <p className="mt-0.5 text-[11px] leading-snug text-white/80 sm:text-sm lg:text-base">
                  {label}
                </p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>
    </main>

    <WhatWeOffer isDark={isDark} />
    <WhyChooseUs isDark={isDark} />
    <ServicePackages isDark={isDark} />
    <Footer isDark={isDark} />
    <FloatingChat />
    </>
  );
}
