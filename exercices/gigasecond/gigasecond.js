// @ts-check
/**
 * 
 *
 * @param {Date} startDate 
 * @returns {Date}
 */

export const gigasecond = (startDate) => {
const GIGASECOND_SECONDS = 1000000000;
const GIGASECOND_MILISEONDS = GIGASECOND_SECONDS * 1000;
let startTimeMS = startDate.getTime();
let resultTineMS = startTimeMS + GIGASECOND_MILISEONDS
return new Date(resultTineMS);
};
