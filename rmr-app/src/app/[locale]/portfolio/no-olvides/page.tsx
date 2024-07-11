import { Metadata } from "next";
import PortfolioContent from "../../components/portfolio_content";
import { useLocale } from "next-intl";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Rosa Mota Robles",
  description:
    "graphic design /  communication /  illustration / cultural mediation / and much more!",
  openGraph: {
    type: "website",
    url: "https://www.rosamtrbls.com/en",
    title: "< NO OLVIDES >",
    description: `"No olvides" (Do Not Forget) is a project that speaks about the memories and experiences of 6 grandmothers. Book design, photography and illustration by myself, their own words, and nothing more than a small tribute to all of them. `,
    siteName: "rosamtrbls - Rosa Mota Robles",
    images: [
      {
        url: "https://www.rosamtrbls.com/_next/image?url=%2Fmain-olvides.jpg&w=1200&q=100",
      },
    ],
  },
};

export default function NoOlvides() {
  const locale = useLocale();
  return (
    <PortfolioContent
      metadata={metadata}
      mainContent={
        <Image
          src="/no-olvides-in.jpg"
          width={860}
          priority={true}
          className="main-image"
          height={600}
          quality={100}
          alt={`"No olvides" (Do Not Forget) is a project that speaks about the memories and experiences of 6 grandmothers. Book design, photography and illustration by myself, their own words, and nothing more than a small tribute to all of them. `}
        />
      }
      description={"< NO OLVIDES >, 2020"}
      sectionContet={
        <>
          {locale === "en"
            ? `"No olvides" (Do Not Forget) is a project that speaks about the memories and experiences of 6 grandmothers. Book design, photography and illustration by myself, their own words, and nothing more than a small tribute to all of them. `
            : `"No olvides" es un proyecto que habla de los recuerdos y vivencias de 6 abuelas. Diseño del libro, fotografía e ilustración realizadas por mí, sus propias palabras, y nada más que un pequeño homenaje a todas ellas.`}
        </>
      }
      footerContent={
        <p>
          {locale === "en"
            ? "Limited edition of 100 copies."
            : "Edición limitada de 100 copias."}
        </p>
      }
    />
  );
}
