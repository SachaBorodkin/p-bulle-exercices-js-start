/**
 *
 *
 * @param {string} color
 * @returns {number}
 */
export const colorCode = (color) => {
  const key = color.toLowerCase();
  return COLOR_TABLE[key] ?? null;
};
export const COLOR_TABLE = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
