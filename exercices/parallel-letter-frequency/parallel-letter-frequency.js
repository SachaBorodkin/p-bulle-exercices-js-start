//
// This is only a SKELETON file for the 'Parallel Letter Frequency' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parallelLetterFrequency = async (texts) => {
 const frequencies = {};
  
  const items = Array.isArray(texts) ? texts : [texts];

  items.forEach(str => {

    const letters = str.toLowerCase().match(/[a-z]/g);

    if (letters) {
      letters.forEach(char => {
        frequencies[char] = (frequencies[char] || 0) + 1;
      });
    }
  });

  return frequencies;

};