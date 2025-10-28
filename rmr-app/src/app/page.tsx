import { MasonryGrid } from "@/_components/masony-grid";
import { GridItem, parseGridPosition } from "@/_lib/grid-config";
import { images } from "@/_lib/images";

// Transform your existing images data to use the new grid system
const gridItems: GridItem[] = [
  {
    ...images[0],
    position: parseGridPosition("1.3"), // First row, third column
  },
  {
    ...images[1],
    position: parseGridPosition("1.4"), // First row, fourth column (last)
  },
  {
    ...images[2],
    position: parseGridPosition("2.4"), // Second row, second column
  },
  {
    ...images[3],
    position: parseGridPosition("2.3:3.4"), // Spans rows 2-3, columns 3-4
  },
  {
    ...images[4],
    position: parseGridPosition("3.1:3.4"), // Third row, spans columns 1-4
  },
  {
    ...images[5],
    position: parseGridPosition("3.1"), // Third row, first column
  },
  {
    ...images[6],
    position: parseGridPosition("2.1"), // Second row, first column
  },
  {
    ...images[7],
    position: parseGridPosition("4.2"), // First row, second column
  },
  {
    id: 101,
    src: "",
    width: 400,
    height: 300,
    alt: "Placeholder 1",
    title: "Placeholder 1",
    position: parseGridPosition("4.1"), // Row 4, column 1
  },
  {
    id: 102,
    src: "",
    width: 400,
    height: 300,
    alt: "Placeholder 2",
    title: "Placeholder 2",
    position: parseGridPosition("4.2:4.3"), // Row 4, spans columns 2-3
  },
  {
    id: 103,
    src: "",
    width: 400,
    height: 300,
    alt: "Placeholder 3",
    title: "Placeholder 3",
    position: parseGridPosition("4.4"), // Row 4, column 4
  },
  {
    id: 104,
    src: "",
    width: 400,
    height: 300,
    alt: "Placeholder 4",
    title: "Placeholder 4",
    position: parseGridPosition("5.1:6.2"), // Spans rows 5-6, columns 1-2
  },
  {
    id: 105,
    src: "",
    width: 400,
    height: 300,
    alt: "Placeholder 5",
    title: "Placeholder 5",
    position: parseGridPosition("5.3"), // Row 5, column 3
  },
  {
    id: 106,
    src: "",
    width: 400,
    height: 300,
    alt: "Placeholder 6",
    title: "Placeholder 6",
    position: parseGridPosition("5.4"), // Row 5, column 4
  },
  {
    id: 107,
    src: "",
    width: 400,
    height: 300,
    alt: "Placeholder 7",
    title: "Placeholder 7",
    position: parseGridPosition("6.3:6.4"), // Row 6, spans columns 3-4
  },
  {
    id: 108,
    src: "",
    width: 400,
    height: 300,
    alt: "Placeholder 8",
    title: "Placeholder 8",
    position: parseGridPosition("7.1"), // Row 7, column 1
  },
  {
    id: 109,
    src: "",
    width: 400,
    height: 300,
    alt: "Placeholder 9",
    title: "Placeholder 9",
    position: parseGridPosition("7.2"), // Row 7, column 2
  },
  {
    id: 110,
    src: "",
    width: 400,
    height: 300,
    alt: "Placeholder 10",
    title: "Placeholder 10",
    position: parseGridPosition("7.3"), // Row 7, column 3
  },
  {
    id: 111,
    src: "",
    width: 400,
    height: 300,
    alt: "Placeholder 11",
    title: "Placeholder 11",
    position: parseGridPosition("7.4"), // Row 7, column 4
  },
  {
    id: 112,
    src: "",
    width: 400,
    height: 300,
    alt: "Placeholder 12",
    title: "Placeholder 12",
    position: parseGridPosition("8.1:8.2"), // Row 8, spans columns 1-2
  },
  {
    id: 113,
    src: "",
    width: 400,
    height: 300,
    alt: "Placeholder 13",
    title: "Placeholder 13",
    position: parseGridPosition("8.3:9.4"), // Spans rows 8-9, columns 3-4
  },
];

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <MasonryGrid items={gridItems} columns={4} gap={30} />
    </main>
  );
}
