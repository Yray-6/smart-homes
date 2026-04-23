"use client";

type ThemeToggleProps = {
  isDark: boolean;
  onToggle: () => void;
};

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle dark mode"
      className={`fixed bottom-4 left-4 z-50 inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium backdrop-blur-sm transition sm:bottom-6 sm:left-6 ${
        isDark
          ? "border-white/30 bg-black/35 text-white hover:bg-black/55"
          : "border-black/20 bg-white/80 text-black hover:bg-white"
      }`}
    >
      <span className="text-base leading-none">{isDark ? "🌙" : "☀️"}</span>
      <span>{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
