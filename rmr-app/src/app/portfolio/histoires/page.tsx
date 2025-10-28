import { Metadata } from "next";
import PortfolioContent from "../../components/portfolio_content";
import Image from "next/image";
import { useLocale } from "next-intl";

export const metadata: Metadata = {
  title: "Rosa Mota Robles",
  description:
    "graphic design /  communication /  illustration / cultural mediation / and much more!",
  openGraph: {
    type: "website",
    url: "https://www.rosamtrbls.com/en",
    title: "< 5 HISTORIES >",
    description:
      "This short stories fanzine gathers writings from my first 5 months in Paris. Only 1 copy available and only in French.",
    siteName: "rosamtrbls - Rosa Mota Robles",
    images: [
      {
        url: "https://www.rosamtrbls.com/_next/image?url=%2Fmain-libro.png&w=1200&q=100",
      },
    ],
  },
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
