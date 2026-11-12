console.log("Linked");

const result=document.getElementById("contactForm");
result.addEventListener("submit", (event)=>{
    event.preventDefault();
    const cityInput = document.getElementById("city"); //Only selects the element
    const city = cityInput.value; //this gets what the user typed
    console.log(city); // shows what the user typed on the console
    
    let username = "   student123   ";
    console.log(username.trim());

    // the .trim() method removes whitespaces from the beginning and end of a string.
    const message=document.getElementById("favoriteColor").value;
    //the trim makes the the spaces of the message variable dissapear and compares
    if (message.trim() === "") {  
        console.log("The field is empty."); 
        const colorMessage = document.getElementById("colorMessage");
        colorMessage.textContent = "Please enter your favorite color.";
        //The message appears inside the paragraph
        colorMessage.className = "error";
        //It is showed if the message is empty even if it contains whitespaces
    } else{
        colorMessage.textContent="";
        colorMessage.className="success"
    };

    const numberPattern = /^[0-9]{3}$/;
    // The / / defines the regular expresion
    // ^ Beggining of the text
    // [0-9] any digit from 0 through 9
    // {3} exactly 3 occurrences
    // $ End of the text
    // The pattern will accept  123 but it rejects 12, 4567, or ABC 
    console.log(numberPattern.test("123"));
    console.log(numberPattern.test("12"));
    console.log(numberPattern.test("ABC"));
    //The test method returns a Boolean value, and the results can be used inside an if statement

    //Basic format check for emails
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // ^ start of the text
    // [^\s@]+ one or more characters that re nit whitespace or @
    // @ requires the @ symbol
    // [^\s@]+ requires text after the @
    // \. requires a period
    // [^\s@]+ requires text after the period
    // $ end of the text


    result.reset(); //Used to clear the input fields
});

//It suppose to check the field after the user leave it
const gameInput = document.getElementById("favoriteGame");
gameInput.addEventListener("blur", () => {
    if (gameInput.value.trim()===""){
        gameMessage.textContent = "Please enter your favorite game.";
        gameMessage.className="error"
    }

});

// The input event occurs when the input's value changes through user interaction.
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", () => {
    console.log(searchInput.value);

});