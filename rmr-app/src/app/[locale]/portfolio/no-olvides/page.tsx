import { Metadata } from "next";
import PortfolioContent from "../../components/portfolio_content";
import { useLocale } from "next-intl";
import Image from "next/image";

export const metadata: Metadata = {
  title: "rosa mota robles",
  description:
    "MY NAME IS ROSA.I’M A GRAPHIC DESIGNER WITH A MASTERS IN CULTURAL INTELLIGENCE AND INNOVATIONS",
};

export default function NoOlvides() {
  const locale = useLocale();
  return (
    <PortfolioContent
      metadata={metadata}
      mainContent={
        <Image
          src="/no-olvides-s.jpg"
          width={860}
          priority={true}
          className="main-image"
          height={600}
          quality={100}
          alt="CUARENTA Y TRES PERSONAS, EN VERANO, EN AGOSTO, EN FAMILIA, EN SOLEDAD, EN MI CÁMARA Y EN UN (1) SITIO."
        />
      }
      description={"< NO OLVIDES >, 2020"}
      sectionContet={
        <>
          {locale === "en"
            ? `"No olvides" (do not forget) is a project that speaks about the memories and experiences of 6 grandmothers. Book design, photography and illustration by myself, their own words, and nothing more than a small tribute to all of them. `
            : `"No olvides" es un proyecto que habla de los recuerdos y vivencias de 6 abuelas. Diseño del libro, fotografía e ilustración realizadas por mí, sus propias palabras, y nada más que un pequeño homenaje a todas ellas.`}
        </>
      }
      footerContent={<p>{"Limited edition of 100 copies."}</p>}
    />
  );
}
