"use client";
import { MasonryGrid } from "@/_components/masony-grid";
import { GridItem, parseGridPosition } from "@/_lib/grid-config";
import { images } from "@/_lib/images";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Transform your existing images data to use the new grid system
const gridItems: GridItem[] = [
  {
    ...images[0],
    position: parseGridPosition("1.3"), // First row, third column
  },
  {
    ...images[1],
    position: parseGridPosition("1.4"), // First row, fourth column
  },
  {
    ...images[2],
    position: parseGridPosition("2.2"), // First row, fourth column
  },
  {
    ...images[3],
    position: parseGridPosition("2.1:3.1"), // First row, fourth column
  },
  {
    ...images[4],
    position: parseGridPosition("2.3:3.4"), // First row, fourth column
  },
  {
    ...images[5],
    position: parseGridPosition("3.2:4.2"), // First row, fourth column
  },
  {
    ...images[6],
    position: parseGridPosition("4.3:6.4"), // First row, fourth column
  },
  {
    ...images[7],
    position: parseGridPosition("5.1:6.2"), // First row, fourth column
  },
  {
    ...images[8],
    position: parseGridPosition("7.3"), // First row, fourth column
  },
  {
    ...images[9],
    position: parseGridPosition("7.4"), // First row, fourth column
  },
  {
    ...images[10],
    position: parseGridPosition("8.2:11.3"), // First row, fourth column
  },
  {
    ...images[11],
    position: parseGridPosition("9.1:10.1"), // First row, fourth column
  },
  {
    ...images[12],
    position: parseGridPosition("10.4:11.4"), // First row, fourth column
  },
  {
    ...images[13],
    position: parseGridPosition("12.1:17.1"), // First row, fourth column
  },
  {
    ...images[14],
    position: parseGridPosition("12.2"), // First row, fourth column
  },
  {
    ...images[15],
    position: parseGridPosition("13.2"), // First row, fourth column
  },
  {
    ...images[16],
    position: parseGridPosition("12.3:14.4"), // First row, fourth column
  },
  {
    ...images[17],
    position: parseGridPosition("15.2:16.3"), // First row, fourth column
  },
  {
    ...images[18],
    position: parseGridPosition("15.4:16.4"), // First row, fourth column
  },
  {
    ...images[19],
    position: parseGridPosition("17.2:18.2"), // First row, fourth column
  },
  {
    ...images[20],
    position: parseGridPosition("19.2"), // First row, fourth column
  },
  {
    ...images[21],
    position: parseGridPosition("18.3:18.4"), // First row, fourth column
  },
  {
    ...images[22],
    position: parseGridPosition("19.3:20.4"), // First row, fourth column
  },
];

export default function Home() {
  const [hasScrolledPastLast, setHasScrolledPastLast] = useState(false);
  const lastItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Target the last item's ID or use a ref if MasonryGrid supports it
    const lastItemId = gridItems[gridItems.length - 1].id.toString();
    const target = document.getElementById(lastItemId);

    if (!target) return;

    // 2. Intersection Observer detects when the item leaves the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        // entry.isIntersecting is true if any part of the item is visible
        // We want the arrow when the item is NOT intersecting and is above the view

        console.log(entry.isIntersecting, "entry.isIntersecting");

        setHasScrolledPastLast(entry.isIntersecting);
      },
      { threshold: 0 }, // Trigger as soon as the first/last pixel enters/leaves
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen main-content relative pt-[80px] pb-[80px] pl-[50px] pr-[50px]">
      <MasonryGrid
        items={gridItems}
        columns={4}
        gap={1.875}
        parallaxSpeed={0.6}
      />

      {hasScrolledPastLast && (
        <div className="pb-20 flex justify-center items-center">
          <button
            className="mt-8 pb-8 cursor-pointer text-[24px] left-1/2  z-50 w-12 h-12"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Image
              src="/arrow-up.svg"
              alt="Scroll to top"
              width={50}
              height={50}
            />
          </button>
        </div>
      )}
    </main>
  );
}
