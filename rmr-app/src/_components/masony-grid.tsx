"use client";

import Image from "next/image";
import { type GridItem, gridPositionToStyle } from "@/_lib/grid-config";
import cn from "classnames";
import { useParallax } from "@/_lib/use-parallax";
import ReactPlayer from "react-player";

function GridItemWithParallax({
  item,
  parallaxSpeed = 0.6,
  id,
}: {
  item: GridItem;
  parallaxSpeed?: number;
  id?: number;
}) {
  const itemSpeed = parallaxSpeed + (Math.random() * 0.4 - 0.2);
  const { ref } = useParallax({ speed: itemSpeed, direction: "up" });

  const isGif = item.src?.toLowerCase().endsWith(".gif");

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl isolate bg-neutral-900 cell-inner flex flex-col items-center text-center"
      id={item?.hash}
      style={{
        ...(item.position ? { ...gridPositionToStyle(item.position) } : {}),
        height: "100%",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        data-parallax-inner
        id={item?.hash}
        className="absolute inset-x-0 -top-[15%] h-[130%] w-full transition-transform duration-700 ease-out group-hover:scale-110 will-change-transform"
      >
        {item.src ? (
          <div className="flex flex-col justify-center items-center text-center">
            {item.id === 8 ? (
              <ReactPlayer
                url={
                  "https://player.vimeo.com/video/906343213?badge=0&amp;player_id=0&amp;app_id=58479"
                }
                width="100%"
                height={480}
                playing={true}
                playIcon={
                  <Image
                    src="/mdi_play-outline.svg"
                    alt="video play"
                    width={84}
                    height={84}
                    quality={100}
                  />
                }
                controls
                light={item.src}
              />
            ) : item.id === 22 ? (
              <div className="flex gap-4 olvides">
                <Image
                  src={item.src}
                  alt={item.alt || item.title || "Project Image"}
                  width={item.width}
                  height={item.height}
                  style={{ maxHeight: item.id > 17 ? "500px" : "" }}
                  id={item.id.toString()}
                  unoptimized={isGif}
                  priority={
                    !!(item?.position?.rowStart && item.position.rowStart < 3)
                  }
                />
                <Image
                  src="/no-olvides-s.jpg"
                  alt={item.alt || item.title || "Project Image"}
                  width={item.width}
                  height={item.height}
                  style={{ maxHeight: item.id > 17 ? "500px" : "" }}
                  id={item.id.toString()}
                  priority={
                    !!(item?.position?.rowStart && item.position.rowStart < 3)
                  }
                />
              </div>
            ) : (
              <Image
                src={item.src}
                alt={item.alt || item.title || "Project Image"}
                width={item.width}
                height={item.height}
                style={{ maxHeight: item.id > 17 ? "500px" : "" }}
                id={item.id.toString()}
                unoptimized={isGif}
                priority={
                  !!(item?.position?.rowStart && item.position.rowStart < 3)
                }
              />
            )}

            {item?.title && (
              <div
                style={
                  item?.position && {
                    width: `${item.width}px`,
                    height: `${item.height}px`,
                  }
                }
                className="inner-item"
              >
                {item.title}
              </div>
            )}

            {item.description && (
              <div className={item.id > 1 ? "description editorial" : ""}>
                <h3 className="image-text">
                  {!!item?.italicTitle ? (
                    <span className="italic">{item.italicTitle}</span>
                  ) : (
                    ""
                  )}
                  {item.description}
                </h3>
              </div>
            )}
            {item.id === 7 && (
              <div>
                <Image
                  src="/garden_ai.png"
                  alt={item.alt}
                  width={item.width}
                  height={340}
                  id={item.id.toString()}
                  priority={
                    !!(item?.position?.rowStart && item.position.rowStart < 3)
                  }
                />
              </div>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export function MasonryGrid({
  items,
  columns = 4,
  gap = 24,
  className,
  parallaxSpeed = 0.5,
}: any) {
  return (
    <div
      className={cn("grid w-full", className)}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(20rem,1fr))`,
        gridAutoRows: "15.625rem",
        gap: `${gap}rem`,
      }}
    >
      {items.map((item: any) => (
        <GridItemWithParallax
          key={item.id}
          item={item}
          id={item.id}
          parallaxSpeed={parallaxSpeed}
        />
      ))}
    </div>
  );
}
