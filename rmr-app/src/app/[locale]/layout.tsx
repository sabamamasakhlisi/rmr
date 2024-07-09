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
    "graphic design /  communication /  illustration / cultural mediation / and much more!",
  verification: {
    google: "4qVG4eC2XyE24J56Grt_XS7sVqOL-_FI_gowb1gle90",
  },
  openGraph: {
    type: "website",
    url: "https://www.rosamtrbls.com/en",
    title:
      "Rosa Mota Robles - graphic design /  communication /  illustration / cultural mediation / and much more!",
    description:
      "graphic design /  communication /  illustration / cultural mediation / and much more!",
    siteName: "rosamtrbls - Rosa Mota Robles",
    images: [
      {
        url: "https://www.rosamtrbls.com/_next/image?url=%2Fmain-libro.png&w=1200&q=100",
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
