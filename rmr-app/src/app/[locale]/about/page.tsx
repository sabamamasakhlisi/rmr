import { Metadata } from "next";
import Image from "next/image";

import styles from "./about.module.css";
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

export default function About() {
  return (
    <section
      className={`p-h ${space_mono.className} ${styles.section}  rs-col`}
    >
      <div className={styles.me}>
        <Image src="/rosa.png" alt="Rosa Picture" width={336} height={448} />
        <div className={styles.about}>
          <p className="txt-pn">
            HEY! <span>MY NAME IS ROSA.</span>
          </p>
          <p className="txt-og">
            I’M A GRAPHIC DESIGNER WITH A MASTERS IN CULTURAL INTELLIGENCE AND
            INNOVATIONS.
          </p>
          <p className="txt-yl">
            I HAVE WORKED IN CULTURAL INSTITUTIONS SUCH AS Centre Pompidou AND
            Bétonsalon - center for art and research.
            <span>
              BORN AND RAISED IN MADRID, SPAIN. I’M ALSO FLUENT IN FRENCH AND
              ENGLISH.
            </span>
          </p>
          <p className="txt-gr">
            I’M INTERESTED IN A VARIETY OF FIELDS SUCH AS DESIGN, ART DIRECTION,
            ILLUSTRATION, CURATION, CINEMA, CULTURAL MEDIATION, FASHION, AND
            EVERYTHING I DON’T KNOW ABOUT YET
          </p>
          <p className="txt-pr link-to">
            <a href="mailto:rosamtrbls[@]gmail.com">
              NEED TO KNOW MORE? CONTACT ME!
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
