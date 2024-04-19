import styles from "./main.module.css";
import { useTranslations } from "next-intl";
import { headers } from "next/headers";

export default function Home() {
  const t = useTranslations();

  console.log(headers());

  return (
    <main className="flex-1 flex flex-col">
      <p className={styles.mainSubtitle} aria-label="short-summery">
        <span className={styles.firstRow}>
          <span className="txt-gr">{t("mainSummeryFirst")}</span>
          <span className={styles.subtitleDivider}>/</span>
          <span className="txt-yl">{t("mainSummerySecond")}</span>
          <span className={styles.subtitleDivider}>/</span>
        </span>
        <span className={styles.secondRow}>
          <span className="txt-pr">{t("mainSummeryThird")}</span>
          <span className={styles.subtitleDivider}>/</span>
          <span className="txt-og">{t("mainSummeryFourth")}</span>
          <span className={styles.subtitleDivider}>/</span>
          <span className="txt-pn">{t("mainSummeryFifth")}</span>
        </span>
      </p>
      <section
        className={`${styles.mainSection} main-section flex-1 flex flex-row`}
        aria-label="Main Content"
      >
        <div className="bg-pn txt-dark-br" aria-label={t("about")}>
          {t("about")}
        </div>
        <div className="bg-gr txt-dark-gr" aria-label={t("work")}>
          {t("work")}
        </div>
        <div className="bg-pr txt-dark-pr" aria-label={t("contact")}>
          {t("contact")}
        </div>
      </section>
    </main>
  );
}
