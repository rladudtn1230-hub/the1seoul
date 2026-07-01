import { getTranslations } from "next-intl/server";
import styles from "./HeroSection.module.css";

export default async function HeroSection() {
  const t = await getTranslations("home.hero");

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{t("title")}</h2>
        <p className={styles.subtitle}>{t("subtitle")}</p>
      </div>
    </section>
  );
}
