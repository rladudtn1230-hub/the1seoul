import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { pretendard } from "@/app/font";
import "@/app/globals.css";


export const metadata: Metadata = {
  title: "The One Seoul",
  description: "",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // 정적 렌더링 활성화를 위해 요청 locale 지정
  setRequestLocale(locale);

  return (
    <html lang={locale} className={pretendard.variable}>
      <body>
        <NextIntlClientProvider>
          <Header />
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
