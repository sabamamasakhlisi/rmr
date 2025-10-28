import Image from "next/image";
import { type GridItem, gridPositionToStyle } from "@/_lib/grid-config";

interface MasonryGridProps {
  items: GridItem[];
  columns?: number;
  rows?: number | string;
  gap?: number;
  className?: string;
}

export function MasonryGrid({
  items,
  columns = 4,
  rows = "auto",
  gap = 30,
}: MasonryGridProps) {
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows:
          typeof rows === "number" ? `repeat(${rows}, 1fr)` : "auto",
        gridAutoRows: "minmax(200px, auto)",
        gap: `${gap}px`,
      }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="relative overflow-hidden"
          style={gridPositionToStyle(item.position)}
        >
          <Image
            src={item.src || "/placeholder.svg"}
            alt={item.alt}
            width={item.width}
            height={item.height}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
