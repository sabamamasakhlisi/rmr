import { Metadata } from "next";
import Image from "next/image";
import PortfolioContent from "../../components/portfolio_content";
import { useLocale } from "next-intl";

export const metadata: Metadata = {
  title: "Rosa Mota Robles",
  description:
    "graphic design /  communication /  illustration / cultural mediation / and much more!",
  openGraph: {
    type: "website",
    url: "https://www.rosamtrbls.com/en",
    title: "< Case study: AESTHETICS OF THE UGLY. >",
    description:
      "Fanzine-shaped essay on the aesthetics of the ugly. Focusing on a modern effort for defining what they consist of, how they change, who creates them, and what they look like.",
    siteName: "rosamtrbls - Rosa Mota Robles",
    images: [
      {
        url: "https://www.rosamtrbls.com/_next/image?url=%2Faeugly.jpg&w=828&q=100",
      },
    ],
  },
};

export default function Aeugly() {
  const locale = useLocale();
  return (
    <PortfolioContent
      metadata={metadata}
      mainContent={
        <Image
          src="/aestheticsoftheugly.gif"
          width={860}
          priority={true}
          className="main-image"
          height={600}
          quality={100}
          alt="Fanzine-shaped essay on the aesthetics of the ugly. Focusing on a modern effort for defining what they consist of, how they change, who creates them, and what they look like."
        />
      }
      description={"< Case study: AESTHETICS OF THE UGLY. >"}
      sectionContet={
        <>
          {locale === "en"
            ? `Fanzine-shaped essay on the aesthetics of the ugly. Focusing on a modern effort for defining what they consist of, how they change, who creates them, and what they look like.`
            : "Ensayo en forma de fanzine sobre la Estética de lo feo. Centrado en un intento moderno por definir en qué consiste, cómo cambia, quién la crea y qué aspecto tiene."}
        </>
      }
      footerContent={
        <p>
          {locale === "en"
            ? `Only one copy available, printed on glossy paper.`
            : "Tan solo un ejemplar disponible, impreso en papel brillante."}
        </p>
      }
    />
  );
}
