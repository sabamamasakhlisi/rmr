import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import Header from "./header";
import { useLocale } from "next-intl";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

//generatemetadata according to locale spanish or english
export const metadata: Metadata = {
  title: "rosa mota robles",
  description:
    "Rosa Mota, Graphic Designer (MA Cultural Intelligence). Madrid-born, fluent in French & English. Experienced at cultural institutions (Pompidou, Bétonsalon). Passionate about design, art & exploring new creative fields ",
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
        {/* <Header /> */}
        {/* {children} */}
        <Image
          src="/soon.png"
          style={{ width: "100vw", height: "100vh" }}
          alt={"soon page"}
          width={900}
          height={700}
          priority={true}
          quality={100}
        />
      </body>
    </html>
  );
}
