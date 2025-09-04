console.log("Hello, Worldddddd!");
// alert("Hello, World!");

var Myname = "nada";
console.log(Myname);

// alert("hello " + Myname);

// var age = prompt("enter your age");
// console.log(age);

// var fName = prompt("enter your first name");
// alert("hello " + fName);

let num1 = 10;
let num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num2 % num1);
console.log(num2 > num1);
console.log(num2 < num1);
console.log(num2 == num1);
console.log(num2 === num1);

console.log(num1 > num2 && num2 != num1);
console.log(num1 < num2 || num2 != num1);
console.log(!(num1 > num2));

// if (num2 ) {
//   console.log("num1 is greater than num2");
// }

if (num1 > num2) {
  console.log(num1 + " is greater than " + num2);
} else if (num1 < num2) {
  console.log(num1 + " is less than " + num2);
} else {
  console.log(num1 + " is equal to " + num2);
}

for (let i = 0; i < 4; i++) {
  console.log("hello " + i);
}

var counter = 8;
while (counter < 5) {
  console.log("hi " + counter);
  counter++;
}

// ################
// var count = prompt("enter a number  ");
// do {
//   console.log("do while " + count);
//   count++;
// } while (count < 5);

// ########
var i = 0;
function hii() {
  console.log(i);
  i++;
  console.log("hello from function");
  console.log("hello from nada");
  console.log("hello from mahmed");
  console.log("hello from noha");
  alert("hello from function" + i);
  alert("hello from function" + i);
}
