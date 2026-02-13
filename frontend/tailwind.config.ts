import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        input: "hsl(var(--input))",
        skybrand: {
          50: "#F0F9FF",
          100: "#DFF2FE",
          200: "#B8E6FE",
          300: "#74D4FF",
          400: "#00BCFF",
          500: "#00A6F4",
          600: "#0084D1",
          700: "#0069A8",
          800: "#0069A8",
          900: "#024A70",
          950: "#052F4A"
        }
      },
      boxShadow: {
        card: "0 10px 30px rgba(2, 74, 112, 0.08)"
      },
      fontFamily: {
        sans: ["Segoe UI", "Tahoma", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
