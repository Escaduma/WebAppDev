console.log("Linked");

//select the form and the place where the info will be showed
const form=document.getElementById("signUp");
const show=document.getElementById("show");

form.addEventListener("submit", function(event){ //When the buttons is clicked the the following happens
    event.preventDefault(); // Prevents to refresh the page

    // Read the values written or chosen by the user
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const artist=document.getElementById("artist").value;
    const message=document.getElementById("message").value;
    //Obtains the value of the radio selected
    const updates=document.querySelector('input[name="receive"]:checked').value;
    
    // Show the message for the user
    show.innerHTML=
        "Thanks " +name+ " for suscribe<br> You are going to receive updates "+updates+" of the artist "+artist+" in the following email: "+email+"<br>With the following message:" +message;

});