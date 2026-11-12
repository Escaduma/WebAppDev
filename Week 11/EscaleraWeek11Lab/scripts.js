console.log("linked");//USed to make sure the docuemnt is linked tot he html

// When the button is clicked the color of the brackground would be darker.
const buttonCM=document.getElementById("clickBtn");
buttonCM.textContent="Change to dark";
buttonCM.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// The button needs to be double-clicked and it would change the color, type of font and
// the aling of the text
const buttonDCM=document.getElementById("dblBtn");
buttonDCM.textContent="Double-click me to change style";
buttonDCM.addEventListener("dblclick", () => {
    document.body.classList.toggle("title");
});

// The text writted by the user is writted in the end of the page
// also the text printed in the box is changed
const textIn=document.getElementById("textInput");
textIn.placeholder="Tell me your Secret...";
textIn.addEventListener("input", () => {
    const output=document.getElementById("output");
    output.textContent=textIn.value;
});

// When the pointer hoves the text the text would change, it would be bigger, 
// color blue and tell hello stranger
const hoText=document.getElementById("hoverText");
hoText.addEventListener("mouseover", () => {
    hoText.style.color="#320be0";
    hoText.style.fontSize="20px";
    hoText.textContent="Hello Stranger!";
});

//When the pointer is not in the text, the text would change and
// would show Goodbye stranger in color green
hoText.addEventListener("mouseout", () => {
    hoText.style.color="#2bc01e";
    hoText.style.fontSize="20px";
    hoText.textContent="Goodbye Stranger!";
});