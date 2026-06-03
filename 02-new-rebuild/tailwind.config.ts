import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#0B1118",
        steel: "#172231",
        platinum: "#E8EDF3",
        copper: "#C97932",
        amberline: "#F7B267",
        mist: "#A7B3C4",
      },
      fontFamily: {
        sans: ["Inter", "Manrope", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0,0,0,.35)",
      },
      backgroundImage: {
        "radial-grid": "radial-gradient(circle at 20% 20%, rgba(201,121,50,.24), transparent 28%), radial-gradient(circle at 80% 0%, rgba(77,117,161,.22), transparent 24%)",
      },
    },
  },
  plugins: [],
};

export default config;
