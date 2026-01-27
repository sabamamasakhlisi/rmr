import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "./header";

const PPMori = localFont({
  src: [
    {
      path: "../../public/fonts/PPMori-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPMori-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/PPMori-SemiBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Rosa Mota Robles",
  description:
    "Rosa Mota Robles - graphic & editorial design /  communication /  illustration / cultural management",
  verification: {
    google: "4qVG4eC2XyE24J56Grt_XS7sVqOL-_FI_gowb1gle90",
  },
  openGraph: {
    type: "website",
    url: "https://www.rosamtrbls.com",
    title:
      "Rosa Mota Robles - graphic & editorial design /  communication /  illustration / cultural management",
    description:
      "graphic design / editorial design /  communication /  illustration / cultural management / exhibition design",
    siteName: "rosamtrbls - Rosa Mota Robles",
    images: [
      {
        url: "https://www.rosamtrbls.com/_next/image?url=%2Fno-olvides-libro.jpg&w=384&q=75",
        width: 1200,
        height: 630,
        alt: "Rosa Mota Robles - Graphic Design Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={PPMori.className}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
