import localFont from "next/font/local";

export const pretendard = localFont({
  src: "../../public/fonts/pretendard/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "100 900",
  fallback: ["system-ui", "arial", "sans-serif"],
});

export const notosans = localFont({
  src: "../../public/fonts/notosans/NotoSansKR-VariableFont_wght.woff2",
  variable: "--font-noto-sans",
  display: "swap",
  weight: "100 900",
  fallback: ["system-ui", "arial", "sans-serif"],
});

export const montserrat = localFont({
  src: "../../public/fonts/montserrat/Montserrat-VariableFont_wght.woff2",
  variable: "--font-montserrat",
  display: "swap",
  weight: "100 900",
  fallback: ["system-ui", "arial", "sans-serif"],
});

export const inter = localFont({
  src: "../../public/fonts/inter/Inter-VariableFont_opsz,wght.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
  fallback: ["system-ui", "arial", "sans-serif"],
});

export const kakaobigsans = localFont({
  src: [
    {
      path: "../../public/fonts/kakaobigsans/KakaoBigSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/kakaobigsans/KakaoBigSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/kakaobigsans/KakaoBigSans-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-kakao-big-sans",
  display: "swap",
  fallback: ["system-ui", "arial", "sans-serif"],
});

export const birthstone = localFont({
  src: "../../public/fonts/birthstone/Birthstone-Regular.woff2",
  variable: "--font-birthstone",
  display: "swap",
  weight: "400",
  fallback: ["system-ui", "arial", "sans-serif"],
});
