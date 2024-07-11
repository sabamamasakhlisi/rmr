import { Metadata } from "next";
import Image from "next/image";

import styles from "./about.module.css";
import { Space_Mono } from "next/font/google";
import { useLocale } from "next-intl";
import { Locales } from "@/_lib/types";

const space_mono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Rosa Mota Robles",
  description:
    "MY NAME IS ROSA.I’M A GRAPHIC DESIGNER WITH A MASTERS IN CULTURAL INTELLIGENCE AND INNOVATIONS",
};

export default function About() {
  const locale = useLocale();

  return (
    <section
      className={`p-h ${space_mono.className} ${styles.section}  rs-col`}
    >
      <div className={styles.me}>
        <Image
          src="/Rosa.gif"
          alt="Rosa Picture"
          width={338}
          height={423}
          quality={100}
          priority
          unoptimized
        />
        <div className={styles.about}>
          <p className="txt-pn">
            {locale === Locales.EN ? "HEY!" : "¡HOLA!"}{" "}
            <span>
              {locale === Locales.EN ? "MY NAME IS ROSA." : "ME LLAMO ROSA."}{" "}
            </span>
          </p>
          <p className="txt-og">
            {locale === Locales.EN
              ? "I’M A GRAPHIC DESIGNER WITH A MASTERS IN CULTURAL INTELLIGENCE AND INNOVATIONS."
              : "SOY LICENCIADA EN DISEÑO GRÁFICO Y TENGO UN MÁSTER EN INTELIGENCIA E INNOVACIÓN CULTURAL."}
          </p>
          <p className="txt-yl">
            {locale === Locales.EN
              ? "  I HAVE WORKED IN CULTURAL INSTITUTIONS SUCH AS Centre Pompidou AND Bétonsalon - center for art and research, AS WELL AS DOING FREELANCE WORK ON GRAPHIC DESIGN PROJECTS."
              : "HE TRABAJADO EN INSTITUCIONES CULTURALES COMO EL Centre Pompidou Y Bétonsalon - centro de arte e investigación, A LA PAR QUE EN PROYECTOS DE DISEÑO GRÁFICO COMO FREELANCE."}

            <span>
              {locale === Locales.EN
                ? "BORN AND RAISED IN MADRID, SPAIN. I’M ALSO FLUENT IN FRENCH AND ENGLISH."
                : "NACÍ Y CRECÍ EN MADRID, ESPAÑA. SOY BILINGÜE EN INGLÉS Y FRANCÉS."}
            </span>
          </p>
          <p className="txt-gr">
            {locale === Locales.EN
              ? "I’M INTERESTED IN A VARIETY OF FIELDS SUCH AS DESIGN, ART DIRECTION, ILLUSTRATION, CURATION, CINEMA, CULTURAL MEDIATION, FASHION, AND EVERYTHING I DON’T KNOW ABOUT YET"
              : "ME INTERESAN DIVERSOS CAMPOS COMO EL DISEÑO, LA DIRECCIÓN DE ARTE, LA ILUSTRACIÓN, EL COMISARIADO, EL CINE, LA MEDIACIÓN CULTURAL, LA MODA Y TODAS AQUELLAS COSAS QUE AÚN DESCONOZCO."}
          </p>
          <p className="txt-pr link-to">
            <a href={`/${locale}/contact`}>
              {locale === Locales.EN
                ? "NEED TO KNOW MORE? CONTACT ME!"
                : "CONTACTA CONMIGO SI QUIERES SABER MÁS <3"}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
