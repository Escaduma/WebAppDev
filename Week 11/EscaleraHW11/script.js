console.log("linked");

// It would make the text go light and the background go darker
const darkB=document.getElementById("themeToggle");
darkB.textContent="Dark Mode";
darkB.addEventListener("click", () =>{
    document.body.classList.toggle("dark");
    console.log("Theme Changed");
});

const addBtn=document.getElementById("addItem");
const list=document.getElementById("items");
addBtn.textContent="Add a happy face";
let counter=""; // The start of the variable

addBtn.addEventListener("click", () => { 
    const newItem=document.createElement("li"); // Creates a new element in the list
    counter+="(●'◡'●)"; // The variable counter is incrementing one happy face evry time
    newItem.textContent=counter; // changes the text for the counter varible
    list.appendChild(newItem); // shows the new row of happy faces
    
});

//This would delete the rows that are clicked by the pointer
list.addEventListener("click", (event) => { 
    if(event.target.tagName === "LI"){ // Checks if an element of the list was clicked
        event.target.remove();
        console.log("You removed an item");
    }
});

// Will show the key pressed
const keyOut=document.getElementById("keyOutput");
document.addEventListener("keyup", (event) => {
    keyOutput.textContent="You pressed: "+ event.key;
})