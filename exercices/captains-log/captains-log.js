// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  return "NCC-" + Math.floor(Math.random() * (9999 - 1000) + 1) + 1000; //Honnêtement, notation de Math.random -1/10
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return Math.random() * (42000 - 41000) + 41000;
}

/**
 * Generates a random planet class.
 *D, H, J, K, L, M, N, R, T, and Y.
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  let list = ["D", "H", "J", "K", "L", "M", "N", "R", "T", "Y"];
  return list[Math.floor(Math.random() * list.length)];
}
