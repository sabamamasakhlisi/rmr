"use client";
import PortfolioContent from "../../components/portfolio_content";
import Image from "next/image";
import { useLocale } from "next-intl";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { tarotImages } from "../constants";

export default function Tarot() {
  const locale = useLocale();

  return (
    <PortfolioContent
      mainContent={
        <AliceCarousel
          autoPlay
          keyboardNavigation
          infinite
          disableDotsControls
          animationDuration={2000}
        >
          {tarotImages.map(({ src, alt }, index) => (
            <div key={alt + index}>
              <Image
                src={src}
                width={860}
                priority={true}
                className="slider-image"
                height={600}
                quality={100}
                alt={alt}
              />
            </div>
          ))}
        </AliceCarousel>
      }
      sectionContet={
        <>
          {locale === "en"
            ? `This project seeks a modern twist on the iconography of the classic divination cards of Tarot de Marseille. With simpler shapes and vibrant colours, the characters are represented through a series of digital illustrations made on Procreate.`
            : `Este proyecto pretende darle un giro moderno a la iconografía de las clásicas cartas de adivinación del Tarot de Marseille. Con formas más sencillas y colores vibrantes, los personajes se representan a través de una serie de ilustraciones digitales realizadas en Procreate.`}
        </>
      }
    />
  );
}
