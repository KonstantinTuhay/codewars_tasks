// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
  let res = str
    .split(" ")
    .map((item) => (item ? item[0].toUpperCase() + item.slice(1) : item))
    .join("");
  return !str.trim() || str === "" || res.length >= 140 ? false : "#" + res;
}

console.log(generateHashtag("#")); ////##
console.log(generateHashtag("")); //false
console.log(generateHashtag(" Hello there thanks for trying my Kata"));
console.log(generateHashtag("    Hello     World   "));
console.log(generateHashtag("#")); //##
console.log(generateHashtag("")); //false

//решение какого-то индусятины

// function generateHashtag(str) {
//   if (!str.trim()) return false;

//   const capitalize = str
//     .replace(/\s+/g, " ")
//     .trim()
//     .split(" ")
//     .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`);

//   const result = ["#", ...capitalize].join("");
//   return result.length > 140 ? false : result;
// }
// console.log(generateHashtag("#")); ////##
// console.log(generateHashtag("")); //false
// console.log(generateHashtag(" Hello there thanks for trying my Kata"));
// console.log(generateHashtag("    Hello     World   "));
// console.log(generateHashtag("#")); //##
// console.log(generateHashtag("")); //false
