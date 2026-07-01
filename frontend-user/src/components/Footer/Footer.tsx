import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import styles from "./Footer.module.css";

/**
 * 사이트 공용 푸터 (Figma node 324:9618).
 * - 정책 링크(개인정보처리방침 등)는 아직 서브페이지가 없어 "#"로 둔다.
 */
export default async function Footer() {
  const t = await getTranslations("common.footer");

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/common/logo_wh.png" alt="더원서울안과" className={styles.logo} />

        <div className={styles.row}>
          <div className={styles.callArea}>
            <p className={styles.callLabel}>{t("callLabel")}</p>
            <p className={styles.callNumber}>{t("phone")}</p>
            <Link href="/support" className={styles.cta}>
              <span>{t("cta")}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="images/footer/arrow.svg" alt="" className={styles.ctaArrow} />
            </Link>
          </div>

          <div className={styles.infoArea}>
            <div className={styles.topRow}>
              <nav className={styles.links}>
                <a href="#">{t("links.privacy")}</a>
                <span className={styles.divider} />
                <a href="#">{t("links.nonCovered")}</a>
                <span className={styles.divider} />
                <a href="#">{t("links.patientRights")}</a>
              </nav>

              <div className={styles.social}>
                <a href="#" className={styles.iconBtn} aria-label="Youtube">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="images/footer/youtube.svg" alt="" />
                </a>
                <a href="#" className={styles.iconBtn} aria-label="Blog">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="images/footer/blog.svg" alt="" />
                </a>
              </div>
            </div>

            <div className={styles.company}>
              <p className={styles.companyLine}>
                <span>{t("info.name")}</span>
                <span>{t("info.ceo")}</span>
                <span>{t("info.address")}</span>
              </p>
              <p className={styles.companyLine}>
                <span>{t("info.tel")}</span>
                <span>{t("info.bizNo")}</span>
                <span>{t("info.privacyManager")}</span>
              </p>
            </div>

            <p className={styles.copyright}>{t("copyright")}</p>

            <a href="#" className={styles.admin}>
              {t("admin")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
