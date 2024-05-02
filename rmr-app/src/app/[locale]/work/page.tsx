"use client";
import Image from "next/image";
import styles from "./work.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { images } from "./constants";

export default function Work() {
  const [isHovering, setIsHovered] = useState(0);

  const router = useRouter();
  const locale = useLocale();

  const renderByHovered = (id: number) => {
    const hoveredImage = images.find((image) => image.id === id);
    if (!hoveredImage) return null;
    return <div className={styles.hoverContainer}>{hoveredImage.alt}</div>;
  };

  return (
    <section className={styles.workSection}>
      {images.map((image, index) => (
        <div
          key={index}
          onMouseEnter={() => setIsHovered(image.id)}
          onMouseLeave={() => setIsHovered(0)}
          className={`${styles.imageContainer} image${index + 1}`}
          onClick={() =>
            image?.path && router.push(`/${locale}/work/${image?.path}`)
          }
        >
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
          />
          {isHovering === image.id && renderByHovered(image.id)}
        </div>
      ))}
    </section>
  );
}
