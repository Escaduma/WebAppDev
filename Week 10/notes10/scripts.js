console.log("Linked");

// DOM and basic Manipulation
// What is a DOM?
// Document Object Model, this is how the browser represents you wabe page in memory
// HTML elements becomes a JS object that we can access, change or delete
// JS to change text, images, colors, classes, etc. This occurs after the web page fully loads

// Change text content with JS
// We are going to find the HTML Element via ita ID attribute
const title=document.getElementById("title");
// Document, represents the whole webpage loaded in the browser
// .getElementByID("title"), finds the element in the html with the exact ID
//Const, menas that the variable references wont change, it will always dpoint to the dame DOM element

title.textContent="Hello Stranger!";
// .textContent accesses or changes the text inside the element

// Selecting Elements
// getElementsByID(), Selects one element by its ID,      document.getElementByID("Title")

// querySelector(), Selects the first match (ID, class, tag) document.querySleector(".main")

// querySelectorAll(), Returns a Nodelist of all matches document.querySelectorAll("p")


// QuerySelector
const mainSection=document.querySelector(".main");
mainSection.style.backgroundColor="#ee44ad";

// QuerySelectorAll
const paragraphs=document.querySelectorAll("p");
// Loop through all p elements and change their text
paragraphs.forEach((para, index) => {
    para.textContent= `Paragraph ${index + 1} modified by querySelectorAll()`;
    para.style.color="#5d0281";
});


// Adding interactivity with Event Listeners
// Select Button
const button=document.getElementById("toggle");
//Listen for a button click
button.addEventListener("click",() => {
    //toggle the highlight class on the body
    document.body.classList.toggle("highlight");
});