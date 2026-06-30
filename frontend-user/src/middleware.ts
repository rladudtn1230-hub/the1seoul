import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // api, next 내부 경로, 파일(.확장자) 요청은 제외하고 모든 경로에 locale 처리 적용
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
