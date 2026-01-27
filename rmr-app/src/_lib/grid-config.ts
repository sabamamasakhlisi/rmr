import type React from "react";
// Generic grid configuration types
export interface GridPosition {
  // Starting row (1-based)
  rowStart: number;
  // Ending row (1-based, exclusive)
  rowEnd?: number;
  // Starting column (1-based)
  colStart: number;
  // Ending column (1-based, exclusive)
  colEnd?: number;
}

export interface GridItem {
  id: number;
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  position?: GridPosition;
  [key: string]: any; // Allow additional properties
}

/**
 * Helper function to convert simple notation to grid position
 * Examples:
 * - "1.3" -> row 1, column 3 (single cell)
 * - "2.2-2.4" -> row 2, columns 2-4 (span 3 columns)
 * - "2.3:3.4" -> rows 2-3, columns 3-4 (span 2x2 cells)
 */
export function parseGridPosition(notation: string): GridPosition {
  // Handle span notation (e.g., "2.3:3.4" means from row 2 col 3 to row 3 col 4)
  if (notation.includes(":")) {
    const [start, end] = notation.split(":");
    const [rowStart, colStart] = start.split(".").map(Number);
    const [rowEnd, colEnd] = end.split(".").map(Number);
    return {
      rowStart,
      rowEnd: rowEnd + 1, // CSS Grid uses exclusive end
      colStart,
      colEnd: colEnd + 1,
    };
  }

  // Handle range notation (e.g., "2.2-2.4" means row 2, columns 2 to 4)
  if (notation.includes("-")) {
    const [start, end] = notation.split("-");
    const [rowStart, colStart] = start.split(".").map(Number);
    const [, colEnd] = end.split(".").map(Number);
    return {
      rowStart,
      colStart,
      colEnd: colEnd + 1,
    };
  }

  // Simple notation (e.g., "1.3" means row 1, column 3)
  const [rowStart, colStart] = notation.split(".").map(Number);
  return { rowStart, colStart };
}

/**
 * Convert GridPosition to CSS Grid properties
 */
export function gridPositionToStyle(
  position: GridPosition,
): React.CSSProperties {
  return {
    gridRowStart: position.rowStart,
    gridRowEnd: position.rowEnd,
    gridColumnStart: position.colStart,
    gridColumnEnd: position.colEnd,
  };
}
