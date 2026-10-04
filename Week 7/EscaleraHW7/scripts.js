// Program designed to show a multiplication table for the number chose by the user
let nume=Number(prompt("Choose a number: ")); // Variable that ask for a number
for (let i=1; i<=10; i++){ //Loop that contains the initialization, the conditiona and the expression
    let total=i*nume; // Contains the multiplication of the numbers
    console.log(i+" x "+nume+" = "+total); // Shows the multiplication table in the console
}
6

// The program shows Fizz if the number can be divided by 3 and Buzz is it is by 5 and FizzBuzz is it is for both
let num=Number(prompt("Choose a number: ")); //Let the user chose the number they wanted to count
let count=1;
while (count<=num){ //Main loop, where it would count until the number given
    let three=count%3;
    let five=count%5;
    if (three===0 && five===0){ //Comaprison of the numbers given and the variables creates to make sure they acomplish the conditions
        console.log(count+" FizzBuzz");
    }
    else if (three===0){
    console.log(count+" Fizz");
    } else if (five===0){
    console.log(count+" Buzz");
    }else{
        console.log(count)
    }
    count++; //It would add 1 to count each time
}