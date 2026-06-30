"use client";

import { useEffect } from "react";
import { useLenis } from "@/components/SmoothScrollProvider";

/**
 * 팝업/모달이 켜질 때 Lenis 스크롤을 막는 훅.
 * @param locked true이면 스크롤을 멈추고(lenis.stop), false이면 재개한다(lenis.start).
 *
 * @example
 * const [open, setOpen] = useState(false);
 * useLockScroll(open);
 */
export function useLockScroll(locked: boolean): void {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    if (locked) {
      lenis.stop();
    } else {
      lenis.start();
    }

    // 컴포넌트 언마운트 시 잠금이 남아있지 않도록 재개
    return () => {
      lenis.start();
    };
  }, [locked, lenis]);
}
