import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui"],
        work: ["Work Sans", "sans-serif"],
      },
      colors: {
        blue: {
          600: "#104EE9",
          100: "#D8E6FF",
          50: "#D8E6FF",
        },
        cyan: {
          600: "#13CFE5",
        },
        grey: {
          900: "#0E1823",
          600: "#627D98",
          400: "#9FB2C8",
          300: "#BCCADC",
          200: "#DEE4ED",
          100: "#EFF2F7",
          50: "#F7F8FA",
        },
        white: "#FFFFFF",
        surface: {
          app: "#F7F8FA",
          card: "#FFFFFF",
          muted: "#F7F8FA",
        },
        border: {
          subtle: "#DEE4ED",
          strong: "#BCCADC",
        },
        text: {
          primary: "#0E1823",
          secondary: "#627D98",
        },
        brand: {
          border: "#BCCADC",
          danger: "#FF4D4F",
          success: "#28AD2E",
        },
      },
      fontSize: {
        h2: ["18px", { lineHeight: "22px", fontWeight: "500" }],
        h3: ["16px", { lineHeight: "18px", fontWeight: "500" }],
        b1: ["16px", { lineHeight: "18px", fontWeight: "500" }],
        "b2-m": ["14px", { lineHeight: "16px", fontWeight: "500" }],
        "b2-r": ["14px", { lineHeight: "16px", fontWeight: "400" }],
        b3: ["12px", { lineHeight: "14px", fontWeight: "400" }],
        l1: [
          "12px",
          {
            lineHeight: "14px",
            fontWeight: "500",
            letterSpacing: "0.05em",
          },
        ],
      },
      dropShadow: {
        lg: ["0 4px 20px rgb(0 0 0 / 0.08)"],
      },
      screens: {
        mobile: "375px",
        desktop: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
