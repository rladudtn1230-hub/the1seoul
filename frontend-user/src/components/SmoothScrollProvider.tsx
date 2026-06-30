"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "@/i18n/navigation";
import Lenis from "lenis";

const LenisContext = createContext<Lenis | null>(null);

/** 현재 활성화된 Lenis 인스턴스를 반환한다. (Provider 외부/마운트 전이면 null) */
export function useLenis(): Lenis | null {
  return useContext(LenisContext);
}

/**
 * Lenis 부드러운 스크롤 Provider.
 * - 앱 전역에 Lenis를 적용한다.
 * - 라우팅(pathname 변경)될 때마다 Lenis 인스턴스를 파기 후 재생성하여 초기화한다.
 * - 생성된 인스턴스를 Context로 노출하여 다른 훅/컴포넌트에서 제어할 수 있게 한다.
 */
export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const instance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    setLenis(instance);

    // 라우팅 직후 스크롤 위치를 최상단으로 초기화
    instance.scrollTo(0, { immediate: true });

    let rafId = 0;
    const raf = (time: number) => {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      instance.destroy();
      setLenis(null);
    };
  }, [pathname]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
