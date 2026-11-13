console.log("Linked");

const form=document.getElementById("contactForm");
const result=document.getElementById("info");

const nameP=document.getElementById("nameP");
const emailP=document.getElementById("emailP");
const phoneP=document.getElementById("phoneNumP");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const phone=document.getElementById("phoneNum").value;

    nameP.textContent="";
    emailP.textContent="";
    phoneP.textContent="";
    result.textContent="";

    let valid=true;


    if (name.trim()===""){
        nameP.textContent="Please Enter Your Name";
        valid=false;
    }

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

form.addEventListener("input", () =>{
    result.textContent="";
})