// Select the form element
// This throws the result in the console
// const form=document.getElementById("contactForm");
// //Liste for the submit event
// form.addEventListener("submit", function(event){
//     event.preventDefault(); // Stops the page from reloading the when user submits form
//     // Get the input value
//     const name=document.getElementById("name").value;
//     // In the console, state Hello "username"
//     console.log("Hello, ", name);
// });

//Display data on the front side of the website
const result=document.getElementById("contactForm");
result.addEventListener("submit", (event)=>{
    event.preventDefault();
    const name=document.getElementById("name").value;
    result.innerHTML=`<p> Hello, ${name}! Thanks for submitting. </p>`;
})