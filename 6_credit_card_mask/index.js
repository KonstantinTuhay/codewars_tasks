// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

function maskify(cc) {
  return (
    cc
      .slice(0, -4)
      .split("")
      .map((item) => item.replaceAll(item, "#"))
      .join("") + cc.slice(-4)
  );
}

console.log(maskify("Nananananananananananananananana Batman!"));
console.log(maskify("Skippy"));
console.log(maskify(""));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify("4556364607935616"));

// 2 solution
function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, "#");
}
console.log(maskify("4556364607935616"));
