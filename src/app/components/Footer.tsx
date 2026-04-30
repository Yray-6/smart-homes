import Link from "next/link";
import { FadeIn } from "./motion";

type FooterProps = {
  isDark?: boolean;
};

export default function Footer(props: FooterProps) {
  void props;
  return (
    <footer className="mt-10 w-full rounded-b-[30px] border-t border-white/5 bg-[#050d18] pt-12 pb-20 text-white">
      <div className="mx-auto grid w-full max-w-[1328px] gap-10 px-5 pb-12 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr] lg:px-0">
        <FadeIn className="md:col-span-2 lg:col-span-1">
          <Link href="/" className="inline-flex" aria-label="Go to home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt="Trusted Hands Digital Homes"
              className="h-14 w-auto"
            />
          </Link>
          <p className="mt-6 max-w-[533px] text-base leading-relaxed sm:text-lg lg:text-xl lg:leading-[22.75px]">
            We strive to create smart homes that do not just impress with
            features, but truly serve the people who live in them.
          </p>
        </FadeIn>

        <FadeIn className="space-y-4" delay={0.08}>
          <h4 className="font-bold">Quicklinks</h4>
          <ul className="space-y-2 text-base font-light sm:text-lg">
            <li>
              <Link href="/" className="transition-colors hover:text-[#13d1c3]">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="transition-colors hover:text-[#13d1c3]"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/#service-packages"
                className="transition-colors hover:text-[#13d1c3]"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="transition-colors hover:text-[#13d1c3]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </FadeIn>

        <FadeIn className="space-y-6 sm:space-y-8" delay={0.14}>
          <div className="flex items-center gap-4">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/icon-email.svg" alt="" className="h-5 w-5" />
            </span>
            <div>
              <h4 className="font-bold">Email Us</h4>
              <p className="text-[#99a1af]">
                Info@trustedhandsdigitalhomes.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/icon-phone.svg" alt="" className="h-5 w-5" />
            </span>
            <div>
              <h4 className="font-bold">Call Us</h4>
              <p className="text-[#99a1af]">08088535357</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/icon-location.svg" alt="" className="h-5 w-5" />
            </span>
            <div>
              <h4 className="font-bold">Location</h4>
              <p className="text-[#99a1af]">Abuja, Nigeria.</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
