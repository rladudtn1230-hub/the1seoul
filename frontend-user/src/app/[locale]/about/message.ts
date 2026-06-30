import type { Locale } from "@/i18n/routing";

/**
 * 서브페이지(about) 다국어 메시지 — 페이지 폴더에 colocate.
 * src/i18n/messages.ts 의 pages 에 "about" 네임스페이스로 등록되어 있다.
 * 사용: useTranslations("about") / getTranslations("about")
 */
const message = {
  ko: {
    title: "소개",
    description: "여기에 소개 페이지 본문이 들어갑니다.",
  },
  en: {
    title: "About",
    description: "Your about page body copy goes here.",
  },
  ja: {
    title: "紹介",
    description: "ここに紹介ページの本文が入ります。",
  },
  zh: {
    title: "介绍",
    description: "此处填写介绍页面正文。",
  },
} satisfies Record<Locale, unknown>;

export default message;
