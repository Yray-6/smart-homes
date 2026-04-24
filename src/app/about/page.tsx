"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingChat from "../components/FloatingChat";
import { useTheme } from "../components/ThemeProvider";
import { FadeIn, Heartbeat } from "../components/motion";

export default function AboutPage() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen overflow-hidden rounded-[30px] ${
        isDark ? "bg-[#111111]" : "bg-white"
      }`}
    >
      {/* ── Teal nav card — same structure as Contact page ── */}
      <div className="px-2 pt-3 sm:px-4">
        <div className="rounded-[18px] bg-[#13d1c3] px-6 py-8 sm:px-8 lg:px-10">
          <Navbar activeLink="About Us" ctaVariant="white" />
        </div>
      </div>

      {/* ── Main content ── */}
      <main className="mx-auto max-w-[1393px] px-4 sm:px-8 lg:px-[63px]">
        {/* Hero: left text / right images */}
        <section className="flex flex-col gap-10 pt-10 sm:pt-14 lg:flex-row lg:gap-0 lg:pt-20">
          {/* Left column — text */}
          <FadeIn className="flex flex-col gap-6 sm:gap-8 lg:w-[47%]">
            <h1
              className={`text-[32px] font-bold leading-tight sm:text-[40px] ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              About Us
            </h1>

            <div
              className={`space-y-4 text-base leading-relaxed sm:space-y-6 sm:text-lg lg:text-xl ${
                isDark ? "text-white/80" : "text-[#2f2f2f]"
              }`}
            >
              <p>
                Trusted Hands Digital Homes Ltd. was founded with a clear
                vision: to bring world-class smart home technology to homes
                across Nigeria and beyond. Starting as a passionate team of tech
                enthusiasts and certified automation experts, we have grown into
                a trusted leader in premium smart home design, installation, and
                support.
              </p>
              <p>
                With headquarters in Abuja, we combine deep technical knowledge
                with a genuine understanding of modern Nigerian lifestyles, from
                bustling city apartments to spacious family residences. Over the
                years, we have successfully transformed hundreds of homes,
                delivering seamless integration of lighting, security,
                entertainment, climate control, and connectivity solutions that
                work reliably every day.
              </p>
            </div>

            <Heartbeat className="w-fit">
              <Link
                href="/contact"
                className="self-start rounded-lg bg-[#13d1c3] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0fb8ab] sm:text-base"
              >
                Book A Call
              </Link>
            </Heartbeat>
          </FadeIn>

          {/* Right column — overlapping photo collage (desktop) */}
          <FadeIn className="relative hidden h-[572px] lg:block lg:w-[53%]" delay={0.12}>
            {/* Image 1: 429×503, anchored top-left of column */}
            <div className="absolute left-0 top-0 h-[503px] w-[429px] overflow-hidden rounded-[20px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about-img1.jpg"
                alt="Smart home installation"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Image 2: 364×404, offset 250px right and 168px down — overlaps img1 */}
            <div className="absolute left-[250px] top-[168px] h-[404px] w-[364px] overflow-hidden rounded-[20px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about-img2.jpg"
                alt="Smart home interior"
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>

          {/* Right column — stacked photos (mobile) */}
          <FadeIn className="flex flex-col gap-4 lg:hidden" delay={0.12}>
            <div className="aspect-429/503 w-full overflow-hidden rounded-[20px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about-img1.jpg"
                alt="Smart home installation"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-364/404 w-full overflow-hidden rounded-[20px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about-img2.jpg"
                alt="Smart home interior"
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>
        </section>

        {/* ── Info cards ── */}
        <section className="mt-12 grid grid-cols-1 gap-4 pb-14 sm:mt-16 sm:gap-6 sm:pb-20 lg:grid-cols-2">
          {/* Left column: Mission + Commitment stacked */}
          <div className="flex flex-col gap-6">
            {/* Our Mission */}
            <FadeIn
              className={`rounded-[20px] p-5 sm:p-[30px_36px] ${
                isDark ? "bg-white/10" : "bg-[rgba(19,209,195,0.1)]"
              }`}
            >
              <h2
                className={`mb-4 text-2xl font-semibold leading-tight sm:mb-5 sm:text-[32px] ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                Our Mission
              </h2>
              <p
                className={`text-base leading-relaxed sm:text-lg ${
                  isDark ? "text-white/80" : "text-[#2f2f2f]"
                }`}
              >
                To empower homeowners with intelligent, easy-to-use technology
                that enhances comfort, improves security, saves energy, and
                simplifies daily life, all while making advanced automation
                accessible, affordable, and built on unwavering trust.
              </p>
              <p
                className={`mt-3 text-base leading-relaxed sm:mt-4 sm:text-lg ${
                  isDark ? "text-white/80" : "text-[#2f2f2f]"
                }`}
              >
                We strive to create smart homes that don&apos;t just impress
                with features, but truly serve the people who live in them.
              </p>
            </FadeIn>

            {/* Commitment to Quality and Trust */}
            <FadeIn className="rounded-[20px] bg-black p-5 sm:p-[30px_36px]" delay={0.08}>
              <h2 className="mb-4 text-2xl font-semibold leading-tight text-white sm:mb-5 sm:text-[32px]">
                Commitment to Quality and Trust
              </h2>
              <p className="text-base leading-relaxed text-white sm:text-lg">
                Trust is at the heart of everything we do, it&apos;s even in
                our name.
              </p>
            </FadeIn>
          </div>

          {/* Right column: Our Values (full height) */}
          <FadeIn
            className={`rounded-[20px] p-5 sm:p-[30px_36px] ${
              isDark ? "bg-white/10" : "bg-[rgba(19,209,195,0.1)]"
            }`}
            delay={0.12}
          >
            <h2
              className={`mb-4 text-2xl font-semibold leading-tight sm:mb-5 sm:text-[32px] ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              Our Values
            </h2>
            <ul
              className={`space-y-4 text-base leading-relaxed sm:space-y-5 sm:text-lg ${
                isDark ? "text-white/80" : "text-[#2f2f2f]"
              }`}
            >
              <li>
                <span
                  className={`font-semibold ${isDark ? "text-white" : "text-black"}`}
                >
                  Premium Quality:
                </span>{" "}
                We partner only with globally respected brands and use devices
                known for durability, compatibility, and performance. No
                shortcuts, no compromises.
              </li>
              <li>
                <span
                  className={`font-semibold ${isDark ? "text-white" : "text-black"}`}
                >
                  Professional Excellence:
                </span>{" "}
                Every project is handled by fully certified technicians who
                prioritize clean installations, minimal disruption, and flawless
                functionality.
              </li>
              <li>
                <span
                  className={`font-semibold ${isDark ? "text-white" : "text-black"}`}
                >
                  Transparency &amp; Integrity:
                </span>{" "}
                From the initial consultation to post-installation support, we
                communicate clearly, honor our quotes, and stand behind our
                work.
              </li>
              <li>
                <span
                  className={`font-semibold ${isDark ? "text-white" : "text-black"}`}
                >
                  Customer-First Approach:
                </span>{" "}
                Your satisfaction and peace of mind come first. We listen to
                your needs, tailor solutions to your budget and lifestyle, and
                provide ongoing support long after installation.
              </li>
            </ul>
            <p
              className={`mt-5 text-base leading-relaxed sm:mt-6 sm:text-lg ${
                isDark ? "text-white/80" : "text-[#2f2f2f]"
              }`}
            >
              At Trusted Hands Digital Homes, we&apos;re not just installing
              technology — we&apos;re building smarter, safer homes and earning
              your trust, one project at a time.
            </p>
          </FadeIn>
        </section>
      </main>

      <Footer isDark={isDark} />
      <FloatingChat />
    </div>
  );
}
