import { Metadata } from "next";
import Image from "next/image";
import { useLocale } from "next-intl";
import PortfolioContent from "../../components/portfolio_content";

export const metadata: Metadata = {
  title: "Rosa Mota Robles",
  description:
    "MY NAME IS ROSA.I’M A GRAPHIC DESIGNER WITH A MASTERS IN CULTURAL INTELLIGENCE AND INNOVATIONS",
};

export default function Libros() {
  const locale = useLocale();
  return (
    <PortfolioContent
      metadata={metadata}
      mainContent={
        <Image
          src="/personidas.jpeg"
          width={860}
          priority={true}
          className="main-image"
          height={600}
          quality={100}
          alt="CUARENTA Y TRES PERSONAS, EN VERANO, EN AGOSTO, EN FAMILIA, EN SOLEDAD, EN MI CÁMARA Y EN UN (1) SITIO."
        />
      }
      description={
        locale === "en"
          ? "< CUARENTA Y TRES PERSONAS, EN VERANO, /n EN AGOSTO, EN FAMILIA, EN SOLEDAD, EN MI CÁMARA Y EN UN (1) SITIO. >"
          : "< CUARENTA Y TRES PERSONAS, EN VERANO, EN AGOSTO, EN FAMILIA, EN SOLEDAD, EN MI CÁMARA Y EN UN (1) SITIO. >"
      }
      sectionContet={
        <>
          {locale === "en"
            ? `Book design for @jaragarciaazor’s documental photography zine between the US and China. `
            : "Diseño tipográfico para el fanzine de fotografía documental de @jaragarciaazor"}
        </>
      }
      footerContent={
        <a
          href="https://jaragarciaazor.com/"
          target="_blank"
          className="link-to txt-pr"
        >
          {locale === "en"
            ? `Check out Jara’s work!`
            : "¡Échale un ojo al trabajo de Jara!"}
        </a>
      }
    />
  );
}
