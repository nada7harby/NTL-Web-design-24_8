// DOM: Get element by ID (DOM API)
var heading1 = document.getElementById("head1");
// JS: Log element to console
console.log(heading1);

// DOM: Get elements by class name (returns HTMLCollection) (DOM API)
var p1 = document.getElementsByClassName("parag1");
// JS: Log HTMLCollection to console
console.log(p1);

// DOM: Get elements by tag name (returns HTMLCollection) (DOM API)
var AllP = document.getElementsByTagName("p");
// JS: Log HTMLCollection to console
console.log(AllP);

// DOM: Get elements by tag name (returns HTMLCollection) (DOM API)
var AllH1 = document.getElementsByTagName("h1");
// JS: Log HTMLCollection to console
console.log(AllH1);

// DOM: Query selector (returns first matching element) (DOM API)
var span1 = document.querySelector("div span");
// JS: Log element to console
console.log(span1);

// DOM: Query selector with class (returns first matching element) (DOM API)
var p2 = document.querySelector(".parag1");
// JS: Log element to console
console.log(p2);

// DOM: Query selector all (returns NodeList) (DOM API)
var allp2 = document.querySelectorAll(".parag1");
// JS: Log NodeList to console
console.log(allp2);

// DOM: Get parent element of span (DOM API)
console.log(span1.parentElement);
// DOM: Store parent element in variable (DOM API)
var parent2 = span1.parentElement;

// DOM: Get element by ID (DOM API)
var parent = document.getElementById("parent");
// DOM: Get children elements (returns HTMLCollection) (DOM API)
console.log(parent.children);
// DOM: Get first child element (DOM API)
console.log(parent.firstElementChild);
// DOM: Get last child element (DOM API)
console.log(parent.lastElementChild);

// DOM: Get all images in document (returns HTMLCollection) (DOM API)
var images = document.images;
// JS: Log HTMLCollection to console
console.log(images);

// DOM: Get all links in document (returns HTMLCollection) (DOM API)
var links = document.links;
// JS: Log HTMLCollection to console
console.log(links);

// #####################
// DOM: Set inner HTML (renders HTML content) (DOM API)
heading1.innerHTML = "<a href='#'>helllllllo</a>";
// DOM: Set inner text (escapes HTML) - commented out (DOM API)
// heading1.innerText =  "<a href='#'>helllllllo</a>";
// DOM: Set text content (includes hidden text) - commented out (DOM API)
// heading1.textContent =  "<a href='#'>helllllllo</a>";

// DOM: Get inner text (visible text only) (DOM API)
console.log(parent.innerText);
// DOM: Get text content (all text including hidden) (DOM API)
console.log(parent.textContent);

// DOM: Replace all content with new HTML (DOM API)
parent.innerHTML = "<span>hello</span>";

// #####################
// DOM: Get image source attribute (DOM API)
console.log(images[1].src);

// DOM: Set image source attribute (DOM API)
images[1].src = "bg3.jpg";
// DOM: Set image alt attribute (DOM API)
images[1].alt = "image two";

// DOM: Set link href attribute (DOM API)
links[1].href = "https://www.linkedin.com/feed/";

// DOM: Set attribute using setAttribute method (DOM API)
images[2].setAttribute("src", "bg3.jpg");
// DOM: Set attribute using setAttribute method (DOM API)
images[2].setAttribute("alt", "image three");

// DOM: Get attribute using getAttribute method (DOM API)
console.log(images[0].getAttribute("src"));

// DOM: Remove attribute from element (DOM API)
images[0].removeAttribute("alt");

// DOM: Set class attribute using setAttribute - commented out (DOM API)
// parent.setAttribute("class", "card");

// DOM: Set class name directly - commented out (DOM API)
// parent.className = "card";

// DOM: Add class using classList - commented out (DOM API)
// parent.classList.add("card");

// JS: Function declaration
function Change() {
  // DOM: Toggle class using classList (DOM API)
  parent.classList.toggle("card");
  // DOM: Add class using classList - commented out (DOM API)
  // parent.classList.add("card");
  // DOM: Remove class using classList - commented out (DOM API)
  // parent.classList.remove("card");
}

// JS: Function declaration
function changeContent() {
  // DOM: Append HTML content (DOM API)
  parent.innerHTML += "<h1>changed</h1>";
}

// JS: Function declaration
function changeStyle() {
  // DOM: Set inline style color (DOM API)
  parent.style.color = "#fff";
  // DOM: Set inline style background color (DOM API)
  parent.style.backgroundColor = "red";
  // DOM: Set inline style border radius (DOM API)
  parent.style.borderRadius = "50px";
}
