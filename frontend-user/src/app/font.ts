import localFont from "next/font/local";

export const pretendard = localFont({
  src: "../../public/fonts/pretendard/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "100 900",
  fallback: ["system-ui", "arial", "sans-serif"],
});
