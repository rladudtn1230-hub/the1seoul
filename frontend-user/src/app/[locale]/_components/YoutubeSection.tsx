import { getTranslations } from "next-intl/server";
import styles from "./YoutubeSection.module.css";
import YoutubeSlider from "./YoutubeSlider";
import CrossIcon from "@/components/icons/svg/icon-cross.svg";
import ArrowIcon from "@/components/icons/svg/icon-arrow-right-wh.svg";
import Image from "next/image";

/**
 * 메인 "더원서울안과 유튜브" 섹션 (Figma node 110:9388).
 * - 브랜드/타이틀 블록(110:9389)은 LocationSection의 headingCol과 동일한 스타일을 재사용한다.
 * - 영상 슬라이더(110:9414, 110:9690)는 YoutubeSlider(클라이언트 컴포넌트)에서 swiper로 구현한다.
 */
export default async function YoutubeSection() {
  const t = await getTranslations("home.youtube");

  return (
    <section className={styles.youtube}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.textCol}>
            <div className={styles.headingGroup}>
              <p className={styles.brand}>
                <span className={styles.brandText}>{t("brand.line1")}</span>
                <CrossIcon width={6} height={6} className={styles.brandIcon} aria-hidden="true" />
                <span className={styles.brandText}>{t("brand.line2")}</span>
              </p>
              <h2 className={styles.heading}>
                <span className={styles.headingLine}>{t("heading.line1")}</span>
                <span className={styles.headingAccent}>{t("heading.line2")}</span>
              </h2>
            </div>

            <p className={styles.description}>{t.rich("description", { br: () => <br /> })}</p>

            <ul className={styles.channelList}>
              <li>
                <a
                  href="https://www.youtube.com/@TV-ln5oz"
                  target="_blank"
                  className={styles.channelCard}
                >
                  <Image
                    src={"/images/img-youtube1.png"}
                    width={60}
                    height={60}
                    alt={"더원서울안과TV 유튜브 프로필 이미지"}
                    className={styles.channelProfile}
                    aria-hidden="true"
                  />
                  <span className={styles.channelName}>{t("channels.channel1")}</span>
                  <span className={styles.channelCta} aria-hidden="true">
                    <ArrowIcon width={24} height={24} />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@the1seoul"
                  target="_blank"
                  className={styles.channelCard}
                >
                  <Image
                    src={"/images/img-youtube2.png"}
                    width={60}
                    height={60}
                    alt={"더원의 허심탄회 유튜브 프로필 이미지"}
                    className={styles.channelProfile}
                    aria-hidden="true"
                  />
                  <span className={styles.channelName}>{t("channels.channel2")}</span>
                  <span className={styles.channelCta} aria-hidden="true">
                    <ArrowIcon width={24} height={24} />
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <YoutubeSlider
            videoPlaceholder={t("slider.videoPlaceholder")}
            titlePlaceholder={t("slider.titlePlaceholder")}
            channelPlaceholder={t("slider.channelPlaceholder")}
            prevLabel={t("slider.prevLabel")}
            nextLabel={t("slider.nextLabel")}
          />
        </div>
      </div>
    </section>
  );
}
