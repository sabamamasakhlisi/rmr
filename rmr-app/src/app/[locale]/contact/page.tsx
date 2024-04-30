import { Metadata } from "next";
import Image from "next/image";
import styles from "./contact.module.css";

import { Space_Mono } from "next/font/google";

const space_mono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space",
  weight: "400",
});

export const metadata: Metadata = {
  title: "rosa mota robles",
  description:
    "MY NAME IS ROSA.I’M A GRAPHIC DESIGNER WITH A MASTERS IN CULTURAL INTELLIGENCE AND INNOVATIONS",
};

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <div className={`txt-og ${styles.txtTouch}`}>{"let's get in touch!"}</div>
      <div className={`${styles.contactMail} ${space_mono.className}`}>
        <a href="mailto:rosamtrbls[@]gmail.com">
          rosamtrbls<span className={styles.brac}>{"["}</span>@
          <span className={styles.brac}>{"]"}</span>
          gmail.com
        </a>
      </div>
      <div className="social flex justify-center items-center font-64">
        <a
          className="txt-yl link-to"
          href="https://www.behance.net/rosevalle"
          target="_blank"
        >
          BEHANCE
        </a>
        <Image
          className={styles.heart}
          src="/heart.svg"
          alt="heart"
          width={55}
          height={55}
        />
        <a
          className="txt-yl link-to"
          href="https://www.linkedin.com/in/rosa-mota-robles/"
          target="_blank"
        >
          LINKEDIN
        </a>
      </div>
      <div className="font-64 txt-yl">
        <a
          className="link-to"
          href="https://www.instagram.com/rosamtrbls/"
          target="_blank"
        >
          INSTAGRAM
        </a>
      </div>
    </section>
  );
}
