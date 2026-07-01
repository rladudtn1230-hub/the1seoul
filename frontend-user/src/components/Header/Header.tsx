"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { MENU } from "@/lib/menu";
import styles from "./Header.module.css";

const TOP_H = 70; // 메뉴줄 높이
const PAD_BOTTOM = 24; // 패널 하단 여백

/**
 * GNB 헤더 (Figma 19:4596).
 * - 기본: 70px. 메뉴/패널 hover 시 메가메뉴가 슬라이드로 펼쳐진다.
 * - 카드 높이는 서브메뉴 패널의 실제 높이(가장 긴 컬럼 = 최대값)를 측정해
 *   "헤더 + 패널" 합으로 동적으로 계산하고 transition 한다.
 * - 카드 영역을 벗어나면(onMouseLeave) 다시 닫힌다.
 */
export default function Header() {
  const t = useTranslations("nav");
  // 메뉴 데이터에서 키를 동적으로 조합하므로 리터럴 키 타입을 우회한다.
  const tx = t as (key: string) => string;
  // 메시지 내 태그(<br/> 등)를 렌더하기 위해 t.rich 사용.
  const tRich = t.rich as unknown as (
    key: string,
    values?: Record<string, () => ReactNode>,
  ) => ReactNode;
  const [open, setOpen] = useState(false);
  const [panelH, setPanelH] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);

  // 패널의 실제 높이를 측정(최대 컬럼 기준). locale 변경/리사이즈 시 재측정.
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const measure = () => setPanelH(el.scrollHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const cardHeight = open ? TOP_H + panelH + PAD_BOTTOM : TOP_H;

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <header className={styles.header}>
      <div className={styles.card} style={{ height: cardHeight }} onMouseLeave={handleClose}>
        <div className={styles.inner}>
          {/* 로고 */}
          <Link href="/" className={styles.logo} aria-label="더원서울안과">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/common/logo.svg" alt="더원서울안과" className={styles.logoImg} />
          </Link>

          {/* 우측: 메뉴줄 + 패널 */}
          <div className={styles.stack}>
            <nav className={styles.menuRow} onMouseEnter={handleOpen}>
              {MENU.map((item) => (
                <Link key={item.key} href={item.href} className={styles.menuItem}>
                  {tx(`${item.key}.label`)}
                </Link>
              ))}

              <Link href="/login" className={styles.login}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/header/login.svg" alt="" className={styles.loginIcon} />
                <span className={styles.loginLabel}>{t("login")}</span>
              </Link>

              <button type="button" className={styles.lang} aria-label="Language">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/header/globe.svg" alt="" className={styles.langIcon} />
              </button>
            </nav>

            <div
              ref={panelRef}
              className={styles.panel}
              data-open={open}
              onMouseEnter={handleOpen}
              aria-hidden={!open}
            >
              {MENU.map((item) => (
                <div key={item.key} className={styles.column}>
                  {item.children.map((sub) => (
                    <Link
                      key={sub.key}
                      href={sub.href}
                      className={styles.subItem}
                      tabIndex={open ? 0 : -1}
                    >
                      {tRich(`${item.key}.${sub.key}`, { br: () => <br /> })}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
