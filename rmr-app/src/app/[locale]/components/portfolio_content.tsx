import { Metadata } from "next";
import styles from "./components.module.css";

import { Space_Mono } from "next/font/google";

const space_mono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "700"],
});

interface AbstractComponentProps {
  metadata?: Metadata;
  image?: {
    src: string;
    width: number;
    height: number;
    alt: string;
    quality: number;
  };
  mainContent: JSX.Element;
  description?: string;
  sectionContet?: JSX.Element;
  footerContent?: JSX.Element;
}

export default function PortfolioContent({
  mainContent,
  description,
  footerContent,
  sectionContet,
}: AbstractComponentProps) {
  return (
    <section
      className={`${styles.portfolioSection} ${space_mono.className} p-h sec-lay`}
    >
      {mainContent}
      <h4 className="txt-yl fw-7">{description || ""}</h4>
      <p>{sectionContet}</p>
      <footer className="my-4">{footerContent}</footer>
    </section>
  );
}
