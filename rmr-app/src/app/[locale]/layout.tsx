import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "../../globals.css";
import Header from "./header";
import { useLocale } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

//generatemetadata according to locale spanish or english
export const metadata: Metadata = {
  title: "Rosa Mota Robles | Graphic Designer",
  description:
    "Rosa Mota, Graphic Designer (MA Cultural Intelligence). Madrid-born, fluent in French & English. Experienced at cultural institutions (Pompidou, Bétonsalon). Passionate about design, art & exploring new creative fields ",
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
      </body>
    </html>
  );
}
