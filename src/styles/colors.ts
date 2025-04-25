export const INDIGO = "#192c56";
export const MAGENTA = "#ce0b74";
export const GRAY1 = "#f1f1f6";
export const GRAY2 = "#d8d8d9";
export const GRAY3 = "#a4a3b1";
export const GRAY4 = "#666666";
export const WHITE = "#ffffff";
export const BLACK = "#000000";

const ColorArray = ["indigo", "magenta", "gray1", "gray2", "gray3", "gray4", "white", "black"] as const;

export type Color = (typeof ColorArray)[number];

export const getColor = (color?: Color) => {
  switch (color) {
    case "indigo":
      return INDIGO;
    case "magenta":
      return MAGENTA;
    case "gray1":
      return GRAY1;
    case "gray2":
      return GRAY2;
    case "gray3":
      return GRAY3;
    case "gray4":
      return GRAY4;
    case "black":
    default:
      return BLACK;
    case "white":
      return WHITE;
  }
};
