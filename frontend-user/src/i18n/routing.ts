import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // 지원하는 언어 목록 (추가 시 모든 message.ts에 해당 locale 키도 추가)
  locales: ["ko", "en", "ja", "zh"],
  // 기본 언어
  defaultLocale: "ko",
  // 기본 언어는 prefix 없이("/"), 그 외 언어만 prefix 사용("/en", "/ja", "/zh")
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];

// 언어 선택 UI에 표시할 각 언어의 고유 명칭(항상 해당 언어로 표기)
export const localeLabels: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
  zh: "中文",
};
