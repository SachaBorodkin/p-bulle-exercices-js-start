//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const ORBITAL_PERIODS = {
  earth: 1.0,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

const EARTH_YEAR_SECONDS = 31557600;

export const age = (planet, seconds) => {
  const factor = ORBITAL_PERIODS[planet];

  if (!factor) {
    throw new Error('not a planet');
  }
  const ageInEarthYears = seconds / EARTH_YEAR_SECONDS;
  const ageOnPlanet = ageInEarthYears / factor;

  return parseFloat(ageOnPlanet.toFixed(2));
};
