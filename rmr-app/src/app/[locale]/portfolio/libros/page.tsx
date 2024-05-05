import { Metadata } from "next";
import Image from "next/image";
import { HoveredImage, images } from "../constants";
import { useLocale } from "next-intl";
import PortfolioContent from "../../components/portfolio_content";

export const metadata: Metadata = {
  title: "rosa mota robles",
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
            ? `LA DERROTA is a short film about the fear of disappearing,\nof impersonation,\nand of oneself..`
            : "LA DERROTA is a short film about the fear of disappearing,\nof impersonation,\nand of oneself."}
        </>
      }
      footerContent={
        <a
          href="https://jaragarciaazor.com/"
          target="_blank"
          className="link-to txt-pr"
        >
          Check out Jara’s website!
        </a>
      }
    />
  );
}
