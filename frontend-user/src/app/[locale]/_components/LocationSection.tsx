import { getTranslations } from "next-intl/server";
import styles from "./LocationSection.module.css";
import LocationMapPanel from "./LocationMapPanel";
import NavermapIcon from "@/components/icons/svg/icon-navermap.svg";
import KakaomapIcon from "@/components/icons/svg/icon-kakaomap.svg";
import GooglemapIcon from "@/components/icons/svg/icon-googlemap.svg";
import TmapIcon from "@/components/icons/svg/icon-tmap.svg";
import TimeIcon from "@/components/icons/svg/icon-time.svg";
import LocationIcon from "@/components/icons/svg/icon-location.svg";

/**
 * 메인 "오시는 길" 섹션 (Figma node 110:7341).
 * - 지도 영역(피그마 "출발" 프레임)은 추후 출구별 움직이는 이미지로 교체될 예정이라 지금은 비워둔다.
 * - 6번/8번 출구 탭 전환 상호작용만 LocationMapPanel(클라이언트 컴포넌트)에서 처리한다.
 */
export default async function LocationSection() {
  const t = await getTranslations("home.location");

  return (
    <section className={styles.location}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <LocationMapPanel
            brand={t("brand")}
            headingLine1={t("heading.line1")}
            headingLine2={t("heading.line2")}
            exit6Label={t("exits.exit6")}
            exit8Label={t("exits.exit8")}
          />

          <div className={styles.infoCol}>
            <div className={styles.infoBlock}>
              <div className={styles.infoTitleRow}>
                <TimeIcon width={24} height={24} className={styles.infoIcon} aria-hidden="true" />
                <p className={styles.infoTitle}>{t("hours.title")}</p>
              </div>
              <dl className={styles.hoursList}>
                <div className={styles.hoursRow}>
                  <dt className={styles.hoursLabel}>{t("hours.weekday.label")}</dt>
                  <dd className={styles.hoursValue}>{t("hours.weekday.value")}</dd>
                </div>
                <div className={styles.hoursRow}>
                  <dt className={styles.hoursLabel}>{t("hours.saturday.label")}</dt>
                  <dd className={styles.hoursValue}>{t("hours.saturday.value")}</dd>
                </div>
                <div className={styles.hoursRow}>
                  <dt className={styles.hoursLabel}>{t("hours.lunch.label")}</dt>
                  <dd className={styles.hoursValue}>{t("hours.lunch.value")}</dd>
                </div>
                <div className={styles.hoursRow}>
                  <dt className={styles.hoursLabel}>{t("hours.receptionClose.label")}</dt>
                  <dd className={styles.hoursValue}>{t("hours.receptionClose.value")}</dd>
                </div>
                <div className={styles.hoursRow}>
                  <dt className={styles.hoursLabel}>{t("hours.procedureClose.label")}</dt>
                  <dd className={styles.hoursValue}>{t("hours.procedureClose.value")}</dd>
                </div>
              </dl>
            </div>

            <div className={styles.divider} />

            <div className={styles.infoBlock}>
              <div className={styles.infoTitleRow}>
                <LocationIcon
                  width={24}
                  height={24}
                  className={styles.infoIcon}
                  aria-hidden="true"
                />
                <p className={styles.infoTitle}>{t("address.title")}</p>
              </div>
              <p className={styles.addressLine}>{t("address.line")}</p>
              <p className={styles.direction}>
                {t.rich("address.direction", { br: () => <br /> })}
              </p>
            </div>

            <div className={styles.mapLinks}>
              <a href="#" className={styles.mapLink}>
                <NavermapIcon
                  width={24}
                  height={24}
                  className={styles.mapLinkIcon}
                  aria-hidden="true"
                />
                <span>{t("mapLinks.naver")}</span>
              </a>
              <a href="#" className={styles.mapLink}>
                <KakaomapIcon
                  width={24}
                  height={24}
                  className={styles.mapLinkIcon}
                  aria-hidden="true"
                />
                <span>{t("mapLinks.kakao")}</span>
              </a>
              <a href="#" className={styles.mapLink}>
                <GooglemapIcon
                  width={24}
                  height={24}
                  className={styles.mapLinkIcon}
                  aria-hidden="true"
                />
                <span>{t("mapLinks.google")}</span>
              </a>
              <a href="#" className={styles.mapLink}>
                <TmapIcon
                  width={31}
                  height={30}
                  className={styles.mapLinkIcon}
                  aria-hidden="true"
                />
                <span>{t("mapLinks.tmap")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
