console.log("Linked");

const form=document.getElementById("signUp");
const show=document.getElementById("show");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const artist=document.getElementById("artist").value;
    const updates=document.querySelector('input[name="receive"]:checked').value;
    
    show.innerHTML=
        "Thanks " +name+ " for suscribe<br> You are going to receive updates "+updates+" of the artist "+artist+" in the following email: "+email;

});