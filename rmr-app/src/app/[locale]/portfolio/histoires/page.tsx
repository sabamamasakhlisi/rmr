import { Metadata } from "next";
import PortfolioContent from "../../components/portfolio_content";
import Image from "next/image";
import { useLocale } from "next-intl";

export const metadata: Metadata = {
  title: "Rosa Mota Robles",
  description:
    "MY NAME IS ROSA.I’M A GRAPHIC DESIGNER WITH A MASTERS IN CULTURAL INTELLIGENCE AND INNOVATIONS",
};

export default function Histoires() {
  const locale = useLocale();
  return (
    <PortfolioContent
      metadata={metadata}
      mainContent={
        <Image
          src="/5histoires.gif"
          width={860}
          priority={true}
          className="main-image"
          height={600}
          quality={100}
          alt="This short stories fanzine gathers writings from my first 5 months in Paris. Only 1 copy available and only in French."
        />
      }
      description={"< 5 HISTORIES >"}
      sectionContet={
        <>
          {locale === "en"
            ? `This short stories fanzine gathers writings from my first 5 months in Paris. Only 1 copy available and only in French.`
            : "Este fanzine de relatos cortos reúne escritos de mis primeros 5 meses en París. Tan sólo 1 ejemplar existente y únicamente en francés."}
        </>
      }
    />
  );
}
