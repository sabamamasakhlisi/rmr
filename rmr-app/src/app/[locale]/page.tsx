import Link from "next/link";
import styles from "./main.module.css";
import { useLocale, useTranslations } from "next-intl";
import MainTitle from "./components/main_title";
import { useEffect } from "react";

export default function Home() {
  const t = useTranslations();

  const locale = useLocale();

  return (
    <main className="flex-1 flex flex-col">
      <MainTitle
        firstSpan={t("mainSummeryFirst")}
        secondSpan={t("mainSummerySecond")}
        thirdSpan={t("mainSummeryThird")}
        fourthSpan={t("mainSummeryFourth")}
        fifthSpanAddon={t("mainSummeryAddon")}
        fifthSpan={t("mainSummeryFifth")}
      />
      <section
        className={`${styles.mainSection} main-section flex-1 flex`}
        aria-label="Main Content"
      >
        <Link
          className="bg-pn txt-dark-br link-left-to-right "
          href={`${locale}/about`}
        >
          <div aria-label={t("about")}>{t("about")}</div>
        </Link>
        <Link
          className="bg-gr txt-dark-gr fill-animation"
          href={`${locale}/portfolio`}
        >
          <div aria-label={t("work")}>{t("work")}</div>
        </Link>
        <Link
          className="bg-pr txt-dark-pr link-right-to-left"
          href={`${locale}/contact`}
        >
          <div aria-label={t("contact")}>{t("contact")}</div>
        </Link>
      </section>
    </main>
  );
}
