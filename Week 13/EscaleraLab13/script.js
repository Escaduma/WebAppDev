console.log("Linked");

//defines the constants that are gonna be used in the different events
const form=document.getElementById("contactForm");
const result=document.getElementById("info");

const nameP=document.getElementById("nameP");
const emailP=document.getElementById("emailP");
const phoneP=document.getElementById("phoneNumP");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

// Event that would make the button work
form.addEventListener("submit", (event)=>{
    event.preventDefault();

    //Constants that contains the value typoed by the user
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const phone=document.getElementById("phoneNum").value;

    // Makes the texts in the paragraphs dissapears every time the button is clicked and all works fine
    nameP.textContent="";
    emailP.textContent="";
    phoneP.textContent="";
    result.textContent="";

    let valid=true;


    //every if makes sure that the inputs are not "empty" or with only whitespaces
    if (name.trim()===""){
        nameP.textContent="Please Enter Your Name";
        valid=false;
    }

    // Contains and extra if, which makes sure the pattern of the email is followed, if not it will tell to the user
    if (email.trim()===""){
        emailP.textContent="Please Enter Your Email";
        valid=false
    } else if (emailPattern.test(email.trim()) === false){
        emailP.textContent="Please Enter A Valid Email";
        valid=false;
    }

    if (phone.trim()===""){
        phoneP.textContent="Please Enter Your Phone Number";
        valid=false;
    } else if (phonePattern.test(phone.trim()) === false){
        phoneP.textContent="Invalid Phone Number";
    }

    if(valid===true){
        result.textContent="Form Submitted successfully";
        result.className="success";
    }
});

// Blur event for the name, which makes that every time the user changes to other input and the name is empty a text will appear
const nameInput=document.getElementById("name");
nameInput.addEventListener("blur", () =>{
    if (nameInput.value.trim()===""){
        nameP.textContent="Please Enter Your Name";
    } else {
        nameP.textContent="";
    }
});

const emailInput=document.getElementById("email");
emailInput.addEventListener("blur", () => {
    if (emailInput.value.trim()===""){
        emailP.textContent="Please Enter Your Email";
    } else if(emailPattern.test(emailInput.value.trim())===false){
        emailP.textContent="Enter a valid Email";
    } else {
        emailP.textContent="";
    }
});

//The input event would help to make sure result text is empty every time you change something in the form
form.addEventListener("input", () =>{
    result.textContent="";
})