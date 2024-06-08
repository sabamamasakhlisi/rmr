import { Metadata } from "next";
import Image from "next/image";
import PortfolioContent from "../../components/portfolio_content";
import { useLocale } from "next-intl";

export const metadata: Metadata = {
  title: "rosa mota robles",
  description:
    "MY NAME IS ROSA.I’M A GRAPHIC DESIGNER WITH A MASTERS IN CULTURAL INTELLIGENCE AND INNOVATIONS",
};

export default function Aeugly() {
  const locale = useLocale();
  return (
    <PortfolioContent
      metadata={metadata}
      mainContent={
        <Image
          src="/aeugly.png"
          width={860}
          priority={true}
          className="main-image"
          height={600}
          quality={100}
          alt="CUARENTA Y TRES PERSONAS, EN VERANO, EN AGOSTO, EN FAMILIA, EN SOLEDAD, EN MI CÁMARA Y EN UN (1) SITIO."
        />
      }
      description={"< Case study: AESTHETICS OF THE UGLY. >"}
      sectionContet={
        <>
          {locale === "en"
            ? `Fanzine-shaped essay on the aesthetics of the ugly. Focusing on a modern effort for defining what they consist of, how they change, who creates them, and what they look like.`
            : ""}
        </>
      }
      footerContent={<p>Only one copy available, printed on glossy paper.</p>}
    />
  );
}
