import LanguageSwitch from "@/app/[locale]/components/locale_switch";
import styles from "./main.module.css";

import Menu from "@/app/[locale]/components/menu";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { MENU_LIST } from "@/_lib/constnats";
import { MenuItem } from "@/_lib/types";
export default function Header() {
  const t = useTranslations();

  const TranslatedList: MenuItem[] = MENU_LIST.map(({ id, name, value }) => {
    return { id, value, name: t(name) };
  });

  return (
    <header className="flex flex-row items-center gap-16 justify-between p-h w-full rs-col">
      <Link className={styles.title} href="/">
        <span className={styles.titleRosa}>rosa</span>mtrbls
      </Link>
      <div className="flex flex-row items-center justify-center gap-8 w-full">
        <Menu list={TranslatedList} />
        <LanguageSwitch />
      </div>
    </header>
  );
}
