// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  return "NCC-" + Math.floor(Math.random() * (9999 - 1000) + 1) + 1000; /* random fait un float entre 1 et zéro,
   (9999 - 1000 (-1000 par ce que ça permet de ne pais faire un nombre plus grand que max)) 
    max(non compris) +1 - pour faire y compris + 1000 - min y compris et .floor pour convertir en int
    //Honnêtement, notation de Math.random -1/10 */
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return Math.random() * (42000 - 41000) + 41000; // similaire mais pour faire non compris et ne pas convertir en int
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
