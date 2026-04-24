"use client";

import Image from "next/image";
import { FadeIn } from "./motion";

const services = [
  {
    icon: "/images/icon-security.svg",
    title: "Security & Access Control",
    description:
      "Essential solutions focused on protecting your home with intelligent monitoring, secure entry, and motion detection. Ideal for homeowners prioritizing safety and peace of mind through cameras, smart locks, video doorbells, and sensors.",
  },
  {
    icon: "/images/icon-connectivity.svg",
    title: "Connectivity & Smart Control",
    description:
      "Build a reliable foundation for your smart home with seamless Wi-Fi coverage, central control hubs, and intuitive switches. Perfect for ensuring smooth device integration and effortless management from anywhere.",
  },
  {
    icon: "/images/icon-comfort.svg",
    title: "Comfort & Lifestyle Enhancements",
    description:
      "Elevate daily living with thoughtful automation for convenience and luxury, including smart sockets, wireless chargers, diffusers, and specialized appliances like towel dryers. Great for those seeking added comfort and modern touches.",
  },
];

type WhatWeOfferProps = {
  isDark?: boolean;
};

export default function WhatWeOffer({ isDark = false }: WhatWeOfferProps) {
  return (
    <section className={`w-full py-16 lg:py-40 ${isDark ? "bg-[#111111]" : "bg-white"}`}>
      <div className="mx-auto max-w-[1393px] px-4 sm:px-8 md:px-10 lg:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-8">

          {/* Left — text + cards */}
          <FadeIn className="flex w-full flex-col lg:w-[51%]">
            <h2 className={`text-3xl font-semibold sm:text-4xl ${isDark ? "text-white" : "text-black"}`}>What We Offer</h2>
            <p className={`mt-5 max-w-[633px] text-base font-normal leading-relaxed sm:text-lg ${isDark ? "text-white" : "text-[#2f2f2f]"}`}>
              We specialize in designing, installing, and maintaining advanced smart
              home systems that integrate lighting, security, climate control,
              entertainment, and more. Our solutions prioritize reliability, ease of
              use, and energy efficiency, ensuring your home works intelligently for
              you.
            </p>

            {/* Service cards */}
            <div className="mt-8 flex flex-col gap-7">
              {services.map((service, index) => (
                <FadeIn
                  key={service.title}
                  delay={0.08 * index}
                  className={`rounded-[18px] border px-5 py-5 shadow-[0_4px_4px_0_rgba(19,209,195,0.6)] sm:px-8 sm:py-6 ${
                    isDark ? "bg-white/10 border-white/10" : "bg-white/80 border-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="h-10 w-10 shrink-0"
                    />
                    <h3 className={`text-xl font-medium sm:text-[22px] ${isDark ? "text-white" : "text-black"}`}>
                      {service.title}
                    </h3>
                  </div>
                  <p className={`mt-4 text-sm font-normal leading-relaxed sm:text-[15px] ${isDark ? "text-white" : "text-[#2f2f2f]"}`}>
                    {service.description}
                  </p>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          {/* Right — image mosaic */}
          <FadeIn className="w-full lg:w-[49%]" delay={0.15}>
            {/* Top two-col + tall image */}
            <div className="grid h-full grid-cols-[1fr_1fr] grid-rows-[170px_170px_170px] gap-3 sm:grid-rows-[220px_220px_220px] lg:grid-rows-[249px_249px_245px] lg:gap-4">
              {/* Top-left */}
              <div className="relative overflow-hidden rounded-[20px]">
                <Image
                  src="/images/offer-top-right.jpg"
                  alt="Smart home top view"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Tall right — spans 2 rows */}
              <div className="relative row-span-2 overflow-hidden rounded-[20px]">
                <Image
                  src="/images/offer-tall.jpg"
                  alt="Smart home tall view"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Middle-left */}
              <div className="relative overflow-hidden rounded-[20px]">
                <Image
                  src="/images/offer-mid-right.jpg"
                  alt="Smart home mid view"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom full-width — spans 2 cols */}
              <div className="relative col-span-2 overflow-hidden rounded-[20px]">
                <Image
                  src="/images/offer-bottom.jpg"
                  alt="Smart home bottom view"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
