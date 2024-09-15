function permutations(string) {
  return string.length <= 1
    ? [string]
    : Array.from(
        new Set(
          string
            .split("")
            .map((char, i) =>
              permutations(string.substr(0, i) + string.substr(i + 1)).map(
                (p) => char + p
              )
            )
            .flat()
        )
      );
}
console.log(permutations("abc"));

//2 variant

// function permutations(str) {
//   return str.length <= 1
//     ? [str]
//     : Array.from(
//         new Set(
//           str
//             .split("")
//             .map((char, i) =>
//               permutations(str.substr(0, i) + str.substr(i + 1)).map(
//                 (p) => char + p
//               )
//             )
//             .reduce((r, x) => r.concat(x), [])
//         )
//       );
// }
// console.log(permutations("abc"));

//3 variant

// function permutations(string) {
//   const result = [];

//   const getPermutation = (current, remaining) => {
//     console.log("rem --", remaining);
//     console.log("cur --", current);

//     if (!remaining.length) {
//       result.push(current);
//       console.log("res --", result);
//     } else {
//       for (let i = 0; i < remaining.length; i++) {
//         const nextChar = remaining[i]; //a
//         const newCurrent = current + nextChar; //a
//         const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
//         console.log("newRem --", newRemaining);
//         getPermutation(newCurrent, newRemaining);
//       }
//     }
//   };
//   getPermutation("", string);
//   return [...new Set(result)];
// }
// console.log(permutations("abc"));
