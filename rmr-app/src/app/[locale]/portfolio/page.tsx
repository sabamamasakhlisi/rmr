"use client";
import Image from "next/image";
import styles from "./work.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { images } from "./constants";

import { Space_Mono } from "next/font/google";

const space_mono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space",
  weight: "400",
});

const renderContentById = (id: number, hoveredImage: any, locale: string) => {
  switch (id) {
    case 1:
      return (
        <>
          <div>
            <h3 className="txt-yl fs-24">
              <span className="fw-4">{hoveredImage[locale]?.light ?? ""}</span>
              <span className="fw-7">{hoveredImage[locale]?.dark ?? ""}</span>
            </h3>
            <p className="mu-1 fs-1">{hoveredImage[locale]?.description}</p>
          </div>
          <p className="txt-og">{hoveredImage.year}</p>
        </>
      );
    case 2:
      return (
        <>
          <div>
            <h3 className="txt-yl fs-24">
              <span className="fw-7">{hoveredImage[locale]?.dark ?? ""}</span>
              <span>{hoveredImage[locale]?.light ?? ""}</span>
            </h3>
            <p className="mu-1 fs-1">{hoveredImage[locale]?.description}</p>
          </div>
          <p className="txt-og">{hoveredImage.year}</p>
        </>
      );
    case 3:
      return (
        <>
          <div>
            <h3 className="txt-yl fs-24">
              <span className="fw-7">{hoveredImage[locale]?.dark ?? ""}</span>
              <span>{hoveredImage[locale]?.light ?? ""}</span>
            </h3>
            <p className="mu-1 fs-1">{hoveredImage[locale].description}</p>
          </div>
          <p className="txt-og">{hoveredImage.year}</p>
        </>
      );
    case 4:
      return (
        <>
          <div>
            <h3 className="txt-yl fs-24">
              <span className="fw-7">{hoveredImage[locale]?.light ?? ""}</span>
              <span>{hoveredImage[locale]?.dark ?? ""}</span>
              <span>{hoveredImage[locale]?.addon ?? ""}</span>
            </h3>
            <p className="mu-1 fs-1">
              {hoveredImage[locale]?.description ?? ""}
            </p>
          </div>
          <p className="txt-og">{hoveredImage.year}</p>
        </>
      );
    case 5:
      return <></>;
    case 6:
      return (
        <>
          <div>
            {locale === "en" ? (
              <h3 className="txt-yl fs-24">
                <span className="fw-7">book design</span>
                <span>
                  for @<span className="link-to">jaragarciaazor</span>’s
                  documental photography zine
                </span>
              </h3>
            ) : (
              <h3 className="txt-yl fs-24">
                <span className="fw-7">diseño tipográfico</span>
                <span>
                  para el fanzine de fotografía documental de @
                  <span className="link-to">jaragarciaazor</span>
                </span>
              </h3>
            )}
            <p className="mu-1 fs-1">
              {hoveredImage[locale]?.description || hoveredImage?.description}
            </p>
          </div>
          <p className="txt-og">{hoveredImage.year}</p>
        </>
      );
    case 7:
      return <div></div>;
    case 8:
      return <div></div>;
  }
};

export default function Work() {
  const [isHovering, setIsHovered] = useState(0);

  const router = useRouter();
  const locale = useLocale();

  const renderByHovered = (id: number) => {
    const hoveredImage = images.find((image) => image.id === id);
    if (!hoveredImage) return null;

    return (
      <div
        className={`${styles.hoverContainer} ${
          id === 4 || id === 7 ? styles.revertTransform : ""
        } flex`}
      >
        {renderContentById(id, hoveredImage, locale)}
      </div>
    );
  };

  return (
    <section className={`${styles.workSection} p-h`}>
      {images.map((image, index) => (
        <div
          key={index}
          onMouseEnter={() => setIsHovered(image.id)}
          onMouseLeave={() => setIsHovered(0)}
          id={"" + (index + 1)}
          //@ts-ignore
          onClick={() =>
            image?.path && router.push(`/${locale}/portfolio/${image?.path}`)
          }
          className={`${styles.imageContainer} ${space_mono.className} image${
            index + 1
          }`}
          tabIndex={0}
          role="button"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (image?.path)
                router.push(`/${locale}/portfolio/${image?.path}`);
            }
          }}
        >
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt || "Image"}
            quality={100}
            priority={true}
            className={`${isHovering === image.id ? styles.hoverOpacity : ""}`}
          />
          {isHovering === image.id && renderByHovered(image.id)}
        </div>
      ))}
    </section>
  );
}
