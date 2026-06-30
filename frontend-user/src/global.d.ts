import type { routing } from "@/i18n/routing";
import type { Messages } from "@/i18n/messages";

// next-intl 타입 보강: 메시지 키 자동완성 / 오타 검출 / Locale 타입 안전
declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: Messages;
  }
}
