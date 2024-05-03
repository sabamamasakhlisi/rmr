import Link from "next/link";
import styles from "./main.module.css";
import { useLocale, useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  const locale = useLocale();

  return (
    <main className="flex-1 flex flex-col">
      <p className={styles.mainSubtitle} aria-label="short-summery">
        <span className="txt-gr">{t("mainSummeryFirst")}</span>
        <span className={styles.subtitleDivider}>/</span>
        <span className="txt-yl">{t("mainSummerySecond")}</span>
        <span className={styles.subtitleDivider}>/</span>
        <span className="txt-pr">{t("mainSummeryThird")}</span>
        <span className={styles.subtitleDivider}>/</span>
        <span className="txt-og">{t("mainSummeryFourth")}</span>
        <span className={styles.subtitleDivider}>/</span>
        <span className="txt-pn">{t("mainSummeryFifth")}</span>
      </p>
      <section
        className={`${styles.mainSection} main-section flex-1 flex`}
        aria-label="Main Content"
      >
        <Link className="bg-pn txt-dark-br" href={`${locale}/about`}>
          <div aria-label={t("about")}>{t("about")}</div>
        </Link>
        <Link className="bg-gr txt-dark-gr" href={`${locale}/portfolio`}>
          <div className="bg-gr txt-dark-gr" aria-label={t("work")}>
            {t("work")}
          </div>
        </Link>
        <Link className="bg-pr txt-dark-pr" href={`${locale}/contact`}>
          <div aria-label={t("contact")}>{t("contact")}</div>
        </Link>
      </section>
    </main>
  );
}
