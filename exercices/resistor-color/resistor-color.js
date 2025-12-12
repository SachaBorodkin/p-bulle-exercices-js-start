/**
 *
 *
 * @param {string} color
 * @returns {number}
 */
export const colorCode = (color) => {
  const key = color.toLowerCase();
  return COLORS.indexOf(key) ?? null;
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