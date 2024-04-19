import LanguageSwitch from "@/app/[locale]/components/locale_switch";
import styles from "./main.module.css";

import Menu from "@/app/[locale]/components/menu";
import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";
import Link from "next/link";
export default function Header() {
  const t = useTranslations();

  return (
    <header className="flex flex-row items-center justify-between p-h">
      <Link className={styles.title} href="/">
        {<strong>rosa</strong>}mtrbls
      </Link>
      <div className="flex flex-row items-center justify-center gap-8">
        <Menu />
        <LanguageSwitch />
      </div>
    </header>
  );
}
