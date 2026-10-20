//Program designed to show a multiplication table based on what the user wants

function userInput(){ //Function made to ask the user what they want, and also it calls other function and save the data in that function
//I decided to make this to separate the user input and the calculations
    let userNum=Number(prompt("What multiplication table do you want to see? "));
    let userLong=Number(prompt("How long do you want the table?"));
    loop(userNum, userLong);
}

function loop(num, num2){//prints the result of the multiplication with a loop, this make easier to find the part that show the result
    for(let i=1; i<=num2; i++){
        let total=multiply(i,num);
        console.log(i+" X "+num+" = "+total);
        document.body.innerHTML+= i+" X "+num+" = "+total+"<br>";
    }
}

function multiply(x,y){ // Contains the operation to get the result, easier to find and see if there is an error in the operation
    return x*y;
}

userInput(); //Used to call the first function in order to make the program run.