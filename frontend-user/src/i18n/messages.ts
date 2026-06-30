import type { Locale } from "./routing";
import main from "@/app/[locale]/message";

// ──────────────────────────────────────────────────────────────
// 서브페이지 메시지 레지스트리
//  - 서브페이지 다국어는 각 페이지 1depth 폴더의 message.ts에 colocate 한다.
//    예) src/app/[locale]/about/message.ts
//  - 새 서브페이지를 추가하면 아래 객체에 "네임스페이스: import" 한 줄만 등록한다.
//    key 가 곧 useTranslations("<key>") 네임스페이스가 된다.
//
//  import about from "@/app/[locale]/about/message";
// ──────────────────────────────────────────────────────────────
import about from "@/app/[locale]/about/message";

const pages = {
  about, // -> useTranslations("about")
} satisfies Record<string, Record<Locale, unknown>>;

/** 요청 locale에 해당하는 전체 메시지(메인 + 모든 서브페이지)를 합쳐 반환한다. */
export function getMessages(locale: Locale) {
  const entries = Object.entries(pages) as [string, Record<Locale, unknown>][];
  const pageMessages = Object.fromEntries(
    entries.map(([namespace, m]) => [namespace, m[locale]]),
  );
  return {
    ...main[locale],
    ...pageMessages,
  };
}

// 타입 안전(키 자동완성 + 오타 검출)의 기준. 기본 언어(ko) 형태를 사용한다.
type MainMessages = (typeof main)["ko"];
type PageMessages = { [K in keyof typeof pages]: (typeof pages)[K]["ko"] };
export type Messages = MainMessages & PageMessages;
