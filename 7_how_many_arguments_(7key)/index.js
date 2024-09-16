// Write a function that returns the number of arguments it received.

// args_count() --> 0
// args_count('a') --> 1
// args_count('a', 'b') --> 2

// Create a function called args_count that returns the number of arguments provided
// function args_count() {
//   return arguments.length;
// }
// console.log(args_count());
// console.log(args_count("a"));
// console.log(args_count("a", "b"));

////////////////////////////////////////////////////////////////////////////////////
// function nbYear(p0, percent, aug, p) {
//   let str = p0;
//   let i = 0;
//   while (str < p) {
//     str += Math.trunc((str * percent) / 100 + aug);
//     i++;
//   }
//   return i;
// }
// console.log(nbYear(1000, 2, 50, 1200)); //3
// console.log(nbYear(1500, 5, 100, 5000)); //15
// console.log(nbYear(1500000, 2.5, 10000, 2000000)); //10

// console.log(1500 + (1500 * 5) / 100 + 100);
////////////////////////////////////////////////////////////////////////////////////
// function isLeapYear(year) {
//   return year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0);
// }
// console.log(isLeapYear(2000));
// console.log(isLeapYear(2020));

////////////////////////////////////////////////////////////////////////////////////

// function sumStrings(a, b) {
//   return `${(+a + +b).toFixed(2)}`;
// }
// console.log(
//   sumStrings("712569312664357328695151392", "8100824045303269669937")
// );

function sumStrings(a, b) {
  let arr = [a, b];
  let ost = 0;
  Number(arr[0]) > Number(arr[1]) ? (arr = [a, b]) : (arr = [b, a]);
  arr = arr.map((elem) => {
    let newElem = elem.split("").reverse();
    newElem.push(0);
    return newElem;
  });
  let resalt = arr[0]
    .map((elem, n) => {
      let elem2 = arr[1][n];
      elem2 == undefined ? (elem2 = 0) : elem2;
      let summ = Number(elem) + Number(elem2) + Number(ost);
      if (summ >= 10) {
        ost = summ.toString()[0];
        return summ.toString()[1];
      } else {
        ost = 0;
        return summ.toString();
      }
    })
    .reverse();
  let flag = true;
  resalt = resalt.reduce((summ, elem) => {
    if (elem != "0") {
      flag = false;
    }
    return elem == "0" && flag ? summ : (summ += elem);
  }, "");
  return resalt;
}
console.log(
  sumStrings("712569312664357328695151392", "8100824045303269669937")
);
