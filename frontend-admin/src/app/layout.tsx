import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The One Seoul Admin",
  description: "The One Seoul 관리자 페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
