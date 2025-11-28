/**
 * 
 *
 * @param {string} name 
 * @returns {string} 
 */

export const twoFer = (name) => {
  let phrase = "";
if (!name){
  phrase = "One for you, one for me.";
}
else{
  phrase = "One for " + name + ", one for me.";
}
return phrase;
};
