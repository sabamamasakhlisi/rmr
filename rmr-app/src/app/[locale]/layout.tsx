import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import Header from "./header";
import { useLocale } from "next-intl";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rosa Mota Robles",
  description:
    "Rosa Mota Robles, Graphic Designer (MA Cultural Intelligence). Madrid-born, fluent in French & English. Experienced at cultural institutions (Pompidou, Bétonsalon). Passionate about design, art & exploring new creative fields ",
  verification: {
    google: "4qVG4eC2XyE24J56Grt_XS7sVqOL-_FI_gowb1gle90",
  },
  openGraph: {
    type: "website",
    url: "https://www.rosamtrbls.com/",
    title: "Rosa Mota Robles",
    description:
      "graphic design /  communication /  illustration / cultural mediation / and much more!",
    siteName: "rosamtrbls",
    images: [
      {
        url: "https://www.rosamtrbls.com/_next/image?url=%2F5histoires.gif&w=1920&q=100",
      },
    ],
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
        <Analytics />
        {/* <CommingSoon /> */}
      </body>
    </html>
  );
}
