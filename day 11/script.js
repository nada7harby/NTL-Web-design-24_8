// JS: Prompt user for input and store in variable a
var a = prompt("Enter your number1");

// JS: Prompt user for input and store in variable b
var b = prompt("Enter your number2");

// JS: Function declaration with default parameter (ES6 feature)
function sum(x, y = 1) {
  // JS: Display alert with sum of x and y
  alert(x + y);
}

// JS: Call sum function with converted numbers (unary plus operator)
sum(+a, +b); // 30

// ES6: Declare variable with let (block scope)
let x = prompt("Enter first number");

// JS: Function with default parameter (ES6 feature)
function sayHi(a = "user") {
  // JS: Display greeting alert
  alert("Hi " + a);
}

// JS: Function declaration
function sayhello(y) {
  // JS: Display greeting alert
  alert("Hello  " + y);
}

// JS: Function declaration
function welcome(z) {
  // JS: Display welcome alert
  alert("welcome " + z);
}

// JS: Call function with default parameter
sayHi();

// JS: Call function with variable x
sayhello(x);

// JS: Call function with variable x
welcome(x);

// JS: Call function with string argument
sayHi("John");

// JS: Call function with string argument
sayhello("Alice");

// JS: Call function with string argument
welcome("Bob");

// JS: Call sum function with numeric arguments
sum(3, 5); //8

// JS: Function declaration with return value
function calctax(price, tax) {
  // JS: Calculate total price after tax
  var total = price - (price * tax) / 100;
  // JS: Return calculated value
  return total;
}

// JS: Call function and store result
var finalPrice = calctax(100, 10);

// JS: Log result to console
console.log(finalPrice); //90

// JS: Display result in alert
alert(finalPrice);

// ES6: Arrow function with default parameters (ES6 features)
var m = (x = 1, y = 8) => console.log(x + y);

// JS: Call arrow function
m(5, 10);

// JS: Array declaration
var arr1 = [1, 2, 3, 8, 8, 9, 7, 8];

// JS: Variable declaration and assignment
var item = 18;

// JS: Log entire array to console
console.log(arr1);

// JS: Access and log specific array element
console.log(arr1[4]);

// JS: Log array length
console.log(arr1.length);

// JS: Modify array element
arr1[4] = 5;
console.log(arr1);

// JS: Add elements to end of array
arr1.push(10, 11);
console.log(arr1);

// JS: Add element to beginning of array
arr1.unshift(item);
console.log(arr1);

// JS: Remove and store last element of array
var removeItem = arr1.pop();
console.log(arr1);
console.log("removed item is " + removeItem);

// JS: Remove and store first element of array
var removeFirst = arr1.shift();
console.log(arr1);
console.log("removed first item is " + removeFirst);

// JS: Create new array from slice of original array
var arr2 = arr1.slice(3, 7);
console.log(arr2);
console.log(arr1);

// JS: Remove elements from array using splice
var arr3 = arr1.splice(2, 1);
console.log(arr3);
console.log(arr1);

// ES6: For loop with let variable (ES6 block scope)
for (let i = 0; i < arr1.length; i++) {
  // JS: Log each array element
  console.log(arr1[i]);
}

// ES6: Array forEach method with arrow function
arr1.forEach((x) => console.log(x + 2));

// JS: Log array to console
console.log(arr1);

// ES6: Array map method with arrow function
var arr4 = arr1.map((i) => i * 2);
console.log(arr4);

// JS: Log original array
console.log(arr1);

// JS: Access and log first element of new array
console.log(arr4[0]);

// JS: Number literal (comment appears to be misplaced)
0;

// ES6: Array filter method with arrow function
var arr5 = arr1.filter((e) => e > 8);
console.log(arr5);
console.log(arr1);

// ES6: Array find method with arrow function
var item = arr1.find((d) => d > 8);
console.log(item);

// JS: Check if array includes specific value
console.log(arr1.includes(8));

// JS: Find index of specific value in array
console.log(arr1.indexOf(9));
