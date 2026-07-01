import type { routing } from "@/i18n/routing";
import type { Messages } from "@/i18n/messages";

declare module "*.css";

// SVGR: `import Icon from "./icon.svg"` → React 컴포넌트로 변환 (next.config.ts의 turbopack.rules 참고)
declare module "*.svg" {
  import type { FC, SVGProps } from "react";
  const Icon: FC<SVGProps<SVGSVGElement>>;
  export default Icon;
}

// next-intl 타입 보강: 메시지 키 자동완성 / 오타 검출 / Locale 타입 안전
declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: Messages;
  }
}
