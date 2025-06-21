import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter_new: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}