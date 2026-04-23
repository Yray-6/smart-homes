"use client";

import { FadeIn, Heartbeat } from "./motion";

type WhyChooseUsProps = {
  isDark?: boolean;
};

export default function WhyChooseUs({ isDark = false }: WhyChooseUsProps) {
  return (
    <section className={`w-full overflow-hidden py-16 lg:py-16 ${isDark ? "bg-[#111111]" : "bg-white"}`}>
      <div className="mx-auto max-w-[1393px]">
        <div className="flex flex-col lg:flex-row">

          {/* Left — section video */}
          <FadeIn className="relative w-full shrink-0 lg:w-[58%]">
            <video
              className="h-72 w-full object-cover sm:h-96 lg:h-full lg:min-h-[472px]"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/section2.mp4" type="video/mp4" />
            </video>
          </FadeIn>

          {/* Right — text content */}
          <FadeIn className="flex w-full flex-col justify-center gap-7 px-8 py-12 lg:w-[42%] lg:py-10 lg:pl-12 lg:pr-10" delay={0.1}>
            <h2 className={`text-4xl font-semibold ${isDark ? "text-white" : "text-black"}`}>Why Choose Us</h2>

            <div className={`space-y-5 text-lg font-normal leading-relaxed ${isDark ? "text-white" : "text-[#2f2f2f]"}`}>
              <p>
                Trusted Hands Digital Homes Ltd. is a premium smart home
                solutions provider dedicated to transforming ordinary homes into
                intelligent, secure, and effortless living spaces.
              </p>
              <p>
                With years of expertise in smart automation, we design, install,
                and maintain cutting-edge systems that seamlessly integrate
                lighting, security, climate control, entertainment, and more.
                Our mission is simple: to deliver reliable, high-quality
                technology that enhances comfort, saves energy, and provides
                complete peace of mind.
              </p>
            </div>

            <Heartbeat className="w-fit">
              <button className="inline-flex w-fit items-center gap-2.5 rounded-lg bg-[#13d1c3] px-5 py-3 text-base font-bold text-white transition-colors hover:bg-[#0fb8ab] active:scale-95">
                Read More
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/icon-arrow-right.svg"
                  alt=""
                  className="h-6 w-6"
                />
              </button>
            </Heartbeat>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
