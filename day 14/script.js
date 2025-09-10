// DOM: Get element by ID (DOM API)
var parent = document.getElementById("parent"); //1

// DOM: Get another element by ID (DOM API)
var parent2 = document.getElementById("parent2"); //1

// DOM: Create new element (DOM API)
var child = document.createElement("h1"); //2

// DOM: Set inner HTML content (DOM API)
child.innerHTML = "Hello World"; //3

// DOM: Add CSS class to element (DOM API)
child.classList.add("card"); //4

// DOM: Append child to parent - commented out (DOM API)
// parent.appendChild(child); //5

// DOM: Append child to second parent (DOM API)
parent2.appendChild(child);

// DOM: Append same child to first parent (moves element from parent2 to parent) (DOM API)
parent.appendChild(child);

// ####### remove###########

// DOM: Get paragraph element by ID (DOM API)
var item = document.getElementById("para");

// JS: Function declaration
function removeItem() {
  // DOM: Remove element directly - commented out (DOM API)
  // item.remove();

  // DOM: Remove child from parent (DOM API)
  parent2.removeChild(item);
}

// JS: Function declaration
function addItem() {
  // DOM: Append element to parent (DOM API)
  parent2.appendChild(item);
}

// JS: Array declaration
var items = ["nada", "mohamed", "ali", "sara", "omar"]; //4

// JS: Counter variable
var counter = 0;

// JS: Function declaration
function addItems() {
  // DOM: Create new element (DOM API)
  var ele = document.createElement("h5");

  // DOM: Set text content (DOM API)
  ele.innerText = items[counter];

  // DOM: Add CSS class (DOM API)
  ele.classList.add("card");

  // DOM: Append element to parent (DOM API)
  parent2.append(ele);

  // JS: Conditional logic to manage counter
  if (counter < items.length - 1) {
    counter++;
  } else {
    counter = 0;
  }
}

// DOM: Get button elements by ID (DOM API)
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

// DOM: Assign mouseover event handler (DOM API)
btn1.onmouseover = function () {
  // DOM: Change style (DOM API)
  btn1.style.backgroundColor = "red";
};

// DOM: Assign mouseleave event handler (DOM API)
btn1.onmouseleave = function () {
  // DOM: Change style (DOM API)
  btn1.style.backgroundColor = "blue";
};

// DOM: Add click event listener with anonymous function (DOM API)
btn4.addEventListener("click", function () {
  // DOM: Append text to element (DOM API)
  item.innerText += " Nada Harby";
});

// DOM: Assign mouseover event handler to paragraph (DOM API)
item.onmouseover = function () {
  // DOM: Change background gradient (DOM API)
  item.style.background = "linear-gradient(to right, red , yellow)";
};

// DOM: Assign mouseleave event handler to paragraph (DOM API)
item.onmouseleave = function () {
  // DOM: Reset background (DOM API)
  item.style.background = "transparent";
};

// DOM: Add click event listener to button (DOM API)
btn2.addEventListener("click", function () {
  // DOM: Create new paragraph element (DOM API)
  var newItem = document.createElement("p");

  // DOM: Set HTML content (DOM API)
  newItem.innerHTML = "New Paragraph";

  // DOM: Add CSS class (DOM API)
  newItem.classList.add("card");

  // DOM: Append to parent (DOM API)
  parent2.append(newItem);
});

// ###############
// DOM: Get form element by ID (DOM API)
var form = document.getElementById("form");

// DOM: Get email input by ID (DOM API)
var email = document.getElementById("exampleInputEmail1");

// DOM: Get password input by ID (DOM API)
var password = document.getElementById("exampleInputPassword1");

// DOM: Add submit event listener to form (DOM API)
form.addEventListener("submit", function (e) {
  // DOM: Prevent default form submission (DOM API)
  e.preventDefault();

  // DOM: Create new paragraph elements (DOM API)
  var p1 = document.createElement("p");
  var p2 = document.createElement("p");

  // DOM: Set text content from input values (DOM API)
  p1.innerText = email.value;
  p2.innerText = password.value;

  // DOM: Add CSS classes (DOM API)
  p1.classList.add("card");
  p2.classList.add("card");

  // DOM: Append both elements to parent (DOM API)
  parent2.append(p1, p2);
});

// #######

// JS: setTimeout with anonymous function - commented out (Web API)
// setTimeout(function () {
//   DOM: Change background color (DOM API)
//   item.style.backgroundColor = "yellow";
// }, 2000);

// ES6: setTimeout with arrow function - commented out (Web API + ES6)
// setTimeout(() => {
// DOM: Create element - commented out (DOM API)
// var ele = document.createElement("h5");
//   DOM: Set text content - commented out (DOM API)
//   ele.innerText = items[counter];
//   DOM: Add class - commented out (DOM API)
//   ele.classList.add("card");
//   DOM: Append element - commented out (DOM API)
//   parent2.append(ele);
//   JS: Conditional logic - commented out
//   if (counter < items.length - 1) {
//     counter++;
//   } else {
//     counter = 0;
//   }
// }, 2000);

// ES6: setInterval with arrow function - commented out (Web API + ES6)
// setInterval(() => {
//   DOM: Create element - commented out (DOM API)
//   var ele = document.createElement("h5");
//   DOM: Set text content - commented out (DOM API)
//   ele.innerText = items[counter];
//   DOM: Add class - commented out (DOM API)
//   ele.classList.add("card");
//   DOM: Append element - commented out (DOM API)
//   parent2.append(ele);
//   JS: Conditional logic - commented out
//   if (counter < items.length - 1) {
//     counter++;
//   } else {
//     counter = 0;
//   }
// }, 2000);

// ####
// Web API: localStorage - commented out (Web API)
// localStorage

// Web API: sessionStorage - commented out (Web API)
// sessionStorage
