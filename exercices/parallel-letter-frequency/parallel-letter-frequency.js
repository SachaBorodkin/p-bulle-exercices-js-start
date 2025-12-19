//
// This is only a SKELETON file for the 'Parallel Letter Frequency' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parallelLetterFrequency = async (texts) => {
 const frequencies = {};
  
  // Convert input to a single array if it's just a string
  const items = Array.isArray(input) ? input : [input];

  items.forEach(str => {
    // Normalize to lowercase and find all characters between a-z
    const letters = str.toLowerCase().match(/[a-z]/g);

    if (letters) {
      letters.forEach(char => {
        frequencies[char] = (frequencies[char] || 0) + 1;
      });
    }
  });

  return frequencies;

};