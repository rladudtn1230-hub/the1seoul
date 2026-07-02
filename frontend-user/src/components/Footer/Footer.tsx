import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import styles from "./Footer.module.css";
import ArrowInsertIcon from "@/components/icons/svg/icon-arrow-insert.svg";
import LogoWhiteIcon from "@/components/icons/svg/logo/logo-wh-footer.svg";
import YoutubeIcon from "@/components/icons/svg/icon-youtube-wh.svg";
import BlogIcon from "@/components/icons/svg/icon-blog-wh.svg";

/**
 * 사이트 공용 푸터 (Figma node 324:9618).
 * - 정책 링크(개인정보처리방침 등)는 아직 서브페이지가 없어 "#"로 둔다.
 */
export default async function Footer() {
  const t = await getTranslations("common.footer");

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <LogoWhiteIcon width={262} height={65} className={styles.logo} aria-hidden="true" />

        <div className={styles.row}>
          <div className={styles.callArea}>
            <p className={styles.callLabel}>{t("callLabel")}</p>
            <p className={styles.callNumber}>{t("phone")}</p>
            <Link href="/support" className={styles.cta}>
              <span>{t("cta")}</span>
              <ArrowInsertIcon
                width={38}
                height={36}
                className={styles.ctaArrow}
                aria-hidden="true"
              />
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
                <a
                  href="https://www.youtube.com/@the1seoul"
                  target="_blank"
                  className={styles.iconBtn}
                  aria-label="Youtube"
                >
                  <YoutubeIcon width={22} height={15} aria-hidden="true" />
                </a>
                <a
                  href="https://blog.naver.com/io04q1064ii"
                  target="_blank"
                  className={styles.iconBtn}
                  aria-label="Blog"
                >
                  <BlogIcon width={22} height={20} aria-hidden="true" />
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
