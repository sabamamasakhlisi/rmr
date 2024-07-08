import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import Header from "./header";
import { useLocale } from "next-intl";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

// generatemetadata according to locale spanish or english
export const metadata: Metadata = {
  title: "Rosa Mota Robles",
  description:
    "Rosa Mota Robles, Graphic Designer (MA Cultural Intelligence). Madrid-born, fluent in French & English. Experienced at cultural institutions (Pompidou, Bétonsalon). Passionate about design, art & exploring new creative fields ",
  verification: {
    google: "4qVG4eC2XyE24J56Grt_XS7sVqOL-_FI_gowb1gle90",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = useLocale();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Header />
        {children}
        {/* <CommingSoon /> */}
      </body>
    </html>
  );
}
