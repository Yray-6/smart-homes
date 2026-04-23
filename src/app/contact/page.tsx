"use client";

import Link from "next/link";
import FloatingChat from "../components/FloatingChat";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "../components/ThemeProvider";
import { FadeIn, Heartbeat } from "../components/motion";
import { useState, type FormEvent } from "react";

type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  propertyType: string;
  requirements: string;
};

export default function ContactPage() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    propertyType: "",
    requirements: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus({
          type: "error",
          message: result.error ?? "Unable to send message. Please try again.",
        });
        return;
      }

      setStatus({
        type: "success",
        message:
          "Message sent successfully. Our team will contact you shortly.",
      });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        propertyType: "",
        requirements: "",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={`min-h-screen ${isDark ? "bg-[#111111]" : "bg-[#f3f4f6]"}`}>
      <div className="px-2 pt-3 sm:px-4">
        <div className="rounded-[18px] bg-[#13d1c3] px-6 py-8 sm:px-8 lg:px-10">
          <Navbar activeLink="Contact" ctaVariant="white" />
        </div>
      </div>

      <main className="mx-auto max-w-[1396px] px-4 pb-10 pt-8 sm:px-6 sm:pb-12 sm:pt-10 lg:px-10">
        <FadeIn>
        <h1
          className={`mb-6 text-[32px] font-bold leading-tight sm:mb-8 sm:text-[40px] ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Contact Us
        </h1>
        </FadeIn>

        <FadeIn
          className={`rounded-[24px] px-4 pb-5 pt-6 shadow-[0_10px_10px_-12px_rgba(0,0,0,0.25)] sm:px-8 sm:pb-7 sm:pt-10 lg:px-12 lg:pt-12 ${
            isDark ? "bg-[#1b1b1b]" : "bg-white"
          }`}
          delay={0.08}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Field
                label="Full Name"
                name="fullName"
                placeholder="Enter full name"
                value={formData.fullName}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, fullName: value }))
                }
              />
              <Field
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, email: value }))
                }
              />
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Field
                label="Phone Number"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, phone: value }))
                }
              />
              <Field
                label="Location (City/Area)"
                name="location"
                placeholder="Enter location"
                value={formData.location}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, location: value }))
                }
              />
            </div>

            <Field
              label="Type of Property *"
              name="propertyType"
              placeholder="Select your property type"
              value={formData.propertyType}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, propertyType: value }))
              }
            />

            <div className="space-y-2">
              <label
                className={`block text-base font-bold leading-4 sm:text-[18px] ${
                  isDark ? "text-[#a1a1aa]" : "text-[#6a7282]"
                }`}
              >
                Specific Requirements *
              </label>
              <textarea
                name="requirements"
                rows={4}
                placeholder="Tell us about your needs - e.g. focus on security, lighting automation, whole home integration, budget range, etc."
                value={formData.requirements}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    requirements: event.target.value,
                  }))
                }
                className={`h-[132px] w-full resize-none rounded-[10px] border px-4 py-3 font-[Arial] text-sm placeholder:text-[#99a1af] focus:outline-none focus:ring-2 focus:ring-[#13d1c3]/40 sm:h-[152px] sm:text-base ${
                  isDark
                    ? "border-white/10 bg-[#222222] text-white"
                    : "border-[#e5e7eb] bg-[#f9fafb] text-[#111827]"
                }`}
              />
            </div>

            {status && (
              <p
                className={`rounded-md px-4 py-2 text-sm ${
                  status.type === "success"
                    ? "bg-emerald-500/15 text-emerald-500"
                    : "bg-red-500/15 text-red-500"
                }`}
              >
                {status.message}
              </p>
            )}

            <Heartbeat>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-1.5 rounded-[14px] bg-[#13d1c3] px-6 py-3.5 font-[Arial] text-sm font-bold leading-6 text-white transition-colors hover:bg-[#0fb8ab] sm:py-4 sm:text-base"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-[18px] w-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 2 11 13" />
                  <path d="M22 2 15 22 11 13 2 9z" />
                </svg>
              </button>
            </Heartbeat>
          </form>
        </FadeIn>

        <FadeIn
          className={`mt-6 rounded-[20px] px-5 py-6 sm:mt-8 sm:px-7 sm:py-8 lg:px-9 ${
            isDark ? "bg-white/10" : "bg-[#e7faf9]"
          }`}
          delay={0.14}
        >
          <h2
            className={`text-2xl font-semibold leading-tight sm:text-[32px] ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            A Brand you Can Trust
          </h2>
          <p
            className={`mt-4 max-w-[1190px] text-base leading-relaxed sm:mt-6 sm:text-lg ${
              isDark ? "text-white/80" : "text-[#2f2f2f]"
            }`}
          >
            Trusted Hands Digital Homes Ltd. was founded with a clear vision: to
            bring world-class smart home technology to homes across Nigeria and
            beyond. Starting as a passionate team of tech enthusiasts and
            certified automation experts, we have grown into a trusted leader in
            premium smart home design, installation, and support.
          </p>
          <Heartbeat className="mt-5 w-fit sm:mt-6">
            <Link
              href="/#service-packages"
              className="rounded-lg bg-[#050d18] px-3 py-2 text-sm font-bold text-white transition-colors hover:bg-[#0b1628] sm:text-base"
            >
              Our Services
            </Link>
          </Heartbeat>
        </FadeIn>
      </main>

      <Footer isDark={isDark} />
      <FloatingChat />
    </div>
  );
}

type FieldProps = {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
};

function Field({
  label,
  name,
  placeholder,
  value,
  onChange,
  type = "text",
}: FieldProps) {
  const { isDark } = useTheme();

  return (
    <div className="space-y-2">
      <label
        className={`block text-base font-bold leading-4 sm:text-[18px] ${
          isDark ? "text-[#a1a1aa]" : "text-[#6a7282]"
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`h-[46px] w-full rounded-[10px] border px-4 font-[Arial] text-sm placeholder:text-[#99a1af] focus:outline-none focus:ring-2 focus:ring-[#13d1c3]/40 sm:h-[50px] sm:text-base ${
          isDark
            ? "border-white/10 bg-[#222222] text-white"
            : "border-[#e5e7eb] bg-[#f9fafb] text-[#111827]"
        }`}
      />
    </div>
  );
}
