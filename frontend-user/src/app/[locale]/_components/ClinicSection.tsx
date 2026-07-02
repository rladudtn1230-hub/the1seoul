"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CursorArrowIcon from "@/components/icons/svg/cursor_arrow.svg";
import styles from "./ClinicSection.module.css";

const CLINICS = [
  { key: "retina", hasPoints: true, image: "/images/home/clinic/photo_retina.png" },
  { key: "glaucoma", hasPoints: false, image: "/images/home/clinic/photo_glaucoma.png" },
  { key: "cataract", hasPoints: false, image: "/images/home/clinic/photo_cataract.png" },
  { key: "myopia", hasPoints: false, image: "/images/home/clinic/photo_myopia.png" },
  { key: "checkup", hasPoints: false, image: "/images/home/clinic/photo_checkup.png" },
] as const;

type ClinicKey = (typeof CLINICS)[number]["key"];

export default function ClinicSection() {
  const t = useTranslations("home.clinic");
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorVisible, setCursorVisible] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cursorRef.current) return;
    cursorRef.current.style.left = `${e.clientX}px`;
    cursorRef.current.style.top = `${e.clientY}px`;
  }, []);

  const handleMouseEnter = useCallback(() => setCursorVisible(true), []);
  const handleMouseLeave = useCallback(() => setCursorVisible(false), []);

  return (
    <section className={styles.section}>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        className={styles.swiper}
      >
        {CLINICS.map(({ key, hasPoints, image }) => (
          <SwiperSlide key={key} className={styles.slide}>
            <div className={styles.slideInner}>
              {/* Top center label */}
              <p className={styles.sectionLabel}>{t("sectionLabel")}</p>

              {/* Left / Center / Right — flex row */}
              <div className={styles.contentRow}>
                {/* Left: Clinic title */}
                <div className={styles.leftTitle}>
                  <span className={styles.dotsIndicator}>
                    <Image src="/images/home/clinic/dots_indicator.png" alt="" width={10} height={110} />
                  </span>
                  <div className={styles.titleBlock}>
                    <p className={styles.clinicLabel}>{t(`${key}.label`)}</p>
                    <h3 className={styles.clinicTitle}>{t(`${key}.title`)}</h3>
                  </div>
                </div>

                {/* Center: Circle photo with crosshair */}
                <div className={styles.centerArea}>
                  <div className={styles.crosshair}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/home/clinic/crosshair.svg" alt="" className={styles.chSvg} />
                    <div className={styles.chLineH} />
                    <div className={styles.chLineV} />
                  </div>
                  <div
                    className={styles.circlePhoto}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="26.09vw"
                      className={styles.circlePhotoImg}
                    />
                  </div>
                </div>

                {/* Right: Content points */}
                <div className={styles.rightContent}>
                  {hasPoints ? (
                    <div className={styles.pointsList}>
                      {([1, 2, 3] as const).map((n) => (
                        <div key={n} className={styles.pointItem}>
                          <div className={styles.pointHeader}>
                            <span className={styles.pointNumber}>
                              {String(n).padStart(2, "0")}
                            </span>
                            <span className={styles.pointTitle}>
                              {t(`${key}.point${n}title` as Parameters<typeof t>[0])}
                            </span>
                          </div>
                          <p className={styles.pointDesc}>
                            {t(`${key}.point${n}desc` as Parameters<typeof t>[0])}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className={styles.simpleContent}>
                      <p className={styles.contentTitle}>
                        {(t(`${key}.contentTitle` as Parameters<typeof t>[0]) as string).split("\n").map((line, i) => (
                          <span key={i}>{line}{i < (t(`${key}.contentTitle` as Parameters<typeof t>[0]) as string).split("\n").length - 1 && <br />}</span>
                        ))}
                      </p>
                      <p className={styles.pointDesc}>
                        {(t(`${key}.desc` as Parameters<typeof t>[0]) as string).split("\n").map((line, i) => (
                          <span key={i}>{line}{i < (t(`${key}.desc` as Parameters<typeof t>[0]) as string).split("\n").length - 1 && <br />}</span>
                        ))}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Background decorations */}
              <div className={styles.bgCircleTopRight} />
              <div className={styles.bgCircleBottomLeft} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom cursor - fixed position, outside Swiper */}
      <div
        ref={cursorRef}
        className={`${styles.customCursor} ${cursorVisible ? styles.customCursorVisible : ""}`}
      >
        <CursorArrowIcon width={90} height={90} className={styles.customCursorIcon} />
      </div>
    </section>
  );
}
