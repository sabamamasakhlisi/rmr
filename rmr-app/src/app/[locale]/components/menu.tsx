"use client";
import { HOME_URL_LENGTH, MENU_LIST } from "@/_lib/constnats";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
export default function Menu() {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    pathname.length > HOME_URL_LENGTH && (
      <nav aria-labelledby="main-menu" className="w-full">
        <ul
          role="menubar"
          className="flex flex-row items-center gap-32 text-xl font-64px w-full rs-wrap"
        >
          {MENU_LIST.map((item) => (
            <li
              key={item.id}
              role="menuitem"
              className={`${item.name} ${
                pathname.split("/").at(-1) === item.name ? "active" : ""
              }`}
            >
              <Link href={`/${locale}/${item.name}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  );
}
