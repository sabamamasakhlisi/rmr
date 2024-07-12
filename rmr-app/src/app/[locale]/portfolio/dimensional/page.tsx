"use client";
import PortfolioContent from "../../components/portfolio_content";
import Image from "next/image";
import { useLocale } from "next-intl";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { lettersImages } from "../constants";

export default function Dimensional() {
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
          {lettersImages.map(({ src, alt }, index) => (
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
            ? `Selection of experimental typography creations on C4D`
            : `Selección de creaciones tipográficas experimentales en C4D`}
        </>
      }
    />
  );
}
