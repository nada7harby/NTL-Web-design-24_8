// JS: Object literal declaration
var obj = {
  // JS: Property with key "name" and string value
  name: "Nada", //key:"value"
  // JS: Property with key "age" and numeric value
  age: 30,
  // JS: Property with key "city" and string value
  city: "New York",
  // JS: Property with multi-word key (requires quotes)
  "first name": "ALllllllllll",
};

// JS: Another object literal declaration
var obj2 = {
  // JS: Property with key "name" and string value
  name: "Mohamed", //key:"value"
  // JS: Property with key "age" and numeric value
  age: 22,
  // JS: Property with key "city" and string value
  city: "Cairo",
};

// JS: Object creation using Object constructor
var obj3 = new Object();

// JS: Log entire object to console
console.log(obj);

// JS: Access object property using dot notation
console.log(obj.name);

// JS: Access object property using dot notation
console.log(obj.age);

// JS: Access property of second object
console.log(obj2.name);

// JS: Modify object property
obj.name = "Noha";

// JS: Modify object property
obj.age = 23;
console.log(obj);

// JS: Add new property to object
obj.country = "USA";
console.log(obj);

// JS: Add properties to object created with constructor
obj3.name = "Ali";
obj3.age = 25;
obj3.city = "Alex";
console.log(obj3);

// JS: Modify property of third object
obj3.name = "Salma";
console.log(obj3);

// JS: Access object property using bracket notation
console.log(obj["name"]);

// JS: Access object property using dot notation
console.log(obj.name);

// JS: Access multi-word property using bracket notation (required)
console.log(obj["first name"]); //error

// JS: Delete property from object
delete obj2.age;

// JS: Delete property from object
delete obj2.name;
console.log(obj2);

// JS: Initialize empty string variable
var y = "";

// JS: For-in loop to iterate through object properties
for (var a in obj) {
  // JS: Log property key
  console.log(a); //keys
  // JS: Log formatted string with key and value
  console.log("the value of " + a + " is " + obj[a]);

  // JS: Build string with object properties and values
  y += a + "  is " + obj[a] + "\n ";
}
console.log(y);

console.log("=======================");

// ES6: For-in loop with let variable (ES6 block scope)
for (let x in obj3) {
  // JS: Access and log property value using bracket notation
  console.log(obj3[x]);
}

// JS: Object with nested arrays and objects
var obj4 = {
  // JS: String property
  name: "Ameer",
  // JS: Number property
  age: 40,
  // JS: String property
  city: "Giza",
  // JS: Array property
  hobbies: ["swimming", "running", "reading"],
  // JS: Nested object property
  father: { name: "Ali", age: 70 },
  // JS: Nested object property
  mother: { name: "Sara", age: 65 },
};
console.log(obj4);

// JS: Access array property
console.log(obj4.hobbies);

// JS: Access specific element in array property
console.log(obj4.hobbies[2]);

// JS: Access nested object property
console.log(obj4.father.name);

// JS: Access nested object property
console.log(obj4.mother.age);

// JS: Reference to object (no operation)
obj4;

// JS: Array of objects with nested objects
var arr = [
  // JS: Object with nested object
  { name: "Ameer", age: 40, city: "Giza", father: { name: "Ali", age: 70 } },
  // JS: Object with nested object
  { name: "Ali", age: 30, city: "Cairo", father: { name: "Ahmed", age: 70 } },
];

// ES6: Array forEach method with arrow function
arr.forEach((ele) => {
  // JS: Access nested property of each object
  console.log(ele.father.name);
});

console.log("=====================================");

// JS: String variable declaration
var fname = "Ali";

// JS: String literal declaration
var str1 = "NAda Harby Motawea";

// JS: String literal declaration
var str2 = "Ali Ahmed";

// ES6: Template literal with variable interpolation (ES6 feature)
var str3 = `Ali ${fname} Ahmed`;
console.log(str3);

// JS: Convert variable to string (redundant since it's already a string)
console.log(fname.toString());

// JS: Get length of string
console.log(str1.length);

// JS: Access specific character in string
console.log(str1[4]);

// JS: Convert string to lowercase
console.log(str1.toLowerCase());

// JS: Convert string to uppercase
console.log(str1.toUpperCase());

// JS: Prompt with fallback value (commented out)
// var string = prompt("enter your name")||"";
// console.log(string);
// console.log(string.trim());

// JS: Check if string contains substring (case insensitive)
console.log(str1.toLowerCase().includes("h"));

// JS: Check if string contains substring (case insensitive)
console.log(str1.toUpperCase().includes("H"));

// JS: Find first index of character in string
console.log(str1.indexOf("a"));

// JS: Find last index of character in string
console.log(str1.lastIndexOf("M"));

// JS: Check if string ends with specific character
console.log(str1.endsWith("M"));

// JS: Extract substring using slice (negative index counts from end)
var str4 = str1.slice(5, -1);

// JS: Extract substring using substring
var str5 = str1.substring(10, 5);

// JS: Extract substring using substr (deprecated)
var str6 = str1.substr(3, 5);
console.log(str4);
console.log(str5);
console.log(str6);

// JS: Replace first occurrence of character (case insensitive)
console.log(str1.toLowerCase().replace("a", "5"));

// JS: Replace all occurrences of character
console.log(str1.replaceAll("a", "5"));

// JS: Split string into array using space as delimiter
var arrString = str1.split(" ");
console.log(arrString);

// JS: Array of strings
var arr2 = ["nada", "ali", "mohamed", "sara"];

// JS: Join array elements into string with custom separator
console.log(arr2.join(" % "));

// JS: String concatenation using + operator
console.log("welocme  " + fname);

// ES6: Template literal with variable interpolation (ES6 feature)
var str55 = `welocme  ${fname} to js `;
console.log(str55);

// JS: String concatenation using concat method
var str66 = str1.concat(" ", fname);
console.log(str66);

console.log("==============================================");
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 999.99,
    category: "Electronics",
    stock: 15,
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699.99,
    category: "Electronics",
    stock: 30,
  },
  {
    id: 3,
    name: "Headphones",
    price: 149.99,
    category: "Electronics",
    stock: 50,
  },
  {
    id: 4,
    name: "Desk Chair",
    price: 199.99,
    category: "Furniture",
    stock: 10,
  },
  {
    id: 5,
    name: "Coffee Mug",
    price: 9.99,
    category: "Kitchen",
    stock: 100,
  },
];

const employees = [
  {
    id: 101,
    name: "John Doe",
    department: "IT",
    salary: 75000,
    skills: ["JavaScript", "Python", "SQL"],
  },
  {
    id: 102,
    name: "Jane Smith",
    department: "HR",
    salary: 65000,
    skills: ["Recruitment", "Training"],
  },
  {
    id: 103,
    name: "Mike Johnson",
    department: "IT",
    salary: 80000,
    skills: ["Java", "C++", "Cloud"],
  },
  {
    id: 104,
    name: "Sarah Williams",
    department: "Marketing",
    salary: 70000,
    skills: ["SEO", "Content", "Social"],
  },
];
