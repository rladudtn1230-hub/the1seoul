import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// locale을 자동으로 처리해주는 라우팅 유틸. <Link>, useRouter 등은 여기서 import 해서 사용.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
