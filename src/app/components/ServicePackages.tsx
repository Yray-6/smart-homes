"use client";

import Image from "next/image";
import { FadeIn, Heartbeat } from "./motion";

const WA_NUMBER = "2348088535357";

function buildWhatsAppUrl(pkg: {
  name: string;
  price: string;
  tagline: string;
  items: string[];
}) {
  const itemsBlock =
    pkg.items.length > 0
      ? `\n\n📦 *Package includes:*\n${pkg.items.map((i) => `  • ${i}`).join("\n")}`
      : "";

  const message =
    `Hello Trusted Hands Digital Homes! 👋\n\n` +
    `I'm interested in scheduling a visit for the following package:\n\n` +
    `🏠 *Package:* ${pkg.name}\n` +
    `💰 *Price:* ${pkg.price}\n` +
    `📝 *Description:* ${pkg.tagline}` +
    itemsBlock +
    `\n\n` +
    `Please let me know your available dates and times for a consultation.\n\n` +
    `Thank you!`;

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

const packages = [
  {
    image: "/images/pkg-essential.png",
    name: "Smart Essential Package",
    tagline: "Perfect entry into smart home automation for smaller spaces",
    price: "₦1,410,000",
    items: [
      "2 smart cameras",
      "1 smart lock",
      "1 Google Mesh",
      "1 smart Doorbell",
      "2 Switches",
      '1 4" Smart Control panel',
    ],
  },
  {
    image: "/images/pkg-tech.png",
    name: "Smart Tech Package",
    tagline:
      "Perfect entry for essential smarthome technologies that improves security, convenience and remote control",
    price: "₦2,200,000",
    items: [
      "2 smart switches",
      "1 PIR Sensor",
      "1 Protocol gateway",
      "1 smart security system",
      "1 smoke detector",
      "1 smart single socket",
      "1 Google Nest Hub",
      "1 Google Doorbell",
      "1 Google Mesh",
      "2 Cameras",
      "2 Smart lock",
    ],
  },
  {
    image: "/images/pkg-lifestyle.png",
    name: "Smart Lifestyle Package",
    tagline:
      "Focused on daily convenience, energy efficiency and modern lifestyle upgrade",
    price: "₦2,400,000",
    items: [
      "1 Google Mesh",
      "2 cameras",
      "1 PIR sensor",
      "2 Smart Switches",
      "1 Smart door lock",
      "1 Google doorbell",
      "1 Google Nest Hub",
      "1 Smart Socket",
      "1 Contact Sensor",
      "1 Vibration Sensor",
      "1 Protocol Gateway",
      "1 Smart Curtain Rail / Motor",
    ],
  },
  {
    image: "/images/pkg-developer.png",
    name: "Developer's Package",
    tagline:
      "Specially discounted package tailored for developers building for sale. Provides comprehensive coverage for ante room, living room, dining room, kitchen, outdoor lighting, master bedroom and two additional bedrooms.",
    price: "₦4,990,000",
    items: [],
  },
  {
    image: "/images/pkg-silver.png",
    name: "Silver Package",
    tagline:
      "Smart coverage for your living area, ante-room, dining room, kitchen, compound, master bedroom, and two additional bedrooms. Includes lighting switches, AC switches, water heater switches, Google Mini speakers, Google Nest Hub, P2P cameras, smart door lock, and automated curtains.",
    price: "₦9,000,000",
    items: [],
  },
  {
    image: "/images/pkg-platinum.png",
    name: "Platinum Package",
    tagline:
      "Elevated smart living covering living area, ante-room, dining room, kitchen, compound, master bedroom, upstairs living area, and four additional bedrooms. Includes smart lighting, AC & water heater controls, Google speakers, surveillance cameras, smart locks, automated curtains, in-ceiling audio, and much more.",
    price: "₦15,000,000",
    items: [],
  },
];

const disclaimer = [
  "Installation fees are not included in the packages listed above.",
  "These packages are exclusively available in Lagos and Abuja. Certain locations within these cities may attract additional transportation charges.",
  "These packages are designed for properties that are already occupied by residents.",
];

type ServicePackagesProps = {
  isDark?: boolean;
};

export default function ServicePackages({ isDark = false }: ServicePackagesProps) {
  return (
    <section
      id="service-packages"
      className={`w-full scroll-mt-24 py-16 lg:py-20 ${isDark ? "bg-[#111111]" : "bg-white"}`}
    >
      <div className="mx-auto max-w-[1393px] px-5 sm:px-8 md:px-10 lg:px-12">

        {/* Header */}
        <FadeIn>
          <h2 className={`text-3xl font-semibold sm:text-4xl ${isDark ? "text-white" : "text-black"}`}>
            Service Packages Preview
          </h2>
          <p className={`mt-4 max-w-[641px] text-base font-normal sm:text-lg ${isDark ? "text-white" : "text-[#2f2f2f]"}`}>
            Choose the perfect starting point for your smart home journey with our
            curated packages
          </p>
        </FadeIn>

        {/* Cards grid — 3 columns on desktop, 1 on mobile */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <FadeIn
              key={pkg.name}
              delay={0.06 * index}
              className={`group flex flex-col rounded-[20px] shadow-[0_0_4px_0_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_32px_0_rgba(19,209,195,0.35)] ${
                isDark ? "bg-[#222222]" : "bg-white"
              }`}
            >
              {/* Card image */}
              <div className="relative mx-6 mt-7 h-[220px] overflow-hidden rounded-xl">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col px-5 py-5 text-center">
                <h3 className={`text-xl font-semibold sm:text-[22px] ${isDark ? "text-white" : "text-black"}`}>
                  {pkg.name}
                </h3>
                <p className={`mt-2 text-sm font-normal leading-snug sm:text-[15px] ${isDark ? "text-white" : "text-[#2f2f2f]"}`}>
                  {pkg.tagline}
                </p>

                {/* Price with divider lines */}
                <div className="mt-4 flex items-center justify-center gap-3">
                  <span className="h-px w-10 bg-[#919191] sm:w-16" />
                  <span className={`text-2xl font-semibold transition-colors duration-300 group-hover:text-[#13d1c3] sm:text-3xl ${isDark ? "text-white" : "text-black"}`}>
                    {pkg.price}
                  </span>
                  <span className="h-px w-10 bg-[#919191] sm:w-16" />
                </div>

                {/* Items list */}
                {pkg.items.length > 0 && (
                  <ul className={`mt-4 space-y-0.5 text-sm font-normal leading-relaxed sm:text-[15px] ${isDark ? "text-white" : "text-[#2f2f2f]"}`}>
                    {pkg.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                {/* Spacer pushes button to bottom */}
                <div className="flex-1" />

                {/* CTA */}
                <Heartbeat className="mx-auto mt-6 w-full max-w-[347px]">
                  <a
                    href={buildWhatsAppUrl(pkg)}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm font-bold shadow-[0_0_1px_0_rgba(0,0,0,0.25)] transition-colors hover:bg-[#13d1c3] hover:text-white active:scale-95 sm:text-base ${
                      isDark ? "bg-white text-[#13d1c3]" : "text-[#13d1c3]"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4 shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Schedule Visit
                  </a>
                </Heartbeat>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Disclaimer banner */}
        <FadeIn
          className={`mt-12 flex items-start gap-4 rounded-[20px] px-4 py-6 sm:px-6 sm:py-7 ${
            isDark ? "bg-white/10" : "bg-[rgba(19,209,195,0.1)]"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/icon-info.svg"
            alt="Note"
            className="mt-0.5 h-6 w-6 shrink-0"
          />
          <ul className={`space-y-2 text-sm font-normal sm:text-base ${isDark ? "text-white" : "text-black"}`}>
            {disclaimer.map((note) => (
              <li key={note} className="flex gap-2">
                <span className="shrink-0">–</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

      </div>
    </section>
  );
}
