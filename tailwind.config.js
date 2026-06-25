/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        surface: "#111111",
        card: "#161616",
        border: "#1f1f1f",
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
        },
        purple: {
          400: "#a78bfa",
          500: "#8b5cf6",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "glow-cyan": "radial-gradient(circle at 50% 50%, rgba(34,211,238,0.15) 0%, transparent 70%)",
        "glow-purple": "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
