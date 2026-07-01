"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./YoutubeSlider.module.css";
import YoutubeIcon from "@/components/icons/svg/icon-youtube-wh.svg";
import ChevronIcon from "@/components/icons/svg/icon-chevron.svg";

const SLIDE_COUNT = 6;

/**
 * 유튜브 영상 슬라이더 (Figma node 110:9414, 페이지네이션 110:9690).
 * - 실제 영상 데이터는 아직 없어 각 슬라이드는 링크/타이틀/채널명 영역만 표시한다.
 * - 페이지네이션은 swiper의 progressbar 타입을 커스텀 트랙에 연결해 구현한다.
 */
export default function YoutubeSlider({
  videoPlaceholder,
  titlePlaceholder,
  channelPlaceholder,
  prevLabel,
  nextLabel,
}: {
  videoPlaceholder: string;
  titlePlaceholder: string;
  channelPlaceholder: string;
  prevLabel: string;
  nextLabel: string;
}) {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
  const [paginationEl, setPaginationEl] = useState<HTMLDivElement | null>(null);

  return (
    <div className={styles.sliderWrap}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{ prevEl, nextEl }}
        pagination={paginationEl ? { el: paginationEl, type: "progressbar" } : false}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1.1, spaceBetween: 12 },
          640: { slidesPerView: 1.6, spaceBetween: 16 },
          1024: { slidesPerView: 2.3, spaceBetween: 20 },
          1920: { slidesPerView: 2.5, spaceBetween: 20 },
        }}
        className={styles.swiper}
      >
        {Array.from({ length: SLIDE_COUNT }, (_, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.thumbnail} aria-hidden="true">
              <span className={styles.thumbnailLabel}>{videoPlaceholder}</span>
            </div>
            <div className={styles.meta}>
              <p className={styles.title}>{titlePlaceholder}</p>
              <div className={styles.channelRow}>
                <span className={styles.channelIcon} aria-hidden="true">
                  <YoutubeIcon width={17} height={12} />
                </span>
                <span className={styles.channelName}>{channelPlaceholder}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.paginationRow}>
        <div className={styles.progressTrack} ref={setPaginationEl} />
        <div className={styles.navButtons}>
          <button type="button" ref={setPrevEl} className={styles.navBtn} aria-label={prevLabel}>
            <ChevronIcon width={24} height={24} />
          </button>
          <button type="button" ref={setNextEl} className={styles.navBtn} aria-label={nextLabel}>
            <ChevronIcon width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
