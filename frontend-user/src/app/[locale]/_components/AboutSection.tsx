import Image from "next/image";
import { getTranslations } from "next-intl/server";
import styles from "./AboutSection.module.css";

export default async function AboutSection() {
  const t = await getTranslations("home.about");

  return (
    <section className={styles.section}>
      {/* Background layers */}
      <div className={styles.bgVessel}>
        <Image
          src="/images/home/bg_vessel.png"
          alt=""
          fill
          sizes="100vw"
          className={styles.bgVesselImage}
        />
      </div>
      <div className={styles.bgEllipse}>
        <Image
          src="/images/home/bg_ellipse.png"
          alt=""
          width={966}
          height={966}
        />
      </div>
      <div className={styles.bgFade} />

      {/* Content */}
      <div className={styles.content}>
        {/* The One + Seoul subtitle */}
        <div className={styles.subtitleWrap}>
          <span className={styles.subtitleText}>The One</span>
          <span className={styles.subtitleCross}>
            <span className={styles.crossH} />
            <span className={styles.crossV} />
          </span>
          <span className={styles.subtitleText}>Seoul</span>
        </div>

        {/* Title */}
        <div className={styles.titleWrap}>
          <p className={styles.titleLine1}>{t("titleLine1")}</p>
          <p className={styles.titleLine2}>{t("titleLine2")}</p>
        </div>

        {/* Description */}
        <div className={styles.description}>
          <p>{t("descLine1")}</p>
          <p>{t("descLine2")}</p>
          <p>{t("descLine3")}</p>
          <p className={styles.descSpacer} />
          <p>{t("descLine4")}</p>
          <p>{t("descLine5")}</p>
          <p>{t("descLine6")}</p>
          <p>{t("descLine7")}</p>
        </div>

        {/* CTA Button */}
        <a href="#" className={styles.cta}>
          <span>{t("cta")}</span>
          <span className={styles.ctaDot} />
        </a>
      </div>

      {/* Statistics Cards */}
      <div className={styles.statsRow}>
        {/* Card 1: Surgery - light blue */}
        <div className={`${styles.card} ${styles.cardBlue}`}>
          <div className={styles.cardInner}>
            <div className={styles.cardValue}>
              <span className={styles.cardNumber}>{t("stats.surgery.value")}</span>
              <span className={styles.cardUnit}>{t("stats.surgery.unit")}</span>
            </div>
            <p className={styles.cardLabel}>{t("stats.surgery.label")}</p>
          </div>
        </div>

        {/* Card 2: Cataract - grey with CT equipment bg */}
        <div className={`${styles.card} ${styles.cardGrey}`}>
          <div className={styles.cardBgEquipment}>
            <Image
              src="/images/home/card_ct_equipment.png"
              alt=""
              width={158}
              height={334}
              className={styles.cardBgEquipmentImg}
            />
          </div>
          <div className={styles.cardInner}>
            <div className={styles.cardValue}>
              <span className={styles.cardNumber}>{t("stats.cataract.value")}</span>
              <span className={styles.cardUnit}>{t("stats.cataract.unit")}</span>
            </div>
            <p className={styles.cardLabel}>{t("stats.cataract.label")}</p>
          </div>
        </div>

        {/* Card 3: Experience - dark with eye background */}
        <div className={`${styles.card} ${styles.cardDark}`}>
          <Image
            src="/images/home/card_dark_eye.png"
            alt=""
            fill
            sizes="800px"
            className={styles.cardBgEyeImg}
          />
          <div className={styles.cardInner}>
            <div className={styles.cardValue}>
              <span className={styles.cardNumber}>{t("stats.experience.value")}</span>
              <span className={styles.cardUnit}>{t("stats.experience.unit")}</span>
            </div>
            <p className={styles.cardLabel}>{t("stats.experience.label")}</p>
          </div>
        </div>

        {/* Card 4: Satisfaction - grey */}
        <div className={`${styles.card} ${styles.cardGrey}`}>
          <div className={styles.cardInner}>
            <div className={styles.cardValue}>
              <span className={styles.cardNumber}>{t("stats.satisfaction.value")}</span>
              <span className={styles.cardUnit}>{t("stats.satisfaction.unit")}</span>
            </div>
            <p className={styles.cardLabel}>{t("stats.satisfaction.label")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
