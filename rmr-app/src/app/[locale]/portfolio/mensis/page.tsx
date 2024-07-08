"use client";
import PortfolioContent from "../../components/portfolio_content";
import Image from "next/image";
import { useLocale } from "next-intl";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Mensis() {
  const locale = useLocale();

  return (
    <PortfolioContent
      mainContent={
        <AliceCarousel
          autoPlay
          keyboardNavigation
          infinite
          disableDotsControls
          animationDuration={3000}
        >
          <div>
            <Image
              src="/mensisDos.jpg"
              width={860}
              priority={true}
              className="slider-image"
              height={600}
              quality={100}
              alt="MENSIS is a platform for divulgation and knowledge about menstruation; created to normalize and facilitate access to all related information and thus help, little by little, to undo the existing myths surrounding menstruation."
            />
          </div>
          <div>
            <Image
              src="/mensisTres.jpg"
              width={860}
              priority={true}
              className="slider-image"
              height={600}
              quality={100}
              alt="MENSIS is a platform for divulgation and knowledge about menstruation; created to normalize and facilitate access to all related information and thus help, little by little, to undo the existing myths surrounding menstruation."
            />
          </div>
          <div>
            <Image
              src="/mensisUno.jpg"
              width={860}
              priority={true}
              className="slider-image"
              height={600}
              quality={100}
              alt="MENSIS is a platform for divulgation and knowledge about menstruation; created to normalize and facilitate access to all related information and thus help, little by little, to undo the existing myths surrounding menstruation."
            />
          </div>
        </AliceCarousel>
      }
      description={"< MENSIS >, 2021"}
      sectionContet={
        <>
          {locale === "en"
            ? `MENSIS is a platform for divulgation and knowledge about menstruation; created to normalize and facilitate access to all related information and thus help, little by little, to undo the existing myths surrounding menstruation.`
            : `MENSIS es una plataforma de divulgación y conocimiento sobre la menstruación; creada para normalizar y facilitar el acceso a toda la información relacionada y ayudar así, poco a poco, a deshacer los mitos que le rodean.`}
        </>
      }
      footerContent={
        <div>
          <p>
            {locale === "en"
              ? `Developed in Figma and with my own illustrations and animations, the design of this platform aims to facilitate access to a guide and encyclopedia on this subject.`
              : `Desarrollada en Figma y con ilustraciones y animaciones propias, el diseño de esta plataforma pretende facilitar el acceso a una guía y enciclopedia sobre este sujeto.`}
          </p>
          <p className="mt-4">
            {locale === "en" ? (
              <>
                Want to navigate the prototype on Figma?
                <a
                  className="link-to txt-pr"
                  href={
                    "https://www.figma.com/proto/sXvXrLsVvOEZBRZef0moEJ/MENSIS?node-id=537-1&t=afUrAe53OZx4LBcC-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=537%3A1"
                  }
                  target="_blank"
                >
                  {`Let's go!`}
                </a>
              </>
            ) : (
              <>
                ¿Quieres probar el prototipo en Figma?
                <a
                  href={
                    "https://www.figma.com/proto/sXvXrLsVvOEZBRZef0moEJ/MENSIS?node-id=537-1&t=afUrAe53OZx4LBcC-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=537%3A1"
                  }
                  target="_blank"
                  className="link-to txt-pr"
                >
                  ¡Allá vamos!
                </a>
              </>
            )}
          </p>
        </div>
      }
    />
  );
}
