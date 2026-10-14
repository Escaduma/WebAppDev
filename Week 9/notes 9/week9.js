///Waht is a function?
// Reusable block of code designed to perform a specific task

function greetUser(){
    console.log("Hello There");
}

greetUser(); // Calls (executes) the function

// Function structure
// Keyword, function: Tells JS we're defininf a function
// Name: Identify the function
// Parameters: Variable inside the parentheses that receive data
// Body: the code between {}

// Prameters and arguments
// Prameter: Placeholders when defining a function
// Arguments: Actual value when calling it

function greet(name){
    console.log("Hello " + name);
}

greet("Sebastian"); //"Sebastian" is th eargument

// Function that add two numbers together 
// then console the total

function addNumbers(a,b){
    return (a+b);
}

let total=addNumbers(4,6);
console.log("The total is: "+ total);

// Return sends a value back to where the function was called
// console.log() just prints it

// Return is lile your function handing you back a notes with the answer written on it
// Console.log is your function yelling the answer out loud, we hear it but we cant use it again

function multiply(x,y){
    return x*y;
}

let result=multiply(15,15);
console.log(result); //225

//Create a function that will count to 5 by 1s
function countToN(n){
    for (let i=1; i<=n; i++){
        console.log(i);
    }
}
countToN(5);

//Nested Functions
// Function can call another function inside of it
function square(num){
    return num*num;
}

function printSquare(num){
    console.log("Square is: " +square(num));
}
printSquare(6);


// Greets the user, asks for their name, then prints it
function username(){
    let name=prompt("What's your name? ");
    console.log("Welcome, "+ name);
}
username();