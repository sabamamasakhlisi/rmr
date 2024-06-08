"use client";
import { Locales } from "@/_lib/types";

import { useLocale } from "next-intl";

import { useRouter, usePathname } from "next/navigation";

import styles from "./components.module.css";
import { HOME_URL_LENGTH } from "@/_lib/constnats";

export default function LanguageSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathName = usePathname();

  const switchHandler = (e: React.MouseEvent) => {
    const selectedLanguage = (e.target as HTMLElement).innerText;
    if (locale !== selectedLanguage) {
      const roots = pathName.split("/");
      const page = roots.at(-1);
      if (page?.length === 2) {
        router.replace(`/${selectedLanguage}`);
      } else if (roots.length > 3) {
        router.replace(`/${selectedLanguage}/${roots.at(-2)}/${page}`);
      } else router.replace(`/${selectedLanguage}/${page}`);
    }
  };

  return (
    pathName.length > HOME_URL_LENGTH && (
      <ul role="language-switch" className="text-xl font-34px">
        {Object.values(Locales).map((item, index) => (
          <li
            className={
              locale === item ? styles.currentLang : styles.languageText
            }
            key={index}
            role="menuitem"
            onClick={switchHandler}
          >
            {item}
          </li>
        ))}
      </ul>
    )
  );
}
