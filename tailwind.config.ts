import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./app.tsx"
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(249, 248, 246)",
        surface: "#FFFFFF",
        border: "#E7E2DA",
        primary: "#1F6FEB",
        secondary: "#14B8A6",
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
        ink: "#000000",
        navy: "#000000",
        mist: "#F1EFEB",
        muted: "#5F5D59",
        soft: "#9CA3AF"
      },
      borderRadius: {
        card: "24px",
        button: "18px",
        input: "16px"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(0, 0, 0, 0.07)",
        lift: "0 28px 90px rgba(0, 0, 0, 0.13)",
        premium: "0 32px 110px rgba(0, 0, 0, 0.16)",
        inset: "inset 0 1px 0 rgba(255, 255, 255, 0.72)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out"
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "sans-serif"],
        display: ["var(--font-fraunces)", "serif"]
      },
      fontWeight: {
        "500": "500",
        "600": "600",
        "700": "700",
        "800": "800"
      }
    }
  },
  plugins: []
};

export default config;
