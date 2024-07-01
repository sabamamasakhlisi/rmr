"use client";
import { HOME_URL_LENGTH } from "@/_lib/constnats";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { MenuItem } from "@/_lib/types";
export default function Menu({ list }: { list: MenuItem[] }) {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    pathname.length > HOME_URL_LENGTH && (
      <nav aria-labelledby="main-menu" className="w-full">
        <ul
          role="menubar"
          className="flex flex-row items-center gap-24 text-xl font-64px w-full rs-wrap"
        >
          {list.map((item) => (
            <li
              key={item.id}
              role="menuitem"
              className={`${item.value} ${
                pathname.split("/").at(-1) === item.value ||
                pathname.split("/").at(-1) === item.name
                  ? "active"
                  : ""
              }`}
            >
              <Link
                href={`/${locale}/${
                  item.value === "work" ? item.name : item.value
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  );
}
